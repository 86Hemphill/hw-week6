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
            .then(function(response) {
            
            console.log(queryURL);
            console.log(response);
            console.log(response.wind.speed);

            var lat = response.coord.lat;
            var lon = response.coord.lon;
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
                foreTempMax1 = response.daily[0].temp.max;
                foreTempMax2 = response.daily[1].temp.max;
                foreTempMax3 = response.daily[2].temp.max;
                foreTempMax4 = response.daily[3].temp.max;
                foreTempMax5 = response.daily[4].temp.max;
                foreTempMin1 = response.daily[0].temp.min;
                foreTempMin2 = response.daily[1].temp.min;
                foreTempMin3 = response.daily[2].temp.min;
                foreTempMin4 = response.daily[3].temp.min;
                foreTempMin5 = response.daily[4].temp.min;
                foreHumid1 = response.daily[0].humidity;
                foreHumid2 = response.daily[1].humidity;
                foreHumid3 = response.daily[2].humidity;
                foreHumid4 = response.daily[3].humidity;
                foreHumid5 = response.daily[4].humidity;
               
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
        $("#currDate").append(moment().format('dddd LL'));
        // Stats
        $("#temp").append("Temp : " + ((temp - 273.15) * 1.80 + 32).toFixed(1) + " °F");
        $("#humidity").append("Humidity : " + humidity + " %");
        $("#wind").append("Wind : " + ((wind) * 2.237).toFixed(0) + " mph");
        $("#uvi").append("UV : " + uvIndex);

        // forecast
        // day1
        $("#day1").empty();
        $("#day1").append(moment().add(1, 'days').format('dddd, l'));
        $("#day1").append("<br>");
        $("#day1").append("Temp : " + ((foreTempMax1 - 273.15) * 1.80 + 32).toFixed(1) + "°/" + ((foreTempMin1 - 273.15) * 1.80 + 32).toFixed(1) + "°");
        $("#day1").append("<br>");
        $("#day1").append("Humidity : " + foreHumid1 + " %");

        // day2
        $("#day2").empty();
        $("#day2").append(moment().add(2, 'days').format('dddd, l'));
        $("#day2").append("<br>");
        $("#day2").append("Temp : " + ((foreTempMax2 - 273.15) * 1.80 + 32).toFixed(1) + "°/" + ((foreTempMin2 - 273.15) * 1.80 + 32).toFixed(1) + "°");
        $("#day2").append("<br>");
        $("#day2").append("Humidity : " + foreHumid2 + " %");

        // day3
        $("#day3").empty();
        $("#day3").append(moment().add(3, 'days').format('dddd, l'));
        $("#day3").append("<br>");
        $("#day3").append("Temp : " + ((foreTempMax3 - 273.15) * 1.80 + 32).toFixed(1) + "°/" + ((foreTempMin3 - 273.15) * 1.80 + 32).toFixed(1) + "°");
        $("#day3").append("<br>");
        $("#day3").append("Humidity : " + foreHumid3 + " %");

        // day4
        $("#day4").empty();
        $("#day4").append(moment().add(4, 'days').format('dddd, l'));
        $("#day4").append("<br>");
        $("#day4").append("Temp : " + ((foreTempMax4 - 273.15) * 1.80 + 32).toFixed(1) + "°/" + ((foreTempMin4 - 273.15) * 1.80 + 32).toFixed(1) + "°");
        $("#day4").append("<br>");
        $("#day4").append("Humidity : " + foreHumid4 + " %");

        // day5
        $("#day5").empty();
        $("#day5").append(moment().add(5, 'days').format('dddd, l'));
        $("#day5").append("<br>");
        $("#day5").append("Temp : " + ((foreTempMax5 - 273.15) * 1.80 + 32).toFixed(1) + "°/" + ((foreTempMin5 - 273.15) * 1.80 + 32).toFixed(1) + "°");
        $("#day5").append("<br>");
        $("#day5").append("Humidity : " + foreHumid5 + " %");
    }
});