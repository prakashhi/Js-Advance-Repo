import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3001;



app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "Server is started",
  });
});




app.listen(port, () => {
  console.log(`Server is Running on ${port}`);
});
