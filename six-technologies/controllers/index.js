'use strict';

var IndexModel = require('../models/index');
var LoginModel = require('../models/login');
var HomeModel = require('../models/home');


module.exports = function (router) {

    var model = new IndexModel();
    var Lmodel = new LoginModel();
    var Hmodel = new HomeModel();    

    /*router.get('/', function (req, res) {
        res.render('index', model);
    });*/
    
    router.get('/', function (req, res) {
        res.render('login', model);
    }); 
    
    router.post('/', function (req, res) {
        console.log(req.body.usuario);
        console.log(req.body.pass);
        
        //comprobacion de usuario y redireccion a pagina
        res.render('home', model);
    });
    
    
    router.get('/home', function (req, res) {
        res.render('home', model);
    });    
    
    /*res.locals.context = { locality: { language: 'es', country: 'ES' } };
    var model = { name: 'Antonio Banderas' };
    res.render('index',model);*/
    

};
