// let answer = confirm("Choose yes or no")

// let promise = new Promise(
//     function () {
//         if (answer)
//             resolve();
//         else
//             reject();
//     }
// )

// promise.then(() => {
//     console.log("Its working");
// }).catch(() => {
//     console.log("Have a mistake");
// })

// ==========================  example OLD

// let answer = new Promise((resolve, reject) => {
//   let xhr = new XMLHttpRequest();

//   xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

//   xhr.onload = () => {
//     resolve(JSON.parse(xhr.response));
//   };

//   xhr.onerror = () => {
//     reject("Mistake on getting posts");
//   };

//   xhr.send();
// });

// answer
//   .then((result) => {
//     console.log(result);

//     let answer2 = new Promise((resolve, reject) => {
//       let xhr = new XMLHttpRequest();

//       xhr.open("GET", "https://jsonplaceholder.typicode.com/comments");

//       xhr.onload = () => {
//         resolve(JSON.parse(xhr.response));
//       };

//       xhr.onerror = () => {
//         reject("Mistake on getting users");
//       };

//       xhr.send();
//     });
//     return answer2;
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ================================== ==  = = = = = = =  =
// fetch("https://jsonplaceholder.typicode.com/comments")
//     .then((data) => {
//         return data.json()
//     })
//     .then((jsonData) => {
//         console.log(jsonData);
//     })

let btn = document.querySelector("#btn");
let option = document.querySelectorAll("select");
let comment = document.querySelector("#comment");

let baseURL = "https://api.sampleapis.com/coffee/hot";
fetch(baseURL)
  // .then((resp) => {
  //   return resp.json();
  // })
  // .then((data) => {
  //   console.log(data);
  // });

btn.onclick = function (e) {
  e.preventDefault();
  for (let i = 0; i < option.length; i++) {
    console.log(option[i].value);
  }
};
