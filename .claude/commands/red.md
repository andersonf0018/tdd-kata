---
description: RED - write exactly one failing test for the given behavior
argument-hint: <behavior to test>
---

TDD phase: **RED**.

Behavior to test: $ARGUMENTS

Rules for this step:

- Write exactly ONE new test, in BDD style, inside the existing `describe` block
  of the relevant `*.test.ts` file.
- Do NOT implement production code. If the function or type does not exist yet,
  create only the minimal signature (for example, a function that throws
  `new Error('Not implemented')` or returns a neutral value) so the test fails
  on its assertion, not on a compile error.
- Do not modify other tests.

After editing, the tests run automatically. Confirm that the new test fails and
that it fails for the expected reason. Then stop and wait for me.
