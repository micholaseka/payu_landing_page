/* Gabungkan hasil build (dist/) menjadi SATU file HTML mandiri:
   bisa dibuka langsung dengan double-click atau di-copy ke browser. */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
const outDir = resolve(root, "standalone");

let html = readFileSync(resolve(dist, "index.html"), "utf8");

// 1. inline CSS
const cssMatch = html.match(
  /<link rel="stylesheet" crossorigin href="\.\/(assets\/[^"]+\.css)">/
);
if (!cssMatch) throw new Error("link CSS hasil build tidak ditemukan");
html = html.replace(cssMatch[0], `<style>\n${readFileSync(resolve(dist, cssMatch[1]), "utf8")}\n</style>`);

// 2. inline JS sebagai script CLASSIC di AKHIR body
//    (di <head> script biasa langsung jalan sebelum #root ada → gagal render)
const jsMatch = html.match(
  /<script type="module" crossorigin src="\.\/(assets\/[^"]+\.js)"><\/script>/
);
if (!jsMatch) throw new Error("script JS hasil build tidak ditemukan");
const js = readFileSync(resolve(dist, jsMatch[1]), "utf8").replace(
  /<\/script>/gi,
  "<\\/script>"
);
html = html.replace(jsMatch[0], ""); // hapus dari <head>
html = html.replace(
  "</body>",
  `  <script>\n${js}\n  </script>\n  </body>`
);

mkdirSync(outDir, { recursive: true });
const out = resolve(outDir, "payu-landing.html");
writeFileSync(out, html);
console.log("OK ->", out, `(${(html.length / 1024).toFixed(0)} kB)`);
