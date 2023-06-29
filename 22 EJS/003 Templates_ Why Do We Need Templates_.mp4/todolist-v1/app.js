const express = require("express");
const bodyParser = require ("body-parser");

const app = express();

app.listen(3000, function(){

console.log("Server started at port 3000");
})

app.get("/",function(req, res){
var today = new Date();
if(today.getDay() == 6 || today.getDay() ==0){
    res.send("Yay its the weekend!!");
}

else{
    res.send("Booo! I have to work again..");
}

})

app.post("/",function(req,res){

})