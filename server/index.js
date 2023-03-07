const http = require("http")
const fs = require("fs");

//const hostname = '127.0.0.1';
//const port = 5000;

const server = http.createServer((req, res) => {
  //res.statusCode = 200;
 // res.setHeader('Content-Type', 'text/plain');
  //res.end('Hello World');
  const jsondata = fs.readFileSync("api.json","utf-8");
  const objectdata = JSON.parse(jsondata); 
  if(req.url == "/")
  {
    res.end("THis is my first node js Page");
  }
  else if(req.url === "/about")
  {
    res.end(objectdata[0].name);
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