import process from "node:process";
import { server } from "../server.js";


// console.log('process',process)

// process.on('exit',(code)=>
// {
//      console.log("Exist",code)
// })

function shutdown(){
  server.close(() => {
    console.log("Server Closeing...");
    process.exit(0);
  });
}


process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error);
    process.exit(1);
});
