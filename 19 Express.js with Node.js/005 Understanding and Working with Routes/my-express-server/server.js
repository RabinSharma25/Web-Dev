const express = require("express");
const app = express();

// for handling the request to the home route
app.get("/", function (req, res) {

    res.send("<h1> This is robin Sharma</h1>");
});

// for handling the request to the contact route 
app.get("/contact",function(req, res){
    res.send("<h1> This is the contact page</h1>");
});

// for handling the request to the about route 
app.get("/about",function(req, res){
    res.send("<h1>This is the about page</h1>");
});


app.listen(3000, function () {
    console.log("Server started on port 3000");
});
