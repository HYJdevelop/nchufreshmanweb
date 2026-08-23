import { rm } from "node:fs/promises";
import { join } from "node:path";

const buildDirectories = [".next"];

for (const directory of buildDirectories) {
  const target = join(process.cwd(), directory);
  await rm(target, { recursive: true, force: true });
  console.log(`Cleaned ${directory}`);
}
