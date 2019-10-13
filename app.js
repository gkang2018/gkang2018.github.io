var express = require("express"); 
var app = express(); 
var engine = require("consolidate"); 

app.set('view engine', 'ejs'); 


app.get("/", function(req, res){
    res.render("home.ejs"); 
});



app.listen(3000, function(){
    console.log("Personal website is listening on Port 3000"); 
})