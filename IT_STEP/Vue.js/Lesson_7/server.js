const http = require("http");
const fs = require("fs");

const mainPage = fs.readFileSync("index.html", "utf8");
const signInPage = fs.readFileSync("signin.html", "utf8");


const requestHandler = (req, res) => {
  const { url } = req;
//   if (url === "/") res.write(mainPage);
//   if (url === "/signin") res.write(signInPage);
  switch (url){
    case '/':
        res.write(mainPage)
        break;
    case '/signin':
        res.write(signInPage)
        break;
  }
  }

// vtoroy variant ninja code
//   url = '/'? res.write(mainPage):url === 'signin'?res.write(signInPage):null
  res.end();

  // console.log(req.url);
  // console.log(req.method);
const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT, "localhost", () => {
  console.log(`Server was started. Listening to port ${PORT}`);
});
