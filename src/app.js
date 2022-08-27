function displayTemperature(response) {
  temperatureElement = document.querySelector("#temperature");
  cityElement = document.querySelector("#city");
  descriptionElement = document.querySelector("#description");
  humidityElement = document.querySelector("#humidity");
  pressureElement = document.querySelector("#pressure");
  windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  pressureElement.innerHTML = response.data.main.pressure;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let city = "Kyiv";
let units = "metric";
let apiKey = "745dc5780612f3ff28ed6a9ef9d290f3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(displayTemperature);
