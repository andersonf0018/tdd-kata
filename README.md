# Kata Starter

TypeScript (strict) + Vitest starter for TDD katas and AI-assisted pair
programming.

## Setup

```bash
nvm use            # Node 22 (any Node >= 20 works)
npm install
npm run check      # typecheck + lint + format + tests, all should pass
git init && git add -A && git commit -m "chore: initial setup"
```

## Daily workflow

```bash
npm run test:watch   # keep this running in a terminal during the session
```

The TDD loop:

1. **Red** — write one failing test and watch it fail for the right reason.
2. **Green** — write the minimum code to pass it.
3. **Refactor** — clean up while staying green.
4. **Commit** — `npm run green -- "feat: handles empty input"` runs every
   check and commits only if everything passes.

If a step goes wrong, go back to the last green state:

```bash
git reset --hard
```

## Scripts

| Script                   | What it does                                       |
| ------------------------ | -------------------------------------------------- |
| `npm test`               | Run the test suite once                            |
| `npm run test:watch`     | Run tests in watch mode                            |
| `npm run test:coverage`  | Run tests with coverage                            |
| `npm run typecheck`      | Type-check with `tsc --noEmit`                     |
| `npm run lint`           | Lint with type-aware ESLint rules                  |
| `npm run format`         | Format with Prettier                               |
| `npm run check`          | Typecheck, lint, format check and tests            |
| `npm run green -- "msg"` | Run all checks, then commit with the given message |

## Project structure

```
src/
  example/        # Worked example (leap year). Delete before the real kata.
  kata/           # Start the real kata here.
docs/
  TEST_LIST.md    # Test list template to fill in with your pair
  AI_PROMPTS.md   # Prompt playbook for each TDD phase
AGENTS.md         # Shared rules for every AI assistant (TDD + TypeScript style)
CLAUDE.md         # Claude Code entry point (imports AGENTS.md)
.cursor/rules/    # Same rules for Cursor
.github/copilot-instructions.md  # Same rules for GitHub Copilot
```

## Strictness

- `tsconfig.json` enables `strict`, `noUncheckedIndexedAccess`,
  `exactOptionalPropertyTypes` and related flags.
- ESLint uses `strictTypeChecked`, forbids `any` and type assertions, and
  requires exhaustive `switch` statements.

## AI usage principles

- The AI works **inside** the TDD loop, one small step at a time.
- Every suggestion is read and explained before it is accepted.
- Over-engineered suggestions are simplified to what the current test needs.
- The rules in `AGENTS.md` are the single source of truth. If you change them,
  copy the changes to `.cursor/rules/tdd-kata.mdc` and
  `.github/copilot-instructions.md`.
