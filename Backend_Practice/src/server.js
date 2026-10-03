import express from "express";
import "dotenv/config";
import "./test_Functions/process.js";

const app = express();
const port = process.env.PORT || 3001;

app.enable("trust proxy");

app.get("/", (req, res) => {
  console.log(req.ip);
  console.log(req.protocol);
  console.log(req.secure);
  res.status(200).json({
    status: true,
    message: "Server is started",
  });
});

app.get("/user", (req, res) => {
  const userData = ["Prakash", "Kushal", "__Home"];
  res.status(200).json({
    status: false,
    data: userData,
  });
});

// app.get("/error", (err, req, res) => {
//   process.nextTick(() => {
//     throw new Error("Kaboom!");
//   });
// });

app.get("/crash", (req, res) => {
  throw new Error("💥 TEST CRASH");
});

export const server = app.listen(port, () => {
  console.log(`Server is Running on ${port} process id:${process.pid}`);
});
