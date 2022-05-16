# Weather-Dashboard

This is a dashboard designed to show the weather ahead in the event of a trip or prepairing for a specific condition.

## Motivation

I created this to keep up with my family's weather condition due to the wide range of locations they live in.

## Screenshots

C:\Users\terra\code\homework\weather-dashboard\assets\06-server-side-apis-homework-demo.png

## Tech/Framework

Bootstrap

## How to Use

Very simple to use, just enter the location you wish in the search bar to generate the results.

## Features

This will tell you a weeks worth of weather in advanced on any desired location.

### Credits
https://www.w3schools.com/js/js_functions.asp
https://www.w3schools.com/howto/howto_css_searchbar.asp

<!------------------------ test theroys and comments below ----------------------->


var apikey = "e87a97ca903d56450897392ad74ec9be"; geo local



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


// function kToF(kelvinTemp) {
//   var celsius = kelvinTemp - 273;
//   var fahrenheit = Math.floor(celsius * (9 / 5) + 32);
//   return fahrenheit;
// }


function parseWeather(weatherText) {
  var weatherJSON = JSON.parse(weatherText);
  // console.log(weatherJSON);
  var dailyForecast = weatherJSON.daily;
  for (i = 0; i < dailyForecast.length; i++) {
    var day = dailyForecast[i];
    var today = new Date().getDay() + i;
    if (today > 6) {
      today = today - 7;
    }
  }
}

//  function showWeather () {
//  var weather = https://openweathermap.org/api/one-call-api#data
//  console.log(weekDay, description, icon, sunrise, sunset, highTemps, lowTemps, humidity, windSpeed, windGust)
//  Math.round(windSpeed)
//  Math.round(windGust) 
//  document.getElementById("").innerHTML += weather
//   return;
// }
// showWeather()
  



var weekDay = getWeekday(today);
var description = day.weather[0].description;
var icon = day.weather[0].icon;
var sunrise = timestampToTime(day.sunrise);
var sunset = timestampToTime(day.sunset);
var highTemps = KToF(day, temp, max,);
var lowTemps = KToF(day, temp, min,);
var humidity = day.humidity;
var windSpeed = day.wind_speed;
var windGust = day.wind_gust;
displayWeatherToday(weekDay, description, icon, sunrise, sunset, highTemps, lowTemps, humidity, windSpeed, windGust,);

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