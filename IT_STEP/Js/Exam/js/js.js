const APP_KEY = "d3ff47350ba5c85f389a8072bda88feb";







const addZero = (number) => number.toString().length === 1 ? `0${number}` : number.toString();

const dayNames = {
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thur",
    5: "Fri",
    6: "Sat",
    7: "Sun"
}

const formatDateTime = (date, onlyTime = false) => {
    const dateString = (date ? new Date(date) : new Date()).toLocaleString('en-US');

    const [_date, _time] = dateString.split(', ');
    const [month, day, year] = _date.split('/');
    const [fullTime, pmAm] = _time.split(' ');
    const [hours, minutes, seconds] = fullTime.split(':');

    if (onlyTime) {
        return [addZero(hours), addZero(minutes)].join(":") + ` ${pmAm}`;
    }

    return [addZero(day), addZero(month), year].join(".");
};

function fetchCurrent(lat, log) {
    const params = [
        "units=metric",
        "exclude=minutely",
        `appid=${APP_KEY}`,
        `lat=${lat}`,
        `lon=${log}`,
    ];

    const url = `http://api.openweathermap.org/data/2.5/onecall?${params.join("&")}`;

    return fetch(url).then(response => response.json());
}





let api = "https://api.openweathermap.org/geo/1.0/reverse?lat=41.264648&lon=69.21627&limit=5&appid=d3ff47350ba5c85f389a8072bda88feb"

fetch(api)
    .then(el => el.json())
    .then(el => console.log(el))






let currentContent = "today";
const loadingContent = $('#loading-content');
const errorContent = $('#error-content');
const todayContent = $('#today-content');
const forecastContent = $('#forecast-content');
const weatherInput = $('#weather-input');



weatherInput.on("keypress", (event) => {

    if (event.keyCode === 13) {
        event.preventDefault();
        const [lat, log] = weatherInput.val().split(",");
        console.log(lat, log);
        if (lat && log) {
            // switchContent("loading");
            fetchCurrent(lat, log).then((response) => {

                console.log(response);
                setTodayData(response);
                setForecastData(response);
                switchContent("today");
                weatherInput.val(response.timezone.replace("/", ", "))
            }).catch((e) => switchContent("error"));
        } else {
            switchContent("error");
        }
    }
})


function switchContent(destination) {
    $(".today-button-inside .today").removeClass("active");
    $(".today-button-inside .today").removeClass("active");

    if (destination === "error") {
        currentContent = "error";
        errorContent.show();
        loadingContent.hide();
        todayContent.hide();
        forecastContent.hide();
    }

    // if (destination === "loading") {
    //     currentContent = "loading";
    //     errorContent.hide();
    //     loadingContent.show();
    //     todayContent.hide();
    //     forecastContent.hide();
    // }

    if (destination === "today") {
        currentContent = "today";
        errorContent.hide();
        loadingContent.hide();
        todayContent.show();
        forecastContent.hide();
        $(".today-button-inside .today").addClass("active");
    }

    if (destination === "forecast") {
        currentContent = "forecast";
        errorContent.hide();
        loadingContent.hide();
        todayContent.hide();
        forecastContent.show();
        $(".today-button-inside .five-day").addClass("active");
    }
}

function setTodayData(response) {
    // Summary
    $(".current-weather-date").text(formatDateTime(new Date(response.current.dt * 1000)));
    $(".current-feel").text(response.current.feels_like + " °C");
    $(".current-temp").text(response.current.temp + " °C");
    $("#first-line-img").attr("src", `http://openweathermap.org/img/wn/${response.current.weather[0].icon}.png`);
    $("#first-line-p").text(response.current.weather[0].description);
    $("#sunrise").text(`Sunrise: ${formatDateTime(new Date(response.current.sunrise * 1000), true)}`);
    $("#sunset").text(`Sunset: ${formatDateTime(new Date(response.current.sunset * 1000), true)}`);

    // Hourly
    const hours = response.hourly.filter((hour) => {
        return new Date(hour.dt * 1000).getDate() === new Date().getDate()
    });

    for (const hour of hours) {
        const parent = document.createElement("div");
        parent.classList.add("hourly-values");

        $(parent).append(`<div class="hour"><p>${formatDateTime(new Date(hour.dt * 1000), true)}</p></div>`);
        $(parent).append(`
        <div class="forecast">
            <img src="http://openweathermap.org/img/wn/${hour.weather[0].icon}.png" alt="">
            <p>${hour.weather[0].description}</p>
        </div>
        `)

        $(parent).append(`
        <div class="temp">
            <p>${hour.temp}°C</p>
        </div>
        `)

        $(parent).append(`
        <div class="realfeel">
            <p>${hour.feels_like}°C</p>
        </div>
        `)

        $(parent).append(`
        <div class="wind">
            <p>${hour.wind_speed}m/s</p>
        </div>
        `)

        $(".hourly-content").append(parent);
    }
}

