var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var exphbs = require('express-handlebars');

//en proceso
var busquedas = require('./appfind.js');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    console.log("prueba 1 ");
	res.render('login', {layout:'main'});
});

//EN PROCESO ENVIO DE FORMULARIO Y RESPUESTA
app.post('/login', function(req, res) {
    console.log('User ' + req.body.usuario + ' Pass ' + req.body.pass);
    res.send('User ' + req.body.usuario + ' Pass ' + req.body.pass);
    //res.render('prueba', {layout:'main'});
    
    //espera de meter en bd usuarios
    /*var resultado=busquedas.buscarUsuario(req.body.usuario, req.body.pass);
    
    if(resultado){
        res.render('home', {usuario: req.body.usuario, pass: req.body.pass}, function(err, html){
            console.log("error: "+err+" html "+html);
        });
    }*/
    //sin comprobar
    
    res.render('prueba', {usuario: req.body.usuario, pass: req.body.pass}, function(err, html){
        console.log("error: "+err+" html "+html);
    });
    //res.render('prueba', {data: {usuario: req.body.usuario, pass: req.body.pass}});
    /*var usuario = req.body.usuario;
    var pass = req.body.pass;
    
    var valores = {usuario: usuario,pass: pass} 
     console.log(valores);
    res.render('prueba', valores);*/
});





var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});