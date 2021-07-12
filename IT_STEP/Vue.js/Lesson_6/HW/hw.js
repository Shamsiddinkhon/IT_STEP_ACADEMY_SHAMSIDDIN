let http = require("http");
let url = require("url");
let fs = require("fs");

let server = http.createServer(function (req, res) {
  fs.open("obj.json", "w", (err) => {
    if (err) console.log(err);
    else console.log("File created");

    // let createJson = fs.writeFile(
    //   "obj.json",
    //   `{
    //     "name": "Shamsiddinkhon",
    //     "lastName": "Shukurov",
    //     "age": 24
    // }`,
    //   (err) => {
    //     if (err) throw err;
    //     console.log("Done!");
    //   }
    // );

    function writeJSON(name, lastName, age) {
        fs.writeFile(
          "obj.json",
          `"name": ${name}, "lastName": ${lastName}, "age": ${age}`
        ),
          (err) => {
            if (err) throw err;
            console.log("Done!");
          };
      };
      writeJSON('Shamsiddinkhon', 'Shukurov',24)


//         fs.writeFile('obj.json', `{
//             "name": "Shamsiddinkhon",
//             "lastName": "Shukurov",
//             "age": 24

// }`, (err) => {
//         if(err) throw err
//         console.log("Done!");
//     })
  });
});
server.listen(3000);
