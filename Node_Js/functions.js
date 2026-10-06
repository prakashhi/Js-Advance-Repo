const fs = require("fs");
const { createGzip } = require("node:zlib");

async function gzipfile(file) {
  const ReadStream = fs.createReadStream(file);
  const writeStream = fs.createWriteStream(`${file}.gz`);
  return new Promise((resolve, reject) => {
    ReadStream.pipe(createGzip())
      .pipe(writeStream)
      .on(
        "finish",
        resolve({
          data: true,
        }), 
      )
      .on("error", reject);

      
    // ReadStream.on("data", (chunk) => {
    //   gzip(chunk, (err, result) => {
    //     if (err) {
    //       throw new err("Error in data", err);
    //     }
    //     writeStream.write(result);
    //   });
    // });

    // ReadStream.on("end", () => {
    //   writeStream.end();
    // });

    // writeStream.on("finish", () => {});

    // ReadStream.on("error", reject);
    // writeStream.on("error", reject);
  });
}

module.exports = { gzipfile };
