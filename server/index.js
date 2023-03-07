const http = require("http")

//const hostname = '127.0.0.1';
//const port = 5000;

const server = http.createServer((req, res) => {
  //res.statusCode = 200;
 // res.setHeader('Content-Type', 'text/plain');
  //res.end('Hello World');
  if(req.url == "/")
  {
    res.end("THis is my first node js Page");
  }
  else if(req.url === "/about")
  {
    res.end("THis is the node js about Page");
  }
  else
  {
    res.end("404: Page could not Found");
  }
});

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
server.listen(3000,() => {
  console.log(`Server running at 3000`);
});