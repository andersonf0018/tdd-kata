---
description: GREEN - write the minimum production code to pass the failing test
argument-hint: [optional hint]
---

TDD phase: **GREEN**.

Write the **minimum** production code that makes the currently failing test
pass. $ARGUMENTS

Rules for this step:

- Do not touch the test files.
- Do not generalize beyond what the existing tests require. Hard-coded values or
  naive branches are acceptable if they are the simplest thing that works.
- Do not handle edge cases that no test covers yet. Mention them as candidate
  next tests instead.
- Respect AGENTS.md: no `any`, no `as`, no non-null assertions.

After editing, the tests run automatically. Confirm the whole suite is green.
If it is not, explain why in two sentences before changing anything else.
Then stop and wait for me.
