import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Rating: Exceeds Expectations. Turns one clear instruction into a six-message mystery, then rates my detective work five stars.";

// Gate: 1-140 chars, one line, not only whitespace.
const text = entry.trim();
if (text.length < 1 || text.length > 140 || text.includes("\n")) {
  throw new Error(`gate failed: ${text.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text + "\n", "utf8");
console.log(`wrote ${text.length} chars`);
