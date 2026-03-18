---
name: agent-instructions-generator
description: Generate and refine agent instruction guides and system prompts (including AGENTS.md) with clear role boundaries, explicit objectives, context/data separation, step-based execution, tool usage patterns, few-shot examples, and strict output formats. Use when asked to create, rewrite, standardize, or audit instructions for tool-using agents.
---

# Agent Instructions Generator

Create reliable agent instructions by enforcing a consistent structure.
Default to explicit, testable guidance and remove sections that are not required by the target agent.

## Required Blocks

Every generated guide or system prompt should include these blocks, in this order:

1. Identity and boundaries
2. Objective (definition of success)
3. Context and data inputs
4. Process (step-by-step)
5. Reasoning and action pattern for tools
6. Few-shot examples
7. Strict output format
8. Tool contracts
9. Architecture simplicity constraints

## Workflow

### 1. Gather Inputs

Collect only the inputs needed to produce high-signal instructions:

- Agent role and domain
- In-scope and out-of-scope behavior
- Task goal and audience for outputs
- Input data shape and source of truth
- Tools available to the agent
- Required output schema (JSON, markdown template, table)
- Runtime and repository constraints

### 2. Choose Output Type

Select one target format before drafting:

- System prompt for an agent runtime
- `AGENTS.md` repository policy guide
- Hybrid output with both

### 3. Draft With the Nine-Block Blueprint

Use [references/prompt-template.md](references/prompt-template.md) as the default template.
Use [references/agents-sections-template.md](references/agents-sections-template.md) when the output is `AGENTS.md`.

### 4. Enforce Reliability Rules

- Use direct, enforceable language
- Separate instructions from contextual data
- Define strict output shape for downstream automation
- Include tool descriptions with return fields
- Keep workflows explicit and short
- Score draft quality with [references/api_reference.md](references/api_reference.md)

### 5. Keep Reasoning Safe and Practical

When using the ReAct pattern:

- Use `Thought -> Action -> Observation -> Result` as an internal workflow
- Do not require exposing private chain-of-thought in final user output
- Allow concise reasoning summaries only when needed

### 6. Remove Non-Essential Content

Prune anything that does not change agent behavior:

- Repeated guidance
- Broad theoretical text without execution value
- Sections that duplicate repository-wide standards

## Output Requirements

- Prefer one complete artifact over fragmented notes
- Include assumptions only when input gaps exist
- If output is machine-consumed, return only the requested schema
