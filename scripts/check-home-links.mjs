import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const files = [
  "app/page.tsx",
  ...fs.readdirSync(path.join(root, "components/home"))
    .filter((file) => file.endsWith(".tsx") || file.endsWith(".ts"))
    .map((file) => `components/home/${file}`)
];

const source = files.map((file) => fs.readFileSync(path.join(root, file), "utf8")).join("\n");

const requiredIds = ["top", "products", "architecture", "solutions", "security", "implementation", "team", "cta"];
const requiredHrefs = ["/login?next=/aip", "/aiscm", "#cta", "#architecture", "#products"];

for (const id of requiredIds) {
  if (!source.includes(`id="${id}"`)) {
    throw new Error(`Missing section id: ${id}`);
  }
}

for (const href of requiredHrefs) {
  if (!source.includes(href)) {
    throw new Error(`Missing required href: ${href}`);
  }
}

if (source.includes('href="/aip"')) {
  throw new Error('Use "/login?next=/aip" for AIP entry, not "/aip".');
}

console.log("Homepage entry link check passed.");
