// let mapStr = new Map();

// let text = `Lorem ipsum dolor sit,
//  amet consectetur adipisicing elit.
//  Id dolorem nihil consectetur dolor tempore exercitationem!
//  Consectetur veritatis, voluptatum tempora consequatur eveniet quod nihil?
//   Dolorem eius possimus amet illum voluptate quae.`;

// let array = text.split(/[.\,/ \n-]/).filter((el) => el.length != 0);

// for (let i = 0; i < array.words; i++) {
//     if (mapStr.get(array[i]))
//     mapStr
// }

// console.log(words);

// let mapStr = new Map();

// let array = str.split(/[ ,\.\n]/).filter((el) => el.length != 0);
// for (let i = 0; i < array.length; i++) {
//   if (mapStr.get(array[i])) mapStr.set(array[i], mapStr.get(array[i]) + 1);
//   else mapStr.set(array[i], 1);
// }
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let left = document.getElementById("btn__left");
let right = document.getElementById("btn__right");

// let xhr = new XMLHttpRequest();

// xhr.open("GET", `https://api.sampleapis.com/wines/reds`);
// console.log(JSON.parse(xhr.response));
// xhr.onload = function () {};

// xhr.send();


fetch('https://api.sampleapis.com/wines/reds')
  .then(resp => resp.json())
  .then(data => console.log(data));

left.onclick = function (e) {
  console.log(e);
}
