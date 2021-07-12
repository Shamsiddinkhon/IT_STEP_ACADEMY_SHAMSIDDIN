// ===== THEME FS-File System =====
const fs = require('fs')
// console.log(fs);
// fs.open('shams.txt', 'w' , (err) => {
//     if(err) console.log(err);
//     else console.log('File created');
// })

obj.json

// fs.appendFile('shams.txt', '\nI am 24 years old', (err) => {
//     if(err) throw err
//     console.log("Done!");
// })

// fs.readFile('shams.txt', 'UTF8', (err,data) => {
//     if(err) throw err
//     console.log(data);
// })

fs.readFile('file.txt', 'UTF8', (err,data) => {
    if(err) throw err
    let counter = 0
        for(let i = 0; i < data.length; i++){
            if(data[i] > 0 && data[i] <= 9) counter++
        }
    console.log(counter);
})


fs.readFile('file.txt', 'UTF8', (err,data) => {
    if(err) throw err
    let counter = 0
       
    data.split('').forEach((elem) => {
        if(!isNaN(Number(elem)))counter++
    })
    console.log(counter + "Second function");
})
