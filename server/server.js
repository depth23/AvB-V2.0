var express = require('express');
var app = express();
var port = 8765;

app.use(express.static('../public'));  

app.get('/', function(req, res) {
//    res.send('../public/index.html');
  res.send('GET request to the homepage');
});

var server = app.listen(process.env.PORT || port, function () {
    console.log('express server listening on port ' + port)
});