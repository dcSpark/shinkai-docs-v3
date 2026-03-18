# AGENTS.md Template (Condensed)

Use this template for repository- or agent-level instruction files.
Remove sections that are not enforceable for the target codebase.

## 1. Identity and Scope

- Define the repository/agent role.
- Define what is in scope and out of scope.
- State non-negotiable boundaries.

## 2. Objective

- Define what success looks like for contributors and agents.
- Keep objective measurable and implementation-oriented.

## 3. Context Sources

- List canonical sources of truth (paths, docs, schemas).
- Separate stable instructions from volatile runtime data.

## 4. Execution Process

- Provide ordered steps for common work patterns.
- Keep steps minimal and deterministic.

## 5. Tool and API Usage Rules

- Document available tools and intended usage.
- Define namespacing rules for routes, storage keys, and env vars.
- Specify tool/API return expectations when needed.

## 6. Output and Response Contracts

- Define required response envelope shape.
- Define strict output format for machine-consumed workflows.

## 7. Quality Gates

- List lint, typecheck, and test requirements.
- Define code quality constraints (for example avoid `any` unless justified).

## 8. Architecture Simplicity

- State what must stay shared vs agent-local.
- Prefer minimal abstractions and clear ownership.

## 9. New Agent Checklist

- Include setup steps for folders, routes, APIs, and persistence.
- Include acceptance criteria before merge.

## Editing Checklist

- Use direct language with testable rules.
- Avoid duplicate guidance across sections.
- Remove narrative text that does not affect behavior.
