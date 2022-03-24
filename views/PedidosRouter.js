const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const isAdmin = require("../middlewares/isAdmin")

const PedidosController = require('../controllers/PedidosController');

//////////////////////// CREAR PEDIDO //////////////////////


//Creamos Un pedido nuevo
router.post('/', auth, PedidosController.nuevoPedido);
//http://localhost:3000/pedidos


//////////////////////// CREAR PEDIDO //////////////////////


////////////////////////ACTUALIZAR PELICULA //////////////////////

//Actualizar pedido DB propia
router.put('/:id', auth,  PedidosController.actualizarPedido)
//http://localhost:3000/peliculas

////////////////////////ACTUALIZAR PELICULA //////////////////////



//////////////////////// LEER PEDIDO //////////////////////

//Buscamos Pedidos Todos los pedidos en DB
router.get('/', auth, PedidosController.todosPedidos)
//http://localhost:3000/pedidos

//Busqueda Avanzada de pedido en DB
router.get('/avanzado', auth, PedidosController.infoPedidoAvanzado)
//http://localhost:3000/pedidos/avanzado

//Busqueda avanzada de Usuarios con alquiler
router.get('/avanzado/usuarios', auth, PedidosController.infoUsuarios)
//http://localhost:3000/pedidos/avanzado/usuarios

//Busqueda Avanzada de Usuarios por Nombre
router.get('/avanzado/usuarios/:nombre', auth, PedidosController.pedidoNombre)
//http://localhost:3000/pedidos/avanzado/usuarios/:nombre

//////////////////////// LEER PEDIDO //////////////////////


//////////////////////// BORRAR PEDIDO //////////////////////

//Borramos todos los pedidos en DB
router.delete('/', auth, PedidosController.borrarTodos)
//http://localhost:3000/pedidos


//Borrar pedidos de Ususarios por Nombre
router.delete('/avanzado/usuarios/:nombre', auth, PedidosController.borrarNombre)
//http://localhost:3000/pedidos/avanzado/usuarios/:nombre

//Borrar pedidos por ID en DB
router.delete('/id/:id', auth, PedidosController.borrarPorId)
//http://localhost:3000/pedidos/:id

//////////////////////// BORRAR PEDIDO //////////////////////

module.exports = router;