const http = require("http");
const fs = require("fs");
const { log } = require("console");
const { brotliDecompressSync } = require("zlib");

const mainPage = fs.readFileSync("index.html", "utf8");
const signInPage = fs.readFileSync("signin.html", "utf8");



const requestHandler = (req, res) => {
  const { url , method } = req;
  if (url === '/') res.write(mainPage);
  if (url === '/signin' && method ==='GET') res.write(signInPage);
  if (url === '/signin' && method ==='POST') {
    let body = []
    req.on('data', (chunk) => {
      body.push(chunk)
      console.log(chunk);
    })
    req.on('end', () => {
      console.log(Buffer.concat(body).toString());
    })
  }

  // switch (url){
  //   case '/':
  //       res.write(mainPage)
  //       break;
  //   case '/signin':
  //       res.write(signInPage)
  //       break;
  // }
  res.end()
  }

// vtoroy variant ninja code
//   url = '/'? res.write(mainPage):url === 'signin'?res.write(signInPage):null

  // console.log(req.url);
  // console.log(req.method);
const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, "localhost", () => {
  console.log(`Server was started. Listening to port ${PORT}`);
});
