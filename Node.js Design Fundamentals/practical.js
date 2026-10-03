// Blocking I/O
const fs = require("fs");
// console.log("start")

// const data = fs.readFileSync('./index.js','utf-8')

//  console.log("File readd",data)
//   console.log("end")

// no blocking I/O

// console.log("start");

// fs.readFile("./index.js", "utf-8", () => {
//   console.log("file 1is read");
// });
// fs.readFile("./index.js", "utf-8", () => {
//   console.log("file 2is read");
// });
// fs.readFile("./index.js", "utf-8", () => {
//   console.log("file 3is read");
// });
// console.log("End");

// function read(number)
// {
//   fs.readFile("./text.txt", "utf-8", (err, data) => {
//   console.log("file read");

//   if (err) {
//     console.log("error", err);
//     return;
//   }
//   console.log(`Data ${number}`, data);
// });
// }

// console.log("start");
// read(1)
// read(2)
// read(3)

// setTimeout(() => {
//   console.log("timer");
// }, 1000);
// console.log("file is completted \n *****");

// console.log("Start");

// setTimeout(() => {
//   console.log("Timer 1 - 3 seconds");
// }, 3000);

// setTimeout(() => {
//   console.log("Timer 2 - 1 second");
// }, 1000);

// setTimeout(() => {
//   console.log("Timer 3 - 2 seconds");
// }, 2000);

// console.log("End");

// console.log("A");

// setTimeout(() => {
//   console.log("B - Timer");
// }, 1);

// fs.readFile("file.txt", "utf8", () => {
//   console.log("C - File");
// });

// console.log("D");

// function add(a, b, callback) {
//   callback(a + b);
// }
// function callFun(value) {
//   setTimeout(() => {
//     console.log("result", value);
//   }, 0);
// }

// console.log("start");
// add(12, 12, callFun);
// console.log("end");

const arr = [1, 2, 3, 4, 5, 6, 7];

//  console.log("start")
// try {
//      console.log("start in")
//   fs.readFile('missing.txt', 'utf8', (err, data) => {
//     if (err) {
//       throw err;
//     }

//     console.log(data);
//   });
//    console.log("close in")
// } catch (err) {
//   console.log('Caught:', err.message);
// }

//  console.log("close")

// async function getData() {
//   throw new Error('Something failed');
// }

// try {
//   await getData();
// } catch (err) {
//   console.error('Caught:', err.message);
// }

// function loadModule(filename, module, require) {
//   var wrappedSrc =
//     '(function(module, exports, require) {' +
//     fs.readFileSync(filename, 'utf8') +
//     '})(module, module.exports, require);';

//   eval(wrappedSrc);
// }

// module.exports.run = function () {
//   console.log("runing is running");
// };
// module.exports = arr;

// console.log(exports === module.exports)
//  console.log(exports)
//  console.log(require)
//  console.log(require.cache);






