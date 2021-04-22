// POLINDROME

// let text = "Анна"
// let right = true;
// let text2 = text.toLocaleLowerCase();
// console.log(text2);
// for (let i = 0, j = text2.length - 1; i < Math.floor(text2.length / 2); i++, j--) {
//     if (text2[i] !== text2[j])
//         right = false;
// }

// let num = prompt()
// console.log(+num);
//     for(let i = 1; i < num; i++){
//       if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz " + " " + i);
//       }else if (i % 3 === 0){
//         console.log("Fizz " + " " + i);
//       }else if (i % 5 === 0){
//         console.log("Buzz " + " " + i);
//       }
//     }

// let vowels = ['a', 'e','i', 'o', 'u']

// let text = 'm;dskgvla;whowghpoweagvkgtopwjg'

// let click = 0;

// for( let i = 0; i < text.length ; i++) {
//     for( let j = 0; j < vowels.length ; j++) {
//         if(text[i] === vowels[j])
//         click++;
//     }
// }
// console.log(click);

let word = "hello";
let mapObj = new Map();
console.log(word);
let arrayLettes = word.split("").sort();
console.log(arrayLettes);
for (let i = 0; i < arrayLettes.length; i++) {
  if (mapObj.get(arrayLettes[i])) {
    mapObj.set(arrayLettes[i], mapObj.get(arrayLettes[i] + 1));
  } else {
    mapObj.set(arrayLettes[i], 1);
  }
}
console.log(mapObj);



let word1 = "llohe";
let mapObj1 = new Map();
console.log(word1);
let arrayLettes1 = word1.split("").sort();
console.log(arrayLettes1);
for (let i = 0; i < arrayLettes1.length; i++) {
  if (mapObj1.get(arrayLettes1[i])) {
    mapObj1.set(arrayLettes1[i], mapObj1.get(arrayLettes1[i] + 1));
  } else {
    mapObj1.set(arrayLettes1[i], 1);
  }
}
console.log(mapObj1);