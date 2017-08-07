var express = require('express');
var cors = require('cors')
var app = express();

app.use(express.static('dist'));
app.use(cors());

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

app.get('/getPoints', function(req, res){
    var points = [
      {lat: 37.782551, long: -122.445368},
      {lat: 37.782745, long: -122.444586},
      {lat: 37.782842, long: -122.443688},
      {lat: 37.782842, long: -122.442688},
      {lat: 37.782842, long: -122.441688}
    ];
    res.send(points);
});

app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});