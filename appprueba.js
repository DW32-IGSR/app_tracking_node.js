var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var exphbs = require('express-handlebars');

//configuracion de la conexion
var db = require('./db');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//carga de controlador
app.use('/usuarios', require('./controllers/usuarios'));


app.get('/', function (req, res) {
  console.log("prueba 1 ");
	res.render('login', {layout:'main'});
});


// Connect to Mongo on start
db.connect('mongodb://localhost:27017/unTestDB', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.');
    process.exit(1);
  } else {
    var server=app.listen(process.env.PORT || 3000, function() {
      console.log('Listening in port %d', server.address().port);
    })
  }
})