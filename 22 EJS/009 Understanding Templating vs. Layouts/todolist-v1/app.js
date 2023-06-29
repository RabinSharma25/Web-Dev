const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var items =["Buy Food","Cook Food","Eat Food"];
var workItems=[];
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
    
    res.render("lists",{listTitle: day, newListItem:items});

})

app.post("/",function(req,res){
   var item = req.body.newItem;
//    console.log(req.body.lists);
   if(req.body.list ==="Work"){
    workItems.push(item);
    res.redirect("/work");
   }

   else{
    items.push(item);
    res.redirect("/");
   }


})

app.get("/work",function(req,res){
    res.render("lists",{listTitle:"Work List",newListItem:workItems})
})

app.post("/work",function(req,res){
    var item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})


app.get("/about",function(req,res){
    res.render("about");
})