const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
var items =["Buy Food","Cook Food","Eat Food"];
app.listen(3000, function () {

    console.log("Server started at port 3000");
})

app.get("/", function (req, res) {
    var today = new Date();
    var options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    var day = today.toLocaleDateString("en-US",options);
    
    res.render("lists",{kindOfDay: day, newListItem:items});

})

app.post("/",function(req,res){
   var item = req.body.newItem;
    // console.log(item);
    items.push(item);
    res.redirect("/");
    // res.render("lists",{newListItem: item});
    // res.send("Data captured");

})
