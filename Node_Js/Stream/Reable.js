
const { Readable } = require("node:stream");

// process.stdin
//   .on("data", (chunk) => {
//     console.log("New data available");
//     console.log(`Chunk read (${chunk.length} bytes): "${chunk.toString()}"`);
//   })
//   .on("end", () => console.log("End of stream"));

// console.log("Test",process.stdin)

for await (const chunk of process.stdin) {
  console.log("New data available");
    console.log("chunk",chunk)
  console.log(`Chunk read (${chunk.length} bytes): ${chunk.toString()} `);
}
console.log("End of stream");



const data = Readable('/sfd')

