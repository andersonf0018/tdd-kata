# Prompt Playbook for the Pairing Session

Short, reusable prompts for each phase of the TDD cycle. Keep each request
small: one step, one behavior. Always read the output line by line before
accepting it, and say out loud what you accept, change, or reject.

## 0. Understand the problem

> Here are the kata rules: <paste>. Don't write code. List the ambiguities
> I should clarify with my pair, and propose an ordered test list from the
> simplest degenerate case to the most complex.

Then **curate** the list yourself: remove, reorder, simplify.

## 1. Red — write one failing test

> Write ONE Vitest test in BDD style for this behavior: "<behavior>".
> Do not touch production code. Use the existing describe block.

If the function does not exist yet, create only the empty signature so the
test fails on the assertion, not on a compile error.

## 2. Green — minimum code

> The test "<name>" is failing. Write the minimum production code to make it
> pass. Don't generalize and don't handle cases we haven't tested yet.

If the AI over-generalizes, say so and simplify:
_"This already solves cases we haven't tested. I'll cut it back to the
simplest thing so the next test drives the generalization."_

## 3. Refactor

> All tests are green. Suggest up to 3 refactorings for readability or
> duplication, with the trade-off of each. Don't apply them yet.

Pick one, apply it, run the tests, stay green.

## Code review of AI output

> Review this code as a strict senior TypeScript reviewer. Look for hidden
> type assertions, unhandled cases, mutation, and naming that doesn't match
> the domain. Be concise.

## Generating more cases

> Given the current tests, which important behavior or edge case is not
> covered yet? Suggest the next single test only.

## When stuck

> The test "<name>" fails with: <error>. Explain the cause in 2 sentences
> before proposing a fix.

Or: revert to the last green commit (`git reset --hard`) and take a smaller step.

## Phrases worth saying out loud

- "I'll ask the AI for the next step only, not the full solution."
- "The AI suggested X, but no test requires that yet, so I'll leave it out."
- "This `as` hides a typing problem; I'd rather model it with a union."
- "Let me read this before I accept it."
- "We're green, let me commit before refactoring."
