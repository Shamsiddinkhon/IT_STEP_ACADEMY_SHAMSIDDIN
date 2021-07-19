//Function Decloration
// function test() {
//   console.log(this);
// }
// test();

//////////////// Function Expression
// const test = function() {
//     console.log(this);
// }
// test()

//////
// const arrowFunc = () => {
//     console.log(this);
// }
// arrowFunc()

//FD - vsegda popadayet v globalniy object
//FE - ne vsegda popadayet globalniy object tol ko esli obyavlenna cheraz var
//
//
//
//
//
//
//

// ================================================================ \\

// let counter = 0;

// function f1(e) {
//   this.textContent = counter;
//   counter++;
// }

// document.querySelector(".btn-1").addEventListener("click", f1);
// document.querySelector(".btn-2").addEventListener("click", () =>{
//   // document.querySelector(".btn-1").textContent = counter
//   f1.call(document.querySelector(".btn-1"));
// //   counter++;
// });

// document.querySelector(".btn-2").addEventListener("click", function () {
//     //   console.log(this);
//     this.textContent = counter;
//     //   e.target.textContent = counter
//     //   console.log(counter);
//     counter++;
//   });

// let counter = 0;

// function f1(e) {
//   counter++;
//   this.textContent = counter;
// }

// function f2(e) {
//   counter--;
//   this.textContent = counter;
// }

// document.querySelector(".btn-1").addEventListener("click", () => {
//   f1.call(document.querySelector(".one"));
// });
// document.querySelector(".btn-2").addEventListener("click", () => {
//   f2.call(document.querySelector(".one"));
// });

//===============================================================//
// let counter = 0;
// function increment(ctr) {
//   ctr++;
//   this.textContent = ctr;
//   return ctr;
// }
// function decrement(ctr) {
//   ctr--;
//   this.textContent = ctr;
//   return ctr;
// }
// increment(counter);
// let div = document.querySelector(".one");
// // let inc = increment.bind(div)
// // let dec = decrement.bind(div)

// document.querySelector(".btn-1").addEventListener("click", () => {
//   counter = increment.call(div, counter);
// });
// document.querySelector(".btn-2").addEventListener("click", () => {
//   counter = decrement.call(div, counter);
// });

//===============================================================//

const ladder = {
  count: 0,
  inc() {
    this.count++
    return this
  },
  dec() {},
};as
console.log(ladder.inc().inc().inc().inc().inc().inc().inc().inc().inc().inc());

sadasd