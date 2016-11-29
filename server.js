// var http = require('http');
//
// var server = http.createServer(function (request, response){
//   console.log("got a request!");
//   response.write('Hiiiii'.toUpperCase());
//   response.end();
// });


// server.listen(3000);

const express = require('express');
const app = express();

const task = [
  {
    id: 1,
    name: 'first phase project',
  },
  {
    id: 2,
    name: 'Do Economics homework'
  }
];

const currentId = 2;

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.get('/tasks', (req, res) => {
  res.send({tasks : task});
});

app.listen(PORT, function(){
    console.log('Server listening on ' + PORT);
});
