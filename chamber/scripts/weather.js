const currentWeather = document.getElementById("weather");
const forecastWeather = document.getElementById("forecast");

const lat = 19.72340197174609;
const lon = -155.08496823644919;
const api = "db85bbc5c4c0f3b9a1e37c90f9496608";

const current = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=db85bbc5c4c0f3b9a1e37c90f9496608&units=imperial`;
const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api}&units=imperial`;

async function getWeather() {
    try {
        const currentResponse = await fetch(current);
        const forecastResponse = await fetch(forecast);

        if (!currentResponse.ok) {
            const currentError = await currentResponse.text();
            throw new Error(`Current Weather Error: ${currentError}`);
        }
        if (!forecastResponse.ok) {
            const forecastError = await forecastResponse.text();
            throw new Error(`Forecast Error: ${forecastError}`);
        }

        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();

        console.log(currentData);
        // console.log(forecastData);

        displayResults(currentData, forecastData);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
getWeather();

function unixtime(x) {
    const date = new Date(x * 1000);
    let hours = date.getHours();
    if (hours > 12) hours -= 12;
    const minutes = "0" + date.getMinutes();
    return `${hours}:${minutes.substring(minutes.length - 2)}`;
}

function displayResults(currentData, forecastData) {
    const divCurrent = document.createElement('div');
    const divForecast = document.createElement('div');

    const weatherIcon = document.createElement("img");
    const imgsource = `https://openweathermap.org/img/w/${currentData.weather[0].icon}.png`;
    let imgDescription = currentData.weather[0].main;
    weatherIcon.setAttribute('src', imgsource);
    weatherIcon.setAttribute('alt', imgDescription);
    weatherIcon.setAttribute('width', 100);
    weatherIcon.setAttribute('height', 100)
    currentWeather.appendChild(weatherIcon);


    const currentTemp = document.createElement('p');
    currentTemp.innerHTML = `<b>${currentData.main.temp.toFixed(1)}&deg;F</b>`;
    divCurrent.appendChild(currentTemp);

    const description = document.createElement('p');
    description.innerHTML = `<b>Sky:</b> ${currentData.weather[0].description}`;
    divCurrent.appendChild(description);

    const highTemp = document.createElement('p');
    highTemp.innerHTML = `<b>High:</b> ${currentData.main.temp_max.toFixed(1)}&deg;F`;
    divCurrent.appendChild(highTemp);

    const lowTemp = document.createElement('p');
    lowTemp.innerHTML = `<b>Low:</b> ${currentData.main.temp_min.toFixed(1)}&deg;F`;
    divCurrent.appendChild(lowTemp);

    const humidity = document.createElement('p');
    humidity.innerHTML = `<b>Humidity:</b> ${currentData.main.humidity}%`;
    divCurrent.appendChild(humidity);

    const sunrise = document.createElement('p');
    sunrise.innerHTML = `<b>Sunrise:</b> ${unixtime(currentData.sys.sunrise)} AM`;
    divCurrent.appendChild(sunrise);

    const sunset = document.createElement('p');
    sunset.innerHTML = `<b>Sunset:</b> ${unixtime(currentData.sys.sunset)} PM`;
    divCurrent.appendChild(sunset);

    currentWeather.appendChild(divCurrent)

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();


    for (let i = 1; i <= 3; i++) {
        const j = forecastData.list.findIndex(day => day.dt_txt.includes("12:00:00")) + (i * 8);

        if (j < forecastData.list.length) {
            const forecastDay = forecastData.list[j];

            const forecastTemperature = document.createElement('p');
            forecastTemperature.innerHTML = `<b>${days[(today + i) % 7]}:</b> ${forecastDay.main.temp_max}&deg;F`;
            divForecast.appendChild(forecastTemperature);

            forecastWeather.appendChild(divForecast);
        }
    }
}
