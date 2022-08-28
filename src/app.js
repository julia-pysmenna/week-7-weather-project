function formatDate(timestamp) {
  let date = new Date(timestamp);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes};`;
  }
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  temperatureElement = document.querySelector("#temperature");
  cityElement = document.querySelector("#city");
  descriptionElement = document.querySelector("#description");
  humidityElement = document.querySelector("#humidity");
  pressureElement = document.querySelector("#pressure");
  windElement = document.querySelector("#wind");
  dateElement = document.querySelector("#date");
  iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  pressureElement.innerHTML = response.data.main.pressure;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function search(city) {
  let units = "metric";
  let apiKey = "745dc5780612f3ff28ed6a9ef9d290f3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityImputElement = document.querySelector("#city-imput");
  search(cityImputElement.value);
}

search("Kyiv");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
