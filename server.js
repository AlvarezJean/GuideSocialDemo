// MEAN Stack RESTful API Tutorial - Contact List App

var express    = require('express');    // call express
var app        = express();         // define our app using express
var bodyParser = require('body-parser');  // get body-parser
// var bcrypt = require('bcryptjs');
var morgan     = require('morgan');     // used to see requests
var mongoose   = require('mongoose');
mongoose.Promise = global.Promise;
// var config = require('./config');
var path = require('path'); 
var less = require('less');

var port = process.env.PORT || 8080

 // use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

 // configure our app to handle CORS requests
 app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "/");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
  next();
});


app.use(morgan('dev')); 
// mongoose.connect(config.database);
app.use(express.static(__dirname + '/public'));

// API ROUTES ------------------------

// var apiRoutes = require('./app/routes/api')(app, express);
// app.use('/api', apiRoutes);




//Servir l'index
app.get('/', function(req, res) {

  res.sendFile(path.join(__dirname + '/public/index.html'));

});


app.listen(8080);
console.log("Server running on port 8080");