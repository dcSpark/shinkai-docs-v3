# Quality Rubric (9-Block Prompts)

Score each area from `0` to `2`.

- `0`: Missing
- `1`: Partial
- `2`: Clear and enforceable

Target score: `15+ / 18`.

## Checks

1. Identity and boundaries
- Role is explicit.
- In-scope and out-of-scope behavior is explicit.

2. Objective
- Success condition is measurable.
- Output audience/use-case is clear.

3. Context and data separation
- Static instructions and runtime payload are separated.
- Data source of truth is explicit.

4. Process quality
- Steps are ordered and minimal.
- Steps can be executed without guesswork.

5. ReAct usage
- Tool flow is defined (`Thought -> Action -> Observation -> Result`).
- Prompt does not require exposing private chain-of-thought.

6. Few-shot guidance
- Example input/output pairs are relevant and short.
- Examples reinforce the exact output style.

7. Output format strictness
- Expected output schema is explicit.
- Prompt says to return only the required format when machine-consumed.

8. Tool contracts
- Tool names, purpose, and return fields are defined.
- Tool usage constraints are explicit.

9. Architectural simplicity
- Prompt avoids unnecessary orchestration complexity.
- Environment + tools + system prompt baseline is preserved.
