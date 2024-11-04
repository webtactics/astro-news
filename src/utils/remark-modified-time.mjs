import { execSync } from "child_process";
import { statSync } from "fs";

export function remarkModifiedTime() {
  return function (_, file) {
    const filepath = file.history[0];
    const result = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`);

    if (result.toString().length > 0 || result.toString() === "") {
      const result = statSync(filepath);
      file.data.astro.frontmatter.lastModified = result.mtime.toISOString();
    } else {
      file.data.astro.frontmatter.lastModified = result.toString();
    }
  };
}