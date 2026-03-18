---
name: google-cloud-sql
description: Provision and prepare shared Google Cloud SQL persistence for Dify workflows and agents. Use when a workflow or agent needs customer-scoped operational data, SQL writes, or read-only querying without adding a separate service layer.
---

# Google Cloud SQL

Use this skill when a customer workflow or agent needs:

- Shared Cloud SQL infrastructure at the project level
- One logical database per customer
- A dedicated database user per customer
- A PostgreSQL `DATABASE_URI` that can be injected directly into Dify workflow tools

## Default Pattern

- Cloud SQL instance: `agentlayer-customers`
- Database: `<customer-slug>`
- Database user: `<customer_slug>_app`

## Dify Rule

- Dify database tools need normal network reachability to the database.
- Prefer private IP inside the same VPC as Dify when available.
- Prefer passing a customer-specific `DATABASE_URI` as a Dify workflow secret or app environment variable.
- Avoid relying on workspace-default database credentials.

## Script

- Path: `./.agents/skills/google-cloud-sql/scripts/provision_customer_db.sh`

The script provisions or updates the shared Cloud SQL instance, the customer database, the customer user, and prints suggested PostgreSQL URIs for direct Dify tool usage.

## Required Inputs

- `CUSTOMER_SLUG`
- `GOOGLE_CLOUD_PROJECT`
- `GCP_REGION`

## Optional Overrides

- `SQL_INSTANCE_NAME`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`
- `DB_ROOT_PASSWORD`
- `PRIVATE_NETWORK`
- `ASSIGN_PUBLIC_IP`

## Usage

```bash
CUSTOMER_SLUG=sils-chile \
GOOGLE_CLOUD_PROJECT=agentlayer \
GCP_REGION=southamerica-west1 \
PRIVATE_NETWORK=dify-vpc \
./.agents/skills/google-cloud-sql/scripts/provision_customer_db.sh
```
