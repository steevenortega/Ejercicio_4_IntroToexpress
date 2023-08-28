const express = require('express');
const router = express.Router();
//const ClientController = require('./../controllers/ClientController');
const { ClientController } = require('./../controllers');
//desestructuracion

//obtenemos todos los clientes
router.get('/', ClientController.getClients);
router.get('/suma',ClientController.getClient);
router.get('/usuario/:nombre',ClientController.getClient)
router.get('/swapi/:personaje',ClientController.getSwapi)


module.exports = router;