const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    // console.log(req.body.num1);
    var val1 = req.body.num1;
    var val2 = req.body.num2;
    var result = val1 + val2;
    res.send("The result of the calculation is "+ (Number(val1) + Number(val2)));
});


app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
    var val1 = Number(req.body.height);
    var val2 = Number(req.body.weight);
    res.send("The result of the calculation is "+(val2/(val1*val1)));
})
//creating our server in port 3000
app.listen(3000,function(){
    console.log("Server started at port 3000");
})