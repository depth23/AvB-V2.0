var express = require('express');
var path = require('path');
var app = express();
var port = 8765;

app.use(express.static(path.join(__dirname, '../public')));  

//app.get('/', function(req, res) {
//    res.send('../public/index.html');
//});

var server = app.listen(process.env.PORT || port, function () {
    console.log('express server listening on port ' + port)
});