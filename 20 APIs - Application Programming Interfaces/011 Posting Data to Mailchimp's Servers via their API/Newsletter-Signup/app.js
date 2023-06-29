const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
// const { response } = require("express");
const app = express();
// const https = request();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function (req, res) {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }
    const jsonData = JSON.stringify(data);

    const url = "https://us21.api.mailchimp.com/3.0/lists/c5cc13f86a";
    const options = {
        method: "POST",
        auth:"rabin113:20663c18193452173ced329ba5680d58-us21"
    }
    const request = https.request(url, options, function (response) {
    
        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
})



app.listen(3000, function () {
    console.log("Server is running on port 3000");
})


// mailchimp api key
// 20663c18193452173ced329ba5680d58-us21


// audience id or list id
// c5cc13f86a