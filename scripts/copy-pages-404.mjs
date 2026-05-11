import { copyFile } from "node:fs/promises";

await copyFile("dist-gh-pages/index.html", "dist-gh-pages/404.html");
