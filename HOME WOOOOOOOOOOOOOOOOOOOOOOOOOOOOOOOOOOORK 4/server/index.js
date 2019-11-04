var mongoClient=require("mongodb").MongoClient,
    url="mongodb://localhost/enrollment";
var express = require("express"),
    bodyParser=require("body-parser");
var database;
var app=express();
var urlencodedParser=bodyParser.urlencoded({extended:false});
app.use(express.static("../client"));
app.post("/enroll",urlencodedParser,
    function(request,response){
    var records=database.collection("records1");
    records.insert({
    firstName:request.body.firstName,
    lastName:request.body.lastName
},function(err,result){
    response.redirect("/records.html");
});

});
app.get("/records1",function(request,response){
    var records=database.collection("records1");
    records.find().toArray(function(err,documents){
      response.send(JSON.stringify(documents));
    });
});
mongoClient.connect(url,function(err,db){
    database=db;
    app.listen(590);
});
