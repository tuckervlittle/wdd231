const currentWeather = document.getElementById("weather");

const lat = 19.72340197174609;
const lon = -155.08496823644919;
const api = "db85bbc5c4c0f3b9a1e37c90f9496608";

const current = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=imperial`;

async function getWeather() {
    try {
        const currentResponse = await fetch(current);

        if (!currentResponse.ok) {
            const currentError = await currentResponse.text();
            throw new Error(`Current Weather Error: ${currentError}`);
        }

        const currentData = await currentResponse.json();

        console.log(currentData);

        displayResults(currentData);
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

function displayResults(currentData) {
    const divCurrent = document.createElement('div');

    const title = document.createElement('h2');
    title.innerHTML = `Currently`;
    divCurrent.appendChild(title);

    const weatherIcon = document.createElement("img");
    const imgsource = `https://openweathermap.org/img/w/${currentData.weather[0].icon}.png`;
    let imgDescription = currentData.weather[0].main;
    weatherIcon.setAttribute('src', imgsource);
    weatherIcon.setAttribute('alt', imgDescription);
    weatherIcon.setAttribute('width', 100);
    weatherIcon.setAttribute('height', 100);
    divCurrent.appendChild(weatherIcon);

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

}
