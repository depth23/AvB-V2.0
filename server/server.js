var express = require('express');           //<<these are like injections to be able to    
var app = express();                        //use express or cors etc you have to first 
var cors = require('cors');                 //inject it just like $scope in a controller
var bodyParser = require('body-parser');    
var port = 8765;

var data = [{
    name: "Deon",
    age: 31,
    gender: 'male'
}]


app.use(cors());                    //<<this is  cors. it is doing all of the stuff in the above code for the restrictions = access-allow-origin etc. it is not secure. it is basically allowing any origin to make any request but it takes care of all that code
app.use(bodyParser());              //<<this is body parser. it is doing all of the JSON.stringify and changing the objects back into javascript.    

app.get('/users/', function (req, res) {    //<<this is telling the server what to do 
    res.send(data)                              //when someone makes a request to your 
})                                              //server

app.post('/users/', function (req, res) {   //<<this is telling th server what to do 
    data.push(req.body)                         //when someone makes a post request
    res.send(data)                              //to your server
})


app.listen(port, function () {                  //<<this is telling the server what port
    console.log('listening on port ' + port)        //to use and console logging that 
})                                                  //it is to make sure