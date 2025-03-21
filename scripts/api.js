const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon');
const captionDesc = document.querySelector('figcaption');

const lat = 49.73810390580298;
const lon = 6.632023408169315;
const api = "db85bbc5c4c0f3b9a1e37c90f9496608";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(await response.text());
        }
        const data = await response.json();
        displayResults(data);
        console.log(data);
        } catch (error) {
            console.log(error);
        }
  };
  
  apiFetch();

  function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const imgSource = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', imgSource);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
  }