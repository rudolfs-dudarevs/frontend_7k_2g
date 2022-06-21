const currentWeather = document.querySelector(".current-weather");
const forecastWeather = document.querySelector(".forecast-weather");
const weatherContainer = document.querySelector(".weather-container");
let cityName = document.querySelector(".city-name");

//Get value from input field and add active class
function getValue() {
  let city = document.getElementById("city").value;
  getWeatherData(city);
  weatherContainer.classList.add("active");
}

//fetch weather data
const getWeatherData = function (city) {
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=441ed6fc083847e8a7e173555221506&q=${city}&days=3&aqi=no&alerts=no`
  )
    .then((response) => response.json())
    .then((data) => {
      forecastWeather.innerHTML = "";
      currentWeather.innerHTML = "";
      renderWeather(data);
      loopedData(data);
    })
    .catch((error) => {
      weatherContainer.classList.remove("active");
      alert("Please enter a valid city");
    });
};

//Loop over fetched data
const loopedData = function (data) {
  let weatherData = data.forecast;
  const keys = Object.entries(weatherData).forEach(([key, value]) => {
    const weatherArr = value;
    return weatherArr;
  });
};

//Render weather data
const renderWeather = function (weatherArr) {
  for (let i = 0; i < weatherArr.forecast.forecastday.length; i++) {
    const dateStr = weatherArr.forecast.forecastday[i].date;
    function getDayName(date = new Date(), locale = "en-US") {
      return date.toLocaleDateString(locale, { weekday: "long" });
    }
    forecastWeather.innerHTML += `

      <span class="weather-span">
     <h2>${getDayName(new Date(dateStr))}</h2>
      <p>Highest temperature: ${
        weatherArr.forecast.forecastday[i].day.maxtemp_c
      } °C</p>
     <p>Lowest temperature: ${
       weatherArr.forecast.forecastday[i].day.mintemp_c
     } °C</p>
     <p>Average ${weatherArr.forecast.forecastday[i].day.avgtemp_c} °C</p>
      <img src="${
        weatherArr.forecast.forecastday[i].day.condition.icon
      }" alt="${weatherArr.forecast.forecastday[i].day.condition.text}">
      </span>   
    `;
  }

  currentWeather.innerHTML = `

<span class="overall-weather">
  <p id="current-weather-header">
    ${weatherArr.location.name}, ${weatherArr.location.country}
  </p>
  <p id="current-last-updated">
    <i class="bi bi-arrow-clockwise"></i>${weatherArr.current.last_updated}
  </p>
  <p class="current-humidity">
    <i class="bi bi-umbrella"></i>${weatherArr.current.precip_mm}mm
  </p>
  <p class="current-wind-speed">
    <i class="bi bi-wind"></i> ${weatherArr.current.wind_kph}km/h
  </p>
  <p class="current-wind-gusts">
    <i class="bi bi-tornado"></i>${weatherArr.current.gust_kph}km/h
  </p>
  <p class="current-uv-index">
    <i class="bi bi-brightness-high"></i>${weatherArr.current.uv}
  </p>
</span>
<span class="current-degrees">
  <p class="current-temperature">
    <i class="bi bi-thermometer"></i> ${weatherArr.current.temp_c} &#8451;
  </p>
  <p class="current-feels-like">
    Feels like: ${weatherArr.current.feelslike_c} °C
  </p>
  <img class="condition-image" src="${weatherArr.current.condition.icon}">
</span>
  `;
};
