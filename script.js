
// // API Key
// b8f53b07d67511ae3702eb0275e02472

$( document ).ready(function() {

    $("#search-button").on("click", function() {

        var searchTerm = $("#search-term")
            .val()
            .trim();

        $("#cities").prepend("<button class='cityBtn' id='city'>").on("click", runCity);
        $("#city").text(searchTerm);

        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=b8f53b07d67511ae3702eb0275e02472";  

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // We store all of the retrieved data inside of an object called "response"
            .then(function(response) {
            
            var lat = response.coord.lat;
            var lon = response.coord.lon;
            // Log the queryURL
            console.log(queryURL);
    
            // Log the resulting object
            console.log(response);

            console.log(response.weather[0].icon);
    
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

            iconcode = response.weather[0].icon;
            temp = response.main.temp;
            
            var queryURL2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=b8f53b07d67511ae3702eb0275e02472";

            $.ajax({
                url: queryURL2,
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
            runCity();

        });
       
    });

    function runCity() {
        // Top Row
        $("#cityName").empty();
        $("#wicon").empty();
        $("#currDate").empty();
        $("#cityName").append($("#city").text());
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $('#wicon').attr('src', iconurl);
        $("#condIcon").append();
        $("#currDate").append(moment().format('LL'));
        // Stats
        $("#temp").append(((temp - 273.15) * 1.80 + 32).toFixed(1) + " °F");

    }
});