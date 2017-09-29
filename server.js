const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
var PORT = 3000;

//handling data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var reserved = [];

var waiting = [];

app.get("/", function(req, res){

    res.sendFile(path.join(__dirname, "index.html"));

});











app.listen(PORT,function(){
    console.log("App listening on PORT " + PORT);
});