const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//require the api file 

const app = express();
var PORT = 3000;

//handling data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var reservations = [
    {
        name: "test",
        email: "test@test.com",
        phone: 4025555555,
        id: 113
    }
];

var waiting = 
    [
        {
            "name": "Test2",
            "email": "test2@test.com",
            "phone": 4026666666,
            "id": 311
        }
    
];

app.get("/", function(req, res){

    res.sendFile(path.join(__dirname, "index.html"));

});

app.get("/tables", function(req, res){

    res.sendFile(path.join(__dirname,"tables.html"));
});





//using express post method to display the data saved in the arrays reserved and waiting

app.post("/api/new", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation = req.body;
    
  
    console.log(newReservation);
  
    reservations.push(newReservation);
  
    res.json(newReservation);
  });

app.get("/api/list", function(req, res){

        
        console.log(reservations);
        return res.json(reservations);
});

app.get("/api/wait", function(req, res){
    
            
            console.log(waiting);
            return res.json(waiting);
    });



app.listen(PORT,function(){
    console.log("App listening on PORT " + PORT);
});