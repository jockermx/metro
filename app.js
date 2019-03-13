var mongo = require("mongoose");
var myParser = require("body-parser");

var express = require('express');
var cors = require('cors')
var app = express();

app.use(express.static('dist'));
app.use(cors());

var db = mongo.connect("mongodb://splashpagexosmos:d9c3Vkh9iM14QXmoUF1Zz6CF0DwCwXgJ3Sw09d72QLlhz0mDUYcRZkQi0QCyotR3dtIPG97pZAfk0XQ3DqMaOA%3D%3D@splashpagexosmos.documents.azure.com:10255/metro?ssl=true", {useNewUrlParser: true}, function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('Conect');
    //console.log('Connected to ' + db, ' + ', response);
  }
});

app.use(myParser.json());

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

var UsersSchema = new mongo.Schema({
  name: String,
  lastName: String,
  email: String,
  cellPhoneNumber: String
});

var model =  mongo.model('user_connects', UsersSchema);


app.post("/addUserConnect", (req, res, next) => {
  console.log('###obj request: ' + req.body);
  
  var myData = new model(req.body);
  myData.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});