let weather = {
  apiKey: "b762ee6a3270c8c061079750ae48d91d",
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data))
      .catch((err) => console.log(err));
  },
  displayWeather: function (data) {
    console.log(data);
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    updateScreen(name, icon, description, temp, humidity, speed);
    console.log(name, icon, description, temp, humidity, speed);
  },
};
setCity();

function setCity() {
  getResults("Pasto");
}

const search = document.querySelector(".search-btn");
const city = document.querySelector(".search-bar");
search.addEventListener("click", setQuery);
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    getResults(city.value);
  }
});

function setQuery() {
  getResults(city.value);
}

function getResults(query) {
  const result = weather.fetchWeather(query);
}

const updateScreen = (name, icon, description, temp, humidity, speed) => {
  const cityName = document.querySelector(".city");
  const weatherIcon = document.querySelector(".icon");
  const cityDesc = document.querySelector(".description");
  const tempValue = document.querySelector(".temp");
  const humidityValue = document.querySelector(".humidity");
  const windSpeed = document.querySelector(".wind");
  const weatherContainer = document.querySelector(".weather");
  

  weatherContainer.classList.remove("loading");
  
  document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
  cityDesc.innerText = `${description}`;
  weatherIcon.src = `http://openweathermap.org/img/wn/${icon}.png`;
  cityName.innerText = `Weather in ${name}`;
  tempValue.innerText = `${temp} °C`;
  humidityValue.innerText = `Humidity: ${humidity}%`;
  windSpeed.innerText = ` Wind speed: ${speed} km/h`;
};
