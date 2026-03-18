#!/usr/bin/env bash
set -euo pipefail

if ! command -v gcloud >/dev/null 2>&1; then
  echo "Missing dependency: gcloud" >&2
  exit 1
fi

if ! command -v jq >/dev/null 2>&1; then
  echo "Missing dependency: jq" >&2
  exit 1
fi

: "${CUSTOMER_SLUG:?Missing CUSTOMER_SLUG}"
: "${GOOGLE_CLOUD_PROJECT:?Missing GOOGLE_CLOUD_PROJECT}"
: "${GCP_REGION:?Missing GCP_REGION}"

generate_secret() {
  python3 - <<'PY'
import secrets
print(secrets.token_urlsafe(32))
PY
}

DB_USER_SLUG="${DB_USER_SLUG:-${CUSTOMER_SLUG//-/_}}"
SQL_INSTANCE_NAME="${SQL_INSTANCE_NAME:-agentlayer-customers}"
DB_NAME="${DB_NAME:-$CUSTOMER_SLUG}"
DB_USER="${DB_USER:-${DB_USER_SLUG}_app}"
DB_ROOT_PASSWORD="${DB_ROOT_PASSWORD:-$(generate_secret)}"
DB_PASSWORD="${DB_PASSWORD:-$(generate_secret)}"
PRIVATE_NETWORK="${PRIVATE_NETWORK:-}"
ASSIGN_PUBLIC_IP="${ASSIGN_PUBLIC_IP:-true}"

gcloud config set project "$GOOGLE_CLOUD_PROJECT" >/dev/null
gcloud services enable sqladmin.googleapis.com servicenetworking.googleapis.com >/dev/null

if ! gcloud sql instances describe "$SQL_INSTANCE_NAME" >/dev/null 2>&1; then
  echo "[cloud-sql] creating instance ${SQL_INSTANCE_NAME}" >&2
  create_args=(
    gcloud sql instances create "$SQL_INSTANCE_NAME"
    --database-version=POSTGRES_17
    --edition=ENTERPRISE
    --tier=db-f1-micro
    --region="$GCP_REGION"
    --storage-type=SSD
    --storage-size=10
    --availability-type=zonal
    --root-password="$DB_ROOT_PASSWORD"
    --no-backup
  )

  if [[ -n "$PRIVATE_NETWORK" ]]; then
    create_args+=("--network=$PRIVATE_NETWORK")
  fi

  if [[ "${ASSIGN_PUBLIC_IP,,}" == "true" ]]; then
    create_args+=("--assign-ip")
  else
    create_args+=("--no-assign-ip")
  fi

  "${create_args[@]}" >/dev/null
fi

instance_json="$(gcloud sql instances describe "$SQL_INSTANCE_NAME" --format=json)"
current_private_network="$(jq -r '.settings.ipConfiguration.privateNetwork // empty' <<<"$instance_json")"
current_ipv4_enabled="$(jq -r '.settings.ipConfiguration.ipv4Enabled' <<<"$instance_json")"

patch_args=()
if [[ -n "$PRIVATE_NETWORK" && "$current_private_network" != *"/${PRIVATE_NETWORK}" ]]; then
  patch_args+=("--network=$PRIVATE_NETWORK")
fi

if [[ "${ASSIGN_PUBLIC_IP,,}" == "true" && "$current_ipv4_enabled" != "true" ]]; then
  patch_args+=("--assign-ip")
fi

if [[ "${ASSIGN_PUBLIC_IP,,}" != "true" && "$current_ipv4_enabled" == "true" ]]; then
  patch_args+=("--no-assign-ip")
fi

if (( ${#patch_args[@]} > 0 )); then
  echo "[cloud-sql] patching instance ${SQL_INSTANCE_NAME}" >&2
  gcloud sql instances patch "$SQL_INSTANCE_NAME" "${patch_args[@]}" --quiet >/dev/null
fi

if ! gcloud sql databases describe "$DB_NAME" --instance="$SQL_INSTANCE_NAME" >/dev/null 2>&1; then
  echo "[cloud-sql] creating database ${DB_NAME}" >&2
  gcloud sql databases create "$DB_NAME" --instance="$SQL_INSTANCE_NAME" >/dev/null
fi

if gcloud sql users list --instance="$SQL_INSTANCE_NAME" --format='value(name)' | rg -x "$DB_USER" >/dev/null 2>&1; then
  echo "[cloud-sql] rotating password for ${DB_USER}" >&2
  gcloud sql users set-password "$DB_USER" \
    --instance="$SQL_INSTANCE_NAME" \
    --password="$DB_PASSWORD" >/dev/null
else
  echo "[cloud-sql] creating user ${DB_USER}" >&2
  gcloud sql users create "$DB_USER" \
    --instance="$SQL_INSTANCE_NAME" \
    --password="$DB_PASSWORD" >/dev/null
fi

instance_json="$(gcloud sql instances describe "$SQL_INSTANCE_NAME" --format=json)"
private_ip="$(
  jq -r '
    (.ipAddresses // [])
    | map(.ipAddress)
    | map(select(test("^10\\.")))
    | .[0] // ""
  ' <<<"$instance_json"
)"
public_ip="$(
  jq -r '
    (.ipAddresses // [])
    | map(select(.type == "PRIMARY"))
    | .[0].ipAddress // ""
  ' <<<"$instance_json"
)"

private_uri=""
public_uri=""
if [[ -n "$private_ip" ]]; then
  private_uri="postgresql+psycopg2://${DB_USER}:${DB_PASSWORD}@${private_ip}:5432/${DB_NAME}"
fi
if [[ -n "$public_ip" ]]; then
  public_uri="postgresql+psycopg2://${DB_USER}:${DB_PASSWORD}@${public_ip}:5432/${DB_NAME}"
fi

echo
echo "export SQL_INSTANCE_NAME=${SQL_INSTANCE_NAME}"
echo "export DB_NAME=${DB_NAME}"
echo "export DB_USER=${DB_USER}"
echo "export DB_PASSWORD=${DB_PASSWORD}"
echo "export DB_ROOT_PASSWORD=${DB_ROOT_PASSWORD}"
echo "export SQL_PRIVATE_IP=${private_ip}"
echo "export SQL_PUBLIC_IP=${public_ip}"
echo "export SUGGESTED_DATABASE_URI_PRIVATE=${private_uri}"
echo "export SUGGESTED_DATABASE_URI_PUBLIC=${public_uri}"

cat <<'EOF'

Notes:
- Prefer the private URI for Dify if the Dify runtime is on the same VPC.
- Inject the resulting private URI directly as a Dify workflow/app secret such as `DATABASE_URI`.
EOF
