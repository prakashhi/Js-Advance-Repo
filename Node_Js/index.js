const http = require("http");
const fs = require("fs");

const PORT = 3000;

const user = {
  name: "Prakash",
  age: 23,
};

const server = http.createServer((req, res) => {
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
      const data = fs.readFileSync("data.txt");
      res.writeHead(200, { "content-type": "text/plain" });
      res.end(data);
      break;
  }
});

server.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
