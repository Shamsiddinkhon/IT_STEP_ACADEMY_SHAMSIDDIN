// wending machine







// let n = 10;
// for (let i = 2; i <= n; i++) {

//   for (let j = 2; j < i; j++) {
//     if (i % j == 0){
//         continue;
//     }
//   }

//   console.log( i );
// }

// let n = prompt();

// for (let i = 2; i < n; i++) {

//     if (i % 2 == 0){
//           console.log( i + " isPrime");
//     }
// }

const isEven = (num) => num % 2 == 0;

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
};
const identifyDevisors = (num) => {
  let arrDevisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      arrDevisors.push(i);
    }
  }
  return arrDevisors;
};
console.log(identifyDevisors(24));


const showDevisors = devisors => console.log(devisors);

const ans = identifyDevisors(60)

showDevisors(ans)
