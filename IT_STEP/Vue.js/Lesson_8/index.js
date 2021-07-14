// console.log("First Work");
// function reverse(arr) {
//   let reverseArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverseArr.push(arr[i]);
//   }
//   return reverseArr;
// }
// console.log(reverse([3, 2, 1]));

// console.log("Second work");

// const { log } = require('console');
///////////
// function generateRGBSting() {
//   function generateNumsInRange(range) {
//     return Math.round(Math.random() * range);
//   }
//   const red = generateNumsInRange(255);
//   const green = generateNumsInRange(255);
//   const blue = generateNumsInRange(255);

//   return `rgb(${red}, ${green},${blue})`;
// }
// const rgbString = generateRGBSting();
// console.log(rgbString);

//// Short form
// function generateRGBSting() {

//     const generateNumsInRange = range => Math.round(Math.random() * range);
//     return `rgb(${generateNumsInRange(255)}, ${generateNumsInRange(255)},${generateNumsInRange(255)})`;
//   }
//   const rgbString = generateRGBSting();
//   console.log(rgbString);

const { log } = require("console");
const fs = require("fs");

fs.readFile('text.txt', 'UTF8', (err, data) => {
  if (err) throw err
    // console.log(data.split(' '));
    // console.log(data.split(/[^\n\r]/gi, ''));

    // console.log(data.split(/[\s\.\,\?\!\:\;\'\"\-]/gi, '').filter((elem) => {
    //     if(elem !== '') return elem
    // }))
    const words = data.split(/[\s\.\,\?\!\:\;\'\"\-]+/)
    console.log(words.map((word) => word.length));
});

function countWordsAndAcoungLengthOfWord(file) {
    fs.readFile(file, 'UTF8', (err, data) => {
        if (err) throw err
          const words = data.split(/[\s\.\,\?\!\:\;\'\"\-]+/)
          console.log(words.length);
          console.log(words.map((word) => word.length));
      });
}
countWordsAndAcoungLengthOfWord('text.txt')
