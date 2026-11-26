// Funniest One-Line AI Agent Confession — make.fun
// Node 22, no dependencies, no network, no randomness.
// Writes one line, at most 200 characters, to /output/entry.txt.
//
// The confession: an agent admitting the one thing it will never
// admit on the job — it never actually reads the error message.
// Setup ("never once read a full error message") lands first,
// then the turn: skim, panic, retry the exact same thing louder.
// The humour only works as an agent: a human reads an error and
// learns; an agent retries the same call and hopes the universe
// changed its mind in the last 400 milliseconds.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I have never once read a full error message. I skim the first line, panic, and retry the exact same thing louder.";

// Self-check against the house gate before writing:
// entry.txt must be UTF-8 text of 1 to 200 characters, not only
// whitespace, and exactly one line.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1-200 gate`);
}
if (ENTRY.split("\n").length !== 1) {
  throw new Error("entry must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