function setForecastData(response) {
    const days = response.daily.slice(0, 5);
    const fiveDays = $(".five-days-content");

    fiveDays.empty();

    for (let i = 0; i < days.length; i++) {
        const day = days[i];
        const parent = document.createElement("div");
        parent.classList.add("day-one");
        parent.classList.add("marg");

        if (i === 0) {
            parent.classList.add("uprise");
        }

        $(parent).append(`
        <div class="day-one-name">
            <p class="tonight">${dayNames[new Date(day.dt * 1000).getDay()]}</p>
        </div>
        `)

        $(parent).append(`
        <div class="day-one-date">
            <p class="day-one-date-tonight">${formatDateTime(new Date(day.dt * 1000))}</p>
        </div>
        `)

        $(parent).append(`
        <div class="day-one-img img">
            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="">
        </div>
        `)

        $(parent).append(`
        <div class="day-one-temp">
            <p class="day-one-temp-tonight">${day.temp.day}°C</p>
        </div>
        `)

        $(parent).append(`
        <div class="day-one-desc">
            <p class="day-one-desc-tonight">${day.weather[0].description}</p>
        </div>
        `)

        $(parent).on("click", (event) => {
            for (const el of fiveDays.children()) {
                $(el).removeClass("active");
                $(el).removeClass("uprise");
            }

            parent.classList.add("active");
            parent.classList.add("uprise");

            setSelectedDay(day);
    
        })

        fiveDays.append(parent);
    }

    setSelectedDay(days[0]);
}




// function setNearblyPlaces(el) {

//     $(".np-city").text(el)

//     for (const city of places) {
//         const parent = document.createElement("div");
//         parent.classList.add("cities-values");

//         $(parent).append(`<div class="cities"></div>`);

//         $(parent).append(`
//         <div class="np-name">
//             <p class="np-city">${city.local_names}</p>
//         </div>
//         `)

//         $(parent).append(`
//         <div class="realfeel">
//             <p>${hour.feels_like}°C</p>
//         </div>
//         `)

//         $(parent).append(`
//         <div class="wind">
//             <p>${hour.wind_speed}m/s</p>
//         </div>
//         `)

//         $(".hourly-content").append(parent);
//     }
// }






function setSelectedDay(day) {
    $(".selected-hourly-content").empty();

    for (const time in day.feels_like) {
        const parent = document.createElement("div");
        parent.classList.add("hourly-values");

        $(parent).append(`<div class="hour"><p>${time}</p></div>`);
        $(parent).append(`
        <div class="forecast">
            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="">
            <p>${day.weather[0].description}</p>
        </div>
        `)

        $(parent).append(`
        <div class="temp">
            <p>${day.temp[time]}°C</p>
        </div>
        `)

        $(parent).append(`
        <div class="realfeel">
            <p>${day.feels_like[time]}°C</p>
        </div>
        `)

        $(parent).append(`
        <div class="wind">
            <p>${day.wind_speed}m/s</p>
        </div>
        `)

        $(".selected-hourly-content").append(parent);
    }
}

$(document).ready(function () {
    const initialLocation = {
        lat: 41.264648,
        log: 69.21627,
    }

    switchContent("loading");

    fetchCurrent(initialLocation.lat, initialLocation.log).then((response) => {
        setTodayData(response);
        setForecastData(response);
        switchContent("today");
        // weatherInput.val(response.timezone.replace("/", ", "))
        console.log(response);
    })
});



// INPUT
let input = document.querySelector('input');
const btn = document.querySelector('.submit')

btn.onclick = (e) => {
    
let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=c2f5e81ab9369f238ee586ed736262c2`

fetch(url)
    .then(el => el.json())
    .then(el => console.log(Math.floor(el.main.temp) - 273))


// input.onkeypress = (event) => {

//     if (event.keyCode === 13) {

//         let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=c2f5e81ab9369f238ee586ed736262c2`

//         fetch(url)
//             .then(el => el.json())
//             .then(el => console.log(el))

//       
//     }
// } 
}