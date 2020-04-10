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

            console.log(response.wind.speed);
    
            //   // Transfer content to HTML
            //   $(".city").html("<h1>" + response.name + " Weather Details</h1>");
            //   $(".wind").text("Wind Speed: " + response.wind.speed);
            //   $(".humidity").text("Humidity: " + response.main.humidity);
            
            //   // Convert the temp to fahrenheit
            //   var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    
            //   // add temp content to html
            //   $(".temp").text("Temperature (K) " + response.main.temp);
            //   $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
    
            
            //   console.log("Wind Speed: " + response.wind.speed);
            //   console.log("Humidity: " + response.main.humidity);
            //   console.log("Temperature (F): " + tempF);

            iconcode = response.weather[0].icon;
            temp = response.main.temp;
            humidity = response.main.humidity;
            wind = response.wind.speed;
            
            var queryURL2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=b8f53b07d67511ae3702eb0275e02472";

            $.ajax({
                url: queryURL2,
                method: "GET"
            })
                .then(function(response) {
        
                console.log(queryURL);
                console.log(response);
                uvIndex = response.current.uvi;
               
                runCity();
            });
            
        });
        
    });

    function runCity() {
        // Top Row
        $("#cityName").empty();
        $("#wicon").empty();
        $("#currDate").empty();
        $("#temp").empty();
        $("#humidity").empty();
        $("#wind").empty();
        $("#uvi").empty();
        $("#cityName").append($("#city").text());
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $('#wicon').attr('src', iconurl);
        $("#currDate").append(moment().format('LL'));
        // Stats
        $("#temp").append("Temp : " + ((temp - 273.15) * 1.80 + 32).toFixed(1) + " °F");
        $("#humidity").append("Humidity : " + humidity);
        $("#wind").append("Wind : " + ((wind) * 2.237).toFixed(0) + " mph");
        $("#uvi").append("UV : " + uvIndex);

    }
});