// import { readFile, writeFile } from "node:fs/promises";
// import { gzip } from "node:zlib";
// import { promisify } from "node:util";

// const gzipPromise = promisify(gzip);

// const filename = process.argv[2];

// if (!filename) {
//   console.log("Not File");
// }

// // Data read
// const data = await readFile(filename);

// const gzippedData = await gzipPromise(data);

// await writeFile(`${filename}.gz`, gzippedData);

// console.log("File successfully compressed");

