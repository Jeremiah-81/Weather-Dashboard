# Weather-Dashboard

This is a dashboard designed to show the weather ahead in the event of a trip or prepairing for a specific condition.

## Motivation

I created this to keep up with my family's weather condition due to the wide range of locations they live in.

## Screenshots

https://raw.githubusercontent.com/Jeremiah-81/Weather-Dashboard/main/assets/06-server-side-apis-homework-demo.png

## Tech/Framework

Bootstrap

## How to Use

Very simple to use, just enter the location you wish in the search bar to generate the results.

## Features

This will tell you the weather for the next seven days of any desired location.

### Credits

https://www.w3schools.com/js/js_functions.asp
https://www.w3schools.com/howto/howto_css_searchbar.asp


body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background: #0b7dda;}
  
  .card {
    background: #eaeaea;
    padding: 2em;
    border-radius: 30px;
    width: 100%;
    max-width: 400px;
    margin: 1em;}

 


 <!-- <h1>Weather Dashboard</h1> -->
   <div class="card">
     <div class="search">
      
       <!-- the word search should appear in the box to look for a city -->
       <input type="text" class="search-bar" placeholder="Search">
       <button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em" 
        width="1.5em" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
        </path></svg></button>
     </div>
     <div class="weather">
       <h1 class="city">Weather in Nome</h1>       
       <!-- <h3>contents inside box</h3> -->
       <img src="" alt="" class="icon"/>
       <h3 class="temp">28°C</h3>
       <div class="description">cloudy</div>
       <div class="humidity">humidity: 16%</div>
       <div class="wind">Wind speed 1.3 km/h</div>
     </div>
   </div>
  
    

        <script src="./assets/script.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" ></script>
  
</body>
</html>  