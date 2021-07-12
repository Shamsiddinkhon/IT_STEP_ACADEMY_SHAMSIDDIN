// console.log('I am Shamsiddinkhon')
// for (let i = 0; i > -10; i++){}

// ============== Callbacks ==================

// It is not Callback
// const showMyName = (name) => console.log(name);

// const someFunction = () => {
//     showMyName('Shams')
// }
// Callback
// const showMyName = (name) => console.log(name);

// const someFunction = (callback) => {
//     callback('Shams')
// }
// someFunction(showMyName)

// EXample
// const showMyName = () => console.log("Shams");
// setTimeout(showMyName, 0)
// console.log("test");

// Practisice = 1

// let time = 1;
// let test = () => {
//     for( let i = 0; i < time; i++) {

//         if (time < 11) {
//             time++;
//         }
//         setTimeout(console.log(time), 1000)

//     }
// }
// test()

// Resheniye
// for (let i = 0; i <= 9; i++) {
//   setTimeout(() => {
//     console.log(i + 1);
//   }, i * 1000);
// }

// ============= Node JS =============

const http = require("http");
const server = http.createServer((req, res) => {
  res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creating server</title>
</head>
<body>
    <h1>Server is working</h1>
    
</body>
</html>
        `);

  res.end();
});
server.listen(8080);
