// let num
// do{
//     num = prompt('Enter NUMERIC ')
// }while(!isNaN(num))
// console.log(num);

// function getNumInPow(a, b) {
//       let result = a;
//     for (let i = 0; i < b; i++) {
//       result = a ** b;
//     }
//     console.log(result);
//     return ;
//   }
//   getNumInPow(2,10)

function nums(num) {
  numsIterator: for (let i = 2; i <= num; i++) {
    checlDevisors: for (let j = 2; j < i; j++) {
      if (i % j === 0) continue numsIterator
    }
    console.log(i);
  }
}
nums(200)
