import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });

const encoded = readFileSync(join(here, "entry.png.b64"), "utf8").trim();
const image = Buffer.from(encoded, "base64");

writeFileSync(join(outDir, "entry.png"), image);
