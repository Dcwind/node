// var http = require('http');
//
// var server = http.createServer(function (request, response){
//   console.log("got a request!");
//   response.write('Hiiiii'.toUpperCase());
//   response.end();
// });


// server.listen(3000);

var express = require('express');
var app = express();

var task = [
  {
    id: 1,
    name: 'first phase project',
  },
  {
    id: 2,
    name: 'Do Economics homework'
  }
];

var currentId = 2;

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.get('/tasks', function (req, res) {
  res.send({tasks : task});
});

app.listen(PORT, function(){
    console.log('Server listening on ' + PORT);
});
