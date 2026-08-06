// ⚠️ DELIBERATELY VULNERABLE — this file exists only to make CodeQL light up.
// Delete it after the demo.

import { execSync } from 'node:child_process';

// `process.argv` is untrusted input: whoever starts the process controls it.
// Interpolating it straight into a shell string means `node src/greet.js "x; rm -rf /"`
// runs BOTH commands — the shell splits on the `;`, not Node.
const name = process.argv[2] || 'world';

execSync(`echo Hello, ${name}`, { stdio: 'inherit' });
