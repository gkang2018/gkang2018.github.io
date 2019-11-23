var express = require("express"); 
var app = express(); 
var engine = require("consolidate"); 

app.set('view engine', 'ejs'); 
app.use('/public', express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render("home.ejs"); 
});


app.get("/about/", function(req,res){
    res.render("about.ejs")
});

app.get("/projects/", function(req,res){
    res.render("projects.ejs")
});



app.listen(3000, function(){
    console.log("Personal website is listening on Port 3000"); 
})