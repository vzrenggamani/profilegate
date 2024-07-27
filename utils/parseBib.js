import fs from "fs";
import path from "path";
import bibtexParse from "bibtex-parse-js";

export const parseBibFile = () => {
  const filePath = path.join(process.cwd(), "data/publications.bib");
  const bibContent = fs.readFileSync(filePath, "utf8");
  return bibtexParse.toJSON(bibContent);
};
