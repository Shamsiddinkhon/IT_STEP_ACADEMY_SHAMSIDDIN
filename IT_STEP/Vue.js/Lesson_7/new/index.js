const date = new Date();
const formattedDate = date.toLocaleString();
// console.log(date.toLocaleString('en-US'));

let fs = require("fs");

fs.appendFile(
  "date.txt",
  "Script started at; " + formattedDate + "\n",
  (err) => {
    if (err) throw err;
  }
);

fs.readFile("someobj.json", "utf8", (err, date) => {
  if (err) throw err;
  const obj = JSON.parse(date);
  obj.dateOfBirth = new Date().toLocaleString();
  fs.writeFile("someobj.json", JSON.stringify(obj), (err) => {
    if (err) throw err;
  });
  console.log(obj.dateOfBirth);
});





////// destructizasiya
//sposob stariy
let arr = ['Shams', 'Shukurov']
// let names = arr[0]
// let surnames = arr[1]
 let [name,surnames] = arr

 console.log(arr);