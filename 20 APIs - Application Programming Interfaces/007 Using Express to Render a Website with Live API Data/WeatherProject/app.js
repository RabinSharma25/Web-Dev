const express = require("express");
const https = require("https");
const app = express();
app.get("/", function (req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=55f1ea2eca79109de3cebb6f1d14b42a&units=metric";
    https.get(url, function (response) {
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const desc = weatherData.weather[0].description;
            const icon= weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<h1>The temperature in London is " + temp +" degrees celcius</h1>");
            res.write("<h2>The weather description is " +desc+"</h2>")
            res.write("<img src="+imageURL+">");
            res.send();

            // we can have only one res.send under a get method
            // console.log(weatherData);
        })
    })


})

app.listen(3000, function () {
    console.log("Server is running on port 3000.");
})