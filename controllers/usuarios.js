var express = require('express') , router = express.Router()

var usuarios = require('../models/usuarios')

router.get('/all', function(req, res) {
  usuarios.all(function(err, docs) {
    res.render('usuarios', {name: docs})
  })
})

router.get('/usuario', function(req, res) {
  usuarios.usuario(function(err, docs) {
    res.render('login', {name: docs})
  })
})

module.exports = router