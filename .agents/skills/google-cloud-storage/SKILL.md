---
name: google-cloud-storage
description: Provision and prepare shared Google Cloud Storage paths for Dify workflows and agents. Use when a workflow or agent needs customer-scoped file storage, retrieval, or stable object references in Google Cloud Storage.
---

# Google Cloud Storage

Use this skill when a customer workflow or agent needs:

- Shared Google Cloud Storage infrastructure at the project level
- One logical prefix per customer inside a shared bucket
- Stable `gs://bucket/prefix/...` references for operational files

## Default Pattern

- Bucket: `agentlayer-customers`
- Prefix: `<customer-slug>/`

## Script

- Path: `./.agents/skills/google-cloud-storage/scripts/provision_customer_prefix.sh`

The script ensures the shared bucket exists, ensures the customer prefix exists, and optionally grants object access to a service account.

## Required Inputs

- `CUSTOMER_SLUG`
- `GOOGLE_CLOUD_PROJECT`
- `GCP_REGION`

## Optional Overrides

- `GCS_BUCKET_NAME`
- `GCS_PREFIX`
- `SERVICE_ACCOUNT_EMAIL`

## Usage

```bash
CUSTOMER_SLUG=sils-chile \
GOOGLE_CLOUD_PROJECT=agentlayer \
GCP_REGION=southamerica-west1 \
./.agents/skills/google-cloud-storage/scripts/provision_customer_prefix.sh
```
