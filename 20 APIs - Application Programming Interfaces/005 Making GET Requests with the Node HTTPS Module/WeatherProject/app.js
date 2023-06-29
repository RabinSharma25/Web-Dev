const express = require("express");
const https = require("https");
const app = express();
app.get("/", function (req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=55f1ea2eca79109de3cebb6f1d14b42a&units=metric";
    https.get(url, function (response) {
        console.log(response.statusCode);
    })
    res.send("Server is up and running.");
})

app.listen(3000, function () {
    console.log("Server is running on port 30.");
})