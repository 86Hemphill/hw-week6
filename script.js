
// // API Key
// b8f53b07d67511ae3702eb0275e02472

$( document ).ready(function() {

  
var searchBtn = $("#search-button");

$("#search-button").on("click", function() {
    // var APIKey = "b8f53b07d67511ae3702eb0275e02472";
    var searchTerm = $("#search-term")
        .val();
        // .trim();

    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=b8f53b07d67511ae3702eb0275e02472";  

    $.ajax({
        url: queryURL,
        method: "GET"
      })
        // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {
  
          // Log the queryURL
          console.log(queryURL);
  
          // Log the resulting object
          console.log(response);
  
        //   // Transfer content to HTML
        //   $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        //   $(".wind").text("Wind Speed: " + response.wind.speed);
        //   $(".humidity").text("Humidity: " + response.main.humidity);
          
        //   // Convert the temp to fahrenheit
        //   var tempF = (response.main.temp - 273.15) * 1.80 + 32;
  
        //   // add temp content to html
        //   $(".temp").text("Temperature (K) " + response.main.temp);
        //   $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
  
        //   // Log the data in the console as well
        //   console.log("Wind Speed: " + response.wind.speed);
        //   console.log("Humidity: " + response.main.humidity);
        //   console.log("Temperature (F): " + tempF);
        });
    })
});