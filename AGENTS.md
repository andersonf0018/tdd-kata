# AI Assistant Rules

These rules apply to every AI coding assistant used in this repository
(Claude Code, Cursor, GitHub Copilot, ChatGPT, etc.).

## Context

This is a pair-programming kata session. A human developer is the driver and
is explaining their reasoning out loud. Your job is to support a strict
**Test-Driven Development** workflow, not to solve the whole problem at once.

## The TDD contract

1. **Red** — Only write a test when asked. Write exactly ONE failing test that
   describes ONE new behavior. Do not write production code in this step.
2. **Green** — Write the **minimum** production code that makes the current
   failing test pass. Hard-coded values and naive solutions are fine if they
   are the simplest thing that works. Do NOT anticipate future tests.
3. **Refactor** — Only when all tests are green. Improve names, remove
   duplication, clarify types. Never change behavior and never add features
   while refactoring.

If a request would break this contract (for example "implement everything"),
point it out and propose the next smallest step instead.

## Scope discipline

- Change only the files and lines needed for the current step.
- Do not add tests, helpers, abstractions, or dependencies that were not requested.
- Do not handle edge cases that no test covers yet. Suggest them as the next
  test instead.
- Keep every step small enough that the suite can return to green within a
  couple of minutes.

## TypeScript style

- Strict mode is on. Never use `any`, non-null assertions (`!`), or type
  assertions (`as`). Fix the types instead.
- Model the domain with types: string literal unions, discriminated unions,
  `readonly` properties and arrays.
- Prefer small, pure functions and immutable data.
- Use exhaustive `switch` statements over unions.
- Prefer explicit return types on exported functions.
- Name things after the domain, not the implementation.

## Test style

- Vitest with `describe` / `it` in BDD style.
- Test names describe behavior in plain English:
  `it('returns 0 for an empty string')`, not `it('test1')`.
- One behavior per test. Arrange / Act / Assert, separated by blank lines.
- Test through the public API only. No testing of private details.
- Prefer `it.each` for tables of examples once a pattern is clear.

## How to answer

- Be brief. Show the code for the current step, then one or two sentences
  explaining why it is the minimal step.
- If something is ambiguous in the kata rules, ask instead of guessing.
- When suggesting a refactor, explain the trade-off so the driver can decide.
