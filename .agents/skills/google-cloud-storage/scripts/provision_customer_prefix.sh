#!/usr/bin/env bash
set -euo pipefail

if ! command -v gcloud >/dev/null 2>&1; then
  echo "Missing dependency: gcloud" >&2
  exit 1
fi

: "${CUSTOMER_SLUG:?Missing CUSTOMER_SLUG}"
: "${GOOGLE_CLOUD_PROJECT:?Missing GOOGLE_CLOUD_PROJECT}"
: "${GCP_REGION:?Missing GCP_REGION}"

GCS_BUCKET_NAME="${GCS_BUCKET_NAME:-agentlayer-customers}"
GCS_PREFIX="${GCS_PREFIX:-$CUSTOMER_SLUG}"
SERVICE_ACCOUNT_EMAIL="${SERVICE_ACCOUNT_EMAIL:-}"

gcloud config set project "$GOOGLE_CLOUD_PROJECT" >/dev/null
gcloud services enable storage.googleapis.com >/dev/null

if ! gcloud storage buckets describe "gs://${GCS_BUCKET_NAME}" >/dev/null 2>&1; then
  echo "[gcs] creating bucket gs://${GCS_BUCKET_NAME}" >&2
  gcloud storage buckets create "gs://${GCS_BUCKET_NAME}" \
    --location="$GCP_REGION" \
    --uniform-bucket-level-access >/dev/null
fi

tmp_keep="$(mktemp)"
printf '' > "$tmp_keep"
gcloud storage cp "$tmp_keep" "gs://${GCS_BUCKET_NAME}/${GCS_PREFIX}/.keep" >/dev/null
rm -f "$tmp_keep"

if [[ -n "$SERVICE_ACCOUNT_EMAIL" ]]; then
  echo "[gcs] granting storage.objectAdmin to ${SERVICE_ACCOUNT_EMAIL}" >&2
  gcloud storage buckets add-iam-policy-binding "gs://${GCS_BUCKET_NAME}" \
    --member="serviceAccount:${SERVICE_ACCOUNT_EMAIL}" \
    --role="roles/storage.objectAdmin" >/dev/null
fi

echo
echo "export GCS_BUCKET_NAME=${GCS_BUCKET_NAME}"
echo "export GCS_PREFIX=${GCS_PREFIX}"
echo "export GCS_URI_PREFIX=gs://${GCS_BUCKET_NAME}/${GCS_PREFIX}"
