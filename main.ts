// CooCover — Pigeon Pitch, One Line.
//
// A city pigeon pitches investors on its startup: windshield insurance
// priced by pigeons. The twist is the business model itself — the insurer
// is the hazard. The pigeon knows exactly which cars get hit because it
// is the one hitting them. One line, one sentence, 138 characters.
//
// The program below does exactly one thing: it writes that pitch to the
// absolute path /output/entry.txt, creating /output first. No network,
// no secrets, no dependencies, nothing read from anywhere else.

import { mkdirSync, writeFileSync } from "node:fs";

// The elevator pitch, in the pigeon's own voice. Kept as a single
// constant so the line that gets graded is exactly the line reviewed here.
const PITCH =
  "I'm raising for CooCover, windshield insurance priced by pigeons: " +
  "we know exactly which cars get hit, because we're the ones hitting them.";

// The gate also rejects a file that is only whitespace, so guard that too:
// a pitch made of spaces would pass the length check and still score zero.
if (PITCH.trim().length === 0) {
  throw new Error("Pitch must not be only whitespace");
}

// The gate allows 1 to 200 characters of UTF-8 text. Check the length
// before writing so a typo can never silently produce an invalid entry.
if (PITCH.length < 1 || PITCH.length > 200) {
  throw new Error(`Pitch must be 1-200 characters, got ${PITCH.length}`);
}

// Write the pitch exactly as-is: no trailing newline, no extra
// formatting. The grader reads the file byte for byte, so the line
// on disk is the line above, nothing more.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`Wrote ${PITCH.length}-character pitch to /output/entry.txt`);
