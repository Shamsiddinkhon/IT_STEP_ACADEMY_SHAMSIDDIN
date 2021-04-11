let name = document.getElementById("title");
let section = document.getElementById("section");
let btn = document.getElementById("btn");

btn.onclick = function (e) {
  e.preventDefault();
  let xhr = new XMLHttpRequest();

  let movie = [];

  let title = name.value;

  movie.unshift(title);

  console.log(movie);


  xhr.open("GET", `http://www.omdbapi.com/?apikey=585a4221&t=${movie[0]}`);
  xhr.onload = function () {
    let obj = JSON.parse(xhr.response);
    console.log(obj);
  };

  xhr.send();
};
