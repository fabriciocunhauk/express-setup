//require express server

const express = require("express");
const app = express();

//callback response
app.get("/", function(req, res) {
  res.send("<h1>hello, World!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: fabricocunhadeveloper@gmail.com");
});

app.get("/about", function(req, res){
  res.send("about me: I love coding");
});

//calback listen port 3000
app.listen(3000, function(){
  console.log("server started on port 3000");
});
