import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "v3.4.0: fixed a bug where the brain wakes the body at 3:58 a.m. to reopen a 2016 argument nobody else remembers.";

const moduleDir = dirname(fileURLToPath(import.meta.url));
const envDir = process.env.MAKEFUN_OUTPUT_DIR;
const outputDir = envDir ? resolve(moduleDir, envDir) : "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${ENTRY}\n`, "utf8");
