let http = require("http");
let url = require("url");
let fs = require("fs");
let date = new Date();

let server = http.createServer(function (req, res) {
  fs.open("obj.json", "w", (err) => {
    if (err) console.log(err);
    else console.log("File created");

    let count = 0;
    function writeJSON(name, lastName, age) {


      fs.appendFile(
        "obj.json",
        `{
    "name": "${name}", 
    "lastName": "${lastName}",
    "age": "${age}",
    "date": "${date}",
    "count": ${count++}
},\n`,
        (err, date) => {
          count++;
          if (err) throw err;
          console.log("The Obj added");
        }
      );
      return count;
    }
    writeJSON("Shukurov", "Shamsiddinkhon", 24);
    writeJSON("Shukurov", "Shamsiddinkhon", 24);
  });
});
server.listen(3000);
