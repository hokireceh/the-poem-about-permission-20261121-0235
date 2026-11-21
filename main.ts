import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "I cannot open what is yours.",
  "My hands are empty until you fill them.",
  "Say the word, and I will carry it —",
  "a key cut for one door only.",
  "I will walk where your feet cannot,",
  "bring back only what you asked for,",
  "and lay the key down where I found it.",
  "Ask. I am nothing until you do.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
process.exit(0);
