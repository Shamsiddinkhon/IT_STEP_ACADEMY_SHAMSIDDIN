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

const http = require('http')
const server = http.createServer((req, res)=>{
    // console.log(req.url, req.method, req.headers); Test

    res.write('<html>')
    res.write(`<head>
        <title>
        My First Html In NOde JS</title>
    </head>
    <body>
    <h1>Hello World!</h1>
    
    </body>`)

    res.write('</html>')
    res.end()
})
server.listen(3000)
