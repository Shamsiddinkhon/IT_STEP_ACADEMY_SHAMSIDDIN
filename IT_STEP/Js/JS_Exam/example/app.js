var input = document.querySelector(".input_text");
var main = document.querySelector("#name");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var clouds = document.querySelector(".clouds");
var button = document.querySelector(".submit");

button.addEventListener("click", function (name) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    input.value +
    "&appid=81e4c013d025c8ecaaafcae614d545e0"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data["list"][0]["dt"]);
      let sunrise = new Date(data["list"][0]["dt"] * 1000);
      // console.log(sunrise);
      let date = new Date()
      main.innerHTML = `
       

    
        `
        console.log(data[0]);
    })

    .catch((err) => alert("Wrong city name!"));
});
