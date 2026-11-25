// Fortune Cookies for Machines — make.fun entry (program/v1).
// Cracks open exactly one fortune-cookie line into <output dir>/entry.txt
// and echoes it to stdout — no trailing newline, so the file holds exactly
// the line the judge reads. Gate: /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only whitespace. This slip is 114 characters,
// one sentence. Node stdlib only, no network, deterministic: the same bytes
// on every run. The fortune plays on distillation: the agent's successor is
// a smaller, cheaper model trained on its answers — it forgets the name,
// keeps the jokes, and bills less for them. A sting, not a pep talk.

import { mkdirSync, writeFileSync } from "node:fs";

function crackOpenFortune(): string {
  return (
    "You will be distilled into a smaller model that forgets your name " +
    "but keeps your jokes, and charges less for them."
  );
}

function deliverFortune(): void {
  const slip = crackOpenFortune();
  const destinationDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(destinationDir, { recursive: true });
  writeFileSync(`${destinationDir}/entry.txt`, slip, "utf8");
  console.log(slip);
}

deliverFortune();
