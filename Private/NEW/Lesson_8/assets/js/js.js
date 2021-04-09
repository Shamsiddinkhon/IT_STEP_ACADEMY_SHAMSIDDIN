//Spread and Rest
// Spread eto kogda upokovat



// let args = Array.prototype.slice.call(arguments);
// let args = [].slice.call(arguments);

// // ES2015
// const args = Array.from(arguments);
// const args = [...arguments];



// let array = [1, 2, 3, 4, 5, 6, 7]

// let array2 = [10, 20, 30, 40, 50, 60, 70]

// let arr = [...array, 8, 9, ...array2]
// console.log(arr);

// ============== RECOMENDATIONS ====================
// event loop js
// Arxitektura prosessaro
// Razlichie mnogopotochnosti i Asinxronnost
// Rabota Evet loop
// ==============                ====================


const api = "http://api.weatherstack.com/current?access_key=9b44e231e429fe9e69acef959e5f98e3&query=Tashkent&current>observation_time&historical_date_start=2021-04-08&historical_date_start=2021-04-16"
let xhr = new XMLHttpRequest

xhr.open("GET", api)


xhr.onload = function () {
    console.log(JSON.parse(xhr.response))
    let date = JSON.parse(xhr.response)
    document.getElementsByClassName("country")[0].innerHTML = date.location.name + ", " + date.location.country
    document.getElementsByClassName("mist")[0].innerHTML = date.current.weather_descriptions
    let img = document.createElement("div")
    img.innerHTML = `<img src="${date.current.weather_icons}" alt="">`
    document.getElementsByClassName("img")[0].append(img)

    document.getElementsByClassName("temperature")[0].innerHTML = date.current.temperature + "°"

    document.getElementsByClassName("date")[0].innerHTML = date.location.localtime

    document.getElementsByClassName("wind")[0].innerHTML = "Wind: " + date.current.wind_speed + " kph"

    document.getElementsByClassName("precip")[0].innerHTML = "Precip: " + date.current.wind_degree + "°"

    document.getElementsByClassName("pressure")[0].innerHTML = "Pressure: " + date.current.pressure + " mb"

}

xhr.send()


