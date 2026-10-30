---
description: Ask the independent tdd-reviewer subagent to review the current code
argument-hint: [optional files or focus]
---

Use the **tdd-reviewer** subagent to review the current state of the kata.

Scope (optional): $ARGUMENTS

Pass the reviewer only the file paths to review (default: everything under
`src/kata/`), not your own reasoning or the history of this conversation, so the
review is independent.

When the reviewer returns, summarize its findings in a short list and, for each
item, say whether you agree and why. Do NOT apply any changes. I will decide.
