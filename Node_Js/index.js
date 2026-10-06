const http = require("http");
const { createCipheriv, randomBytes } = require("node:crypto");
const { promisify } = require("node:util");
const { gzip, createGzip } = require("node:zlib");
const { writeFile, readFile } = require("fs/promises");
const { gzipfile } = require("./functions");
const { basename } = require("node:path");
const { createReadStream } = require("node:fs");


const PORT = 3000;

async function ZipSlow(url) {
  const gzipPromise = promisify(gzip);

  const filename = url;

  if (!filename) {
    console.log("Not File");
    throw new Error("File is not Valid");
    return;
  }

  const data = await readFile(filename);

  const gzippedData = await gzipPromise(data);

  await writeFile(`${filename}.gz`, gzippedData);

  return {
    data: true,
  };
}

const server = http.createServer(async (req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify("Hello server"));
      break;

    case "/user":
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(user));
      break;

    case "/file":
      const datafile = require("../Load-files/data.txt");
      const data = fs.readFileSync(datafile);
      res.writeHead(200, { "content-type": "text/plain" });
      res.end(data);
      break;

    case "/file-read":
      const readStream = fs.createReadStream("../Load-files/data.txt");
      const WriteStream = fs.createWriteStream("../Load-files/Output.txt");

      readStream.on("data", (chunk) => {
        WriteStream.write(chunk.toString().trim());
      });
      readStream.on("close", () => {
        console.log("SuccessFully");
        res.writeHead(200);
        res.end("SuccessFully");
      });
      readStream.on("error", (err) => {
        res.writeHead(500);
        res.end("SuccessFully");
      });
      WriteStream.on("error", (err) => {
        console.log(err);
      });
      break;
    case "/zip-slow":
      try {
        const response = await ZipSlow(
          "D:/Study/Code/Practice/Load-files/data.txt",
        );
        if (response.data == true) {
          res.writeHead(200);
          res.end(
            JSON.stringify({
              message: "File successfully compressed",
            }),
          );
        }
      } catch (err) {
        if (err) {
          res.writeHead(500);
          res.end(
            JSON.stringify({
              message: "error File  compressed",
              err,
            }),
          );
        }
      }
      break;

    case "/zip-stream":
      console.log(req);
      try {
        const response = await gzipfile(
          "D:/Study/Code/Practice/Load-files/data.txt",
        );
        if (response.data == true) {
          res.writeHead(200);
          res.end(
            JSON.stringify({
              message: "File successfully compressed",
            }),
          );
        }
      } catch (err) {
        if (err) {
          res.writeHead(500);
          res.end(
            JSON.stringify({
              message: "error File  compressed",
              err,
            }),
          );
        }
      }
      break;

    case "/file-zip":
      {
        const key = randomBytes(32);
        const iv = randomBytes(12);

        const cipher = createCipheriv("aes-256-gcm", key, iv);
        // const filename = basename("D:/Study/Code/Practice/Load-files/data.txt")
        createReadStream("D:/Study/Code/Practice/Load-files/data.txt")
          .pipe(createGzip())
          .pipe(
            createWriteStream("D:/Study/Code/Practice/Load-files/data.txt.gz"),
          )
          .pipe(res)
          .on("finish", () => {
            console.log("Completed");
          })
          .on("error", (err) => {
            console.log(err);
          });
      }
      break;
  }
});

server.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
