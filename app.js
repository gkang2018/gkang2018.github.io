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

 /* -----Projects Routes ------ */ 
app.get("/fakenews/", function(req,res){
    res.render("fakenews.ejs")
});

app.get("/agriworks/", function(req,res){
    res.render("agriworks.ejs")
});

app.get("/yelpcamp/", function(req,res){
    res.render("yelpcamp.ejs")
});
app.get("/silentparty/", function(req,res){
    res.render("silentparty.ejs")
});
app.get("/muchtodo/", function(req,res){
    res.render("muchtodo.ejs")
});
app.get("/quickstop/", function(req,res){
    res.render("quickstop.ejs")
});

app.listen(3000, function(){
    console.log("Personal website is listening on Port 3000"); 
})