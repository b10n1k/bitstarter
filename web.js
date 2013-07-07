var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buffer = new Buffer(24);

app.get('/', function(request, response) {
  txt=buffer.toString(fs.readFileSync("index.html"));
  response.send(txt);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
