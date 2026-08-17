// *****  Asynchronous JavaScript *****
// function block() {
//   const start = new Date();
//   console.log("start");

//   while (new Date() - start < 3000) {}

//   console.log("End");
// }

// block()

// ***** setTimeout *****

console.log("start");
setTimeout(() => {
  console.log("Middle");
}, 2000);

const start = new Date(); 
while (new Date() - start < 5000) {}
console.log("End");
