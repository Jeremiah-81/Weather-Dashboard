var apikey = "e87a97ca903d56450897392ad74ec9be";
var searchInput = document.querySelector("#search-input");
var searchButton = document.querySelector("#search-button");
var confirmLocationModal = document.querySelector("#confirm-location-modal");
var searchHistoryItems = document.querySelector("#search-history-items");
var currentWeatherCity = document.querySelector("#current-weather-city");
var currentWeatherData = document.querySelector("#current-weather");
var forecastElement = document.querySelector("#forecast");
var userSearch = document.querySelector("#userSearch")
function gotPosition(pos) {
  var lon = pos.coords.longitude;
  var lat = pos.coords.latitude;
  getWeather(lon, lat);
}
userSearch.addEventListener("click", buttonEvent);



///////////6/16/22////////////////Started adding some changes here to try out what would work for me.///6/16/22///////////////////
// function showWeather(){
//   var newName= document.getElementById("cityInput");
//   var cityName= document.getElementById("cityName");
//   cityName.innerHTML ="--"+newName.value+"--"
// }

// fetch("https://api.openweathermap.org/geo/1.0/direct?q=lat=${lat}&lon=${lon}&appid=e87a97ca903d56450897392ad74ec9be")
// fetch("https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=e87a97ca903d56450897392ad74ec9be")
// .then(responce => responce.json())
// .then(data =>{
//    for(i=0;i<5;i++){
//      document.getElementById("day" +(i+1)+ "Min").innerHTML ="Min:" +Number(data.list[i].main.temp_min -123.45).toFixed(1)+"°";
//     }
//     for(i=0;i<5;i++){
//       document.getElementById("day" +(i+1)+ "Max").innerHTML ="Max:" +Number(data.list[i].main.temp_max -123.45).toFixed(1)+"°";
//     }
//     for(i=0;i<5;i++){
//       document.getElementById("day" +(i+1)+ "Max").innerHTML ="Max:" +Number(data.list[i].main.temp_max -123.45).toFixed(1)+"°";
//     }
//     for(i=0;i<5;i++){
////////////////////This is where ihe weather icons go for what each day.//////////////////////////////////////////
//       document.getElementById("img" +(1+i)).scr =" http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
//     }
// })

// .catch(err => alert("There is an Error"))

// function currentDay(dayNum) {
//   var weekday = Array(7);
//   weekday[0] = "Sunday";
//   weekday[1] = "Monday";
//   weekday[2] = "Tuesday";
//   weekday[3] = "Wednesday";
//   weekday[4] = "Thurday";
//   weekday[5] = "Friday";
//   weekday[6] = "Saterday";
//   return weekday[dayNum];
// }

// function weatherStatus(status){
//   if(status +currentDay.getStatus() >+6){
//     return status +currentDay.getStatus()-7;
//   }
//   else{
//     return status +currentDay.getStatus();
//   }
// }

// for(i=0;i<5;i++){
// document.getElementById("day"+(i+1)).innerHTML = currentDay[weatherStatus(i)];
// }

///////////////////////////////////6/16/22/The end of my most recent changes.///6/16/22///////////////////////////////////////

function getWeather(lon, lat) {
  var url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apikey}`;
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
  for (i = 0; i < dailyForecast.length; i++) {
    var day = dailyForecast[i];
    if ((day = day)) {
      today = day;
    }
    var today = new Date().getDay() + i;
    if (today > 6) {
      today = today - 7;
    }
  }
}
function buttonEvent(){
var cityname = document.querySelector("#cityInput").value;
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

navigator.geolocation.getCurrentPosition(gotPosition);

// <!------------------------ test theroys and comments below ----------------------->

// function parseWeather(weatherInfo) {
//   console.log(getcurrentDay);

// function displayWeatherDay(weatherupdate) {
//
//   var windSpeed = Math.round(windSpeed);
//   donument.getElementById("dashboard").innerHTML += weather;
//   console.log(weatherupdate);
// }

// http://api.openweathermap.org/geo/1.0/one?q=${cityname}&limit=5&appid=${apikey}`)

// fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=5&appid=${apikey}`)
//   .then(function (response)

// https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=e87a97ca903d56450897392ad74ec9be

//e87a97ca903d56450897392ad74ec9be

// async function getWeatherText(apikey1) {
// var weatherCondition = await fetch(apikey1);

// var geocodingapi = "e87a97ca903d56450897392ad74ec9be"
// var weatherdataapi = "5fb649be0c2c63eec5daed5a49f52baf"

// navigator.geolocation.getCurrentPosition(gotPosition);
// for (var i = 0; i < localStorage.length; i++) {

// 	var state = localStorage.getItem(i);
// 	// console.log(localStorage.getItem("state"));
// 	var stateName = $(".list-group").addClass("list-group-item");

// 	stateName.append("<li>" + state + "</li>");

// 		var city = localStorage.getItem(i);
// 		// console.log(localStorage.getItem("City"));
// 		var cityName = $(".list-group").addClass("list-group-item");

// 		cityName.append("<li>" + city + "</li>");
// 	}
// 	// Key count for local storage
// 	var currentweather = 0;
// 	// Search button click event
// 	searchButton.click(function () {

//
// var apikey0 ="http://api.openweathermap.org/geo/1.0/direct?q=us&limit=5&appid=e87a97ca903d56450897392ad74ec9be";
// var apikey1 ="https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=5fb649be0c2c63eec5daed5a49f52baf";

// var apikey = "e87a97ca903d56450897392ad74ec9be"; geo local

// function kToF(kelvinTemp) {
//   var celsius = kelvinTemp - 273;
//   var fahrenheit = Math.floor(celsius * (9 / 5) + 32);
//   return fahrenheit;
// }

//  function showWeather () {
//  var weather = https://openweathermap.org/api/one-call-api#data
//  console.log(weekDay, description, icon, sunrise, sunset, highTemps, lowTemps, humidity, windSpeed, windGust)
//  Math.round(windSpeed)
//  Math.round(windGust)
//  document.getElementById("").innerHTML += weather
//   return;
// }
// showWeather()
