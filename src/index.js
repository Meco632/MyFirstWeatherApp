function showCurrentDateAndTime() {
  let now = new Date();
  let date = now.getDate();
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let year = now.getFullYear();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  let sentence = `${day} ${date} ${month} ${year}. Current Time ${hours}:${minutes}`;

  let currentTimeDate = document.querySelector("#currentTimeDate");
  currentTimeDate.innerHTML = sentence;
}

function displayCurrentCondition(response) {
  document.querySelector("#location").innerHTML = response.data.name;
  document.querySelector("#currentTemp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function search(city) {
  let apiKey = "e17801e95b80791ab63aefa29a2220f3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayCurrentCondition);
}

function submitCitySearch(event) {
  event.preventDefault();

  let city = document.querySelector("#city-input").value;
  search(city);
}

function convertToFarenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#currentTemp");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#currentTemp");
  temperatureElement.innerHTML = 19;
}

function searchLocation(position) {
  let apiKey = "e17801e95b80791ab63aefa29a2220f3";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(displayCurrentCondition);
}

function getCurrentLocStat(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

showCurrentDateAndTime();

let form = document.querySelector("#enterLocationForm");
form.addEventListener("click", submitCitySearch);

let farenheitLink = document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click", convertToFarenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

search("New York");

let currentLocationButton = document.querySelector("#currentLocationButton");
currentLocationButton.addEventListener("click", getCurrentLocStat);

//function retrievePosition(event) {
//event.preventDefault();
//let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
//let lat = position.coords.latitude;
//let lon = position.coords.longitude;
//let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
//axios.get(url).then(displayCurrent);
//}

//let currentLocationButton = document.querySelector("#currentLocationButton");
//navigator.geolocation.getCurrentPosition(retrievePosition);
//currentLocationButton.addEventListener("click", retrievePosition);

//  temperatureElement = number(temperatureElement);
//Math.round((temperature * 9) / 5 + 32);
//let searchInput = document.querySelector("#cityInput");
//let location = document.querySelector("#location");
//location.innerHTML = searchInput.value;

//let lat = position.coords.latitude;
//let lon = position.coords.longitude;
