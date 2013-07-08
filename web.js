var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buffer = new Buffer(24);

buffer = fs.readFileSync("index.html");
//buffer.toString("utf8");

app.get('/', function(request, response) {

//  buffer=fs.readFileSync("index.html");
  response.send(buffer.toString("utf8");
//});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
