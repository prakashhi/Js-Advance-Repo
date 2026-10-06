const http = require("node:http");
const { createGzip } = require("node:zlib");
const { createReadStream } = require("node:fs");
const { basename } = require("node:path");

const PORT = 3001;

const filename = "D:/Study/Code/Practice/Load-files/data.txt";
 const serverHost = process.argv[2]

const httpHeaderOptions = {
  hostname: serverHost,
  port: PORT,
  path: "/",
  method: "POST",
  headers: {
    "Content-Type": "application/octet-stream",
    "content-encoding": "gzip",
    "x-filename": basename(filename),
  },
};

const req = http.request(httpHeaderOptions, (res) => {
  console.log(`Server response: ${res.statusCode}`);
});
createReadStream(filename)
  .pipe(createGzip())
  .pipe(req)
  .on("finish", () => {
    console.log("Completed");
  })
  .on("error", (err) => {
    console.log(err);
  });
