var apikey = "e87a97ca903d56450897392ad74ec9be";
var searchInput = document.querySelector("#search-input");
var searchButton = document.querySelector("#search-button");
var confirmLocationModal = document.querySelector("#confirm-location-modal");
var searchHistoryItems = document.querySelector("#search-history-items");
var currentWeatherCity = document.querySelector("#current-weather-city");
var currentWeatherData = document.querySelector("#current-weather");
var forecastElement = document.querySelector("#forecast");
var userSearch = document.querySelector("#userSearch")
var userHistory = document.querySelector("#userHistory")
var clearSearchButton = document.querySelector("#wipe-data")
function gotPosition(pos) {
  var lon = pos.coords.longitude;
  var lat = pos.coords.latitude;
  getWeather(lon, lat);
}
userSearch.addEventListener("click", buttonEvent);


function getWeather(lon, lat) {
  var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;
  getWeatherText(url);
}
async function getWeatherText(url) {
  var weatherObject = await fetch(url);
  var weatherText = await weatherObject.text();
  console.log(weatherObject);
  parseWeather(weatherText);
}
function parseWeather(weatherText) {
  var weatherJSON = JSON.parse(weatherText);
  console.log(weatherJSON);
  var dailyForecast = weatherJSON.daily;
  document.getElementById("currentTemp").textContent = weatherJSON.current.temp
  document.getElementById("currentHumidity").textContent = weatherJSON.current.humidity
  document.getElementById("currentwindSpeed").textContent = weatherJSON.current.windSpeed
  document.getElementById("currentUVIndex").textContent = weatherJSON.current.UVindex
  
}
function buttonEvent(){
var cityname = document.querySelector("#cityInput").value;
///////////////////////////////// This adds the city's serched to local Storage.///////////////////////////////////////
var temp = JSON.parse(localStorage.getItem("cities")) || [];
temp.push(cityname);
localStorage.setItem("cities", JSON.stringify(temp));
console.log(cityname)
fetch(
  `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=5&appid=${apikey}`
)
  .then(function (response) {
    // Check the console to see the status
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data[0]);
    console.log(data[0].lon);
    getWeather(data[0].lon, data[0].lat)
  });
}
function displayForecast(weatherStatus) {
  var weekDay = getWeekday(today);
  var description = day.weather[0].description;
  var icon = day.weather[0].icon;
  var sunrise = timestampToTime(day.sunrise);
  var sunset = timestampToTime(day.sunset);
  var highTemps = KToF(day, temp, max);
  var lowTemps = KToF(day, temp, min);
  var humidity = day.humidity;
  var windSpeed = day.wind_speed;
  var windGust = day.wind_gust;
  displayWeatherToday(
    weekDay,
    description,
    icon,
    sunrise,
    sunset,
    highTemps,
    lowTemps,
    humidity,
    windSpeed,
    windGust
  );
  console.log(weatherStatus);
}

function k2f(K) {
  return Math.floor((K - 273.15) *1.8 +32);
}

function renderSearchHistory() {
  clearSearchButton.innerHTML = "";
  var temp = JSON.parse(localStorage.getItem("cities")) || [];
  for (let i=0; i<temp.length; i++) {

      const historyItem = document.createElement("input");
      historyItem.setAttribute("type","button");
      historyItem.setAttribute("readonly",true);
      historyItem.setAttribute("class", "form-control d-block bg-white");
      historyItem.setAttribute("value", userHistory[i]);
      historyItem.addEventListener("click",function() {
          getWeather(historyItem.value);
      })
      historyButton.append(historyItem);
  }
}

function currentDay(dayNum) {
  var weekday = Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thurday";
  weekday[5] = "Friday";
  weekday[6] = "Saterday";
  return weekday[dayNum];
}

function realTime(timeStamp) {
  var date = new Date(timeStamp * 1000);
  var hours = date.getHours();
  var minutes = "";
  if (date.getMinutes() < 10) {
    minutes = "0" + date.getMinutes();
  } else {
    minutes = date.getMinutes();
  }
  return hours + ":" + minutes;
}
