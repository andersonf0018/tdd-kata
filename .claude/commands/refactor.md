---
description: REFACTOR - propose (do not apply) refactorings while green
argument-hint: [optional focus, e.g. naming, duplication, types]
---

TDD phase: **REFACTOR**. The suite must be green before refactoring.

Focus (optional): $ARGUMENTS

Propose up to 3 refactorings for the production code and tests, ordered by value.
For each one give:

- what changes (one line),
- why it improves the code,
- the trade-off or risk.

Do NOT apply anything yet. I will choose which one to apply.
When I choose, change behavior-preserving code only; the tests run
automatically and must stay green.
