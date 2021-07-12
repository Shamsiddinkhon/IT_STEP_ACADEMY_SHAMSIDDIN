let http = require("http");
let url = require("url");
let fs = require("fs");
let date = new Date();

let server = http.createServer(function (req, res) {
  fs.open("obj.json", "w", (err) => {
    if (err) console.log(err);
    else console.log("File created");
    function writeJSON(name, lastName, age, count = 0) {
      let count = 0
   
      fs.appendFile(
        "obj.json",
        `{\n
"name": "${name}", 
"lastName": "${lastName}",
"age": "${age}",
"date": "${date}",
"count": ${count}\n
}` ,
        (err,date) => {
          if (err) throw err;
          console.log("The Obj added");
        }
      );
    }
    writeJSON("Shukurov", "Shamsiddinkhon", 24);
    writeJSON("Murodov", "Muxriddin", 23);
    writeJSON("Murodov", "Muxriddin", 23);
  });
});
server.listen(3000);





