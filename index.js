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
  if (event.key === "Enter" || event.keyCode === 13) {
    getResults(city.value);
  }
});

function setQuery() {
  getResults(city.value);
}

function getResults(query) {
  const result = weather.fetchWeather(query);
}


