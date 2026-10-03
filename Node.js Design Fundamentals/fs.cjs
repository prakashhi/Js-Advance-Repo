// const fs = require("node:fs/promises");
// import fs from "fs/promises"

// async function fileRead(name) {
//   try {
//     const data = await fs.readFile(name, { encoding: "utf-8" });
//     const format = JSON.parse(data);
//     console.log(format);
//   } catch (err) {
//     console.log(err);
//   }
// }
// fileRead('file.txt')

// let obj = {
//   name: "Prakash",
//   age: 232,
// };

// async function WriteFile() {
//   const data = JSON.stringify(obj);
//   try {
//     const response = await fs.writeFile("new.json", data);
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// }
// WriteFile();
// fileRead("new.json");

// fs.writeFile("file.txt", "Hello this is my name is Prakash123", (data) => {
//   console.log("Successfully Downloaded", data);
// });

// fs.appendFile(
//   "file.txt",
//   "\nHello line is two",
//   { encoding: "utf-8" },
//   (err) => {},
// )

// const stream = fs.createReadStream("Obscure - The Aftermath (USA) (En,Fr,Es).zip");

// stream.on("data", (chunk) => {
//    console.log("Chunk:", chunk.length, "bytes");
// });

// stream.on("end", () => {
//   console.log("Finished reading file");
// });

// import { add } from "./math.mjs";
// import {  sub } from "./math.mjs";

const {add}= require('./math.cjs')
const {sub}= require('./math.cjs')

console.log(sub);

console.log(add(2, 2), sub(2, 3));
