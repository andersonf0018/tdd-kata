#!/usr/bin/env node
// PostToolUse hook: runs the test suite after Claude edits a TypeScript file in src/
// and feeds a short RED/GREEN summary back to Claude.
import { spawnSync } from 'node:child_process';

const readStdin = async () => {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8');
};

const input = JSON.parse((await readStdin()) || '{}');
const filePath = input?.tool_input?.file_path ?? '';

// Only react to TypeScript files inside src/
if (!/[\\/]src[\\/].*\.ts$/.test(filePath)) process.exit(0);

const projectDir = process.env.CLAUDE_PROJECT_DIR ?? process.cwd();
const run = spawnSync('npx', ['vitest', 'run', '--reporter=dot'], {
  cwd: projectDir,
  encoding: 'utf8',
  shell: process.platform === 'win32',
  env: { ...process.env, FORCE_COLOR: '0', NO_COLOR: '1' },
});

const output = `${run.stdout ?? ''}${run.stderr ?? ''}`.trim();
const tail = output.split('\n').slice(-40).join('\n');

if (run.status === 0) {
  // Green: give Claude a short confirmation as extra context.
  console.log(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'PostToolUse',
        additionalContext: `Tests ran automatically after the edit: GREEN.\n${tail
          .split('\n')
          .slice(-6)
          .join('\n')}`,
      },
    }),
  );
  process.exit(0);
}

// Red: exit code 2 sends stderr back to Claude so it sees the failure.
console.error(`Tests ran automatically after the edit: RED.\n${tail}`);
process.exit(2);
