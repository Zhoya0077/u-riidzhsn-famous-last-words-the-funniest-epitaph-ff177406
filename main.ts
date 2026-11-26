import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "My doctor said I had years left. He meant the subscription.";

// Self-checking gate: the sealed scorer only accepts UTF-8 text of
// 1-150 characters, a single line, not only whitespace. Validate the
// exact bytes we are about to write and fail loudly instead of
// shipping an entry the gate would refuse.
function validateEntry(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 150) {
    throw new Error(`entry is ${chars.length} characters, must be 1-150`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (Buffer.byteLength(text, "utf8") !== text.length) {
    // Entry is plain ASCII; any multi-byte surprise would change the
    // byte count the leaderboard shows, so refuse it.
    throw new Error("entry must be plain ASCII");
  }
}

validateEntry(ENTRY);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
