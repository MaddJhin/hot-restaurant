const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//require the api file 

const app = express();
var PORT = 3000;

//handling data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var reservations = [];

var waiting = [];

app.get("/", function(req, res){

    res.sendFile(path.join(__dirname, "index.html"));

});

app.get("/tables", function(req, res){

    res.sendFile(path.join(__dirname,"tables.html"));
});





//using express post method to display the data saved in the arrays reserved and waiting

app.post("/api/list", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation = req.body;
    
  
    console.log(newReservation);
  
    reservations.push(newReservation);
  
    res.json(newReservation);
  });



app.listen(PORT,function(){
    console.log("App listening on PORT " + PORT);
});