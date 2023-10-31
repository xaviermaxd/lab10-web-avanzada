//Rutas usuario
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//api/usuario
router.post('/crear-usuario', userController.crearUsuario);
router.post('/', userController.obtenerUsuario);

module.exports = router;