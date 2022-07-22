const express = require('express')
const router = express.Router()
// const auth = require('../middlewares/auth')
const isAdmin = require('../middlewares/isAdmin')

const PeliculasController = require('../controllers/PeliculasController')

// CRUD RESTful

/// ///////////////////// ENDPOINTS A DB //////////////////////

/// /////////////////////CREAR PELICULA //////////////////////
// clonar peliculas
router.get('/clonar', PeliculasController.clonarPeliculas)
// http://localhost:3000/peliculas/clonar

// Registro de una peli nueva
router.post('/', PeliculasController.registraPelicula)
// http://localhost:3000/peliculas

/// /////////////////////CREAR PELICULA //////////////////////

/// /////////////////////ACTUALIZAR PELICULA //////////////////////

// Actualizar Pelicula DB propia
router.put('/:id', isAdmin, PeliculasController.actualizarPelicula)
// http://localhost:3000/peliculas

// Actualizar Pelicula DB propia
router.post('/av', PeliculasController.avActualizaPelicula)
// http://localhost:3000/peliculas

/// ////////////Registro Dataset////////////
// Registro
router.post('/ia/:id', PeliculasController.traerPeliculasAI)
// http://localhost:3000/Usuarios/ia/:ia

/// ////////////Registro Dataset////////////
// Registro
router.post('/avias', PeliculasController.traerPeliculasAVAI)
// http://localhost:3000/Usuarios/ia/:ia

/// /////////////////////ACTUALIZAR PELICULA //////////////////////

/// /////////////////////LEER PELICULA //////////////////////

// Leer todas las peliculas
router.get('/', PeliculasController.traePeliculas)
// http://localhost:3000/peliculas

// Lee Usuario por id
router.get('/leer/id/:id', PeliculasController.traerPeliculaId)
// http://localhost:3000/Usuarios/leer/id/:id

// Búsqueda peliculas por Genero En propia BD
router.post('/genero', PeliculasController.peliculasGenero)
// http://localhost:3000/peliculas/genero

// Buscar Peliculas por Genero y Titulo en propia DB
router.get('/genero/titulo/:titulo', PeliculasController.peliculasTituloDB)
// http://localhost:3000/peliculas/genero_titulo

// Buscar Peliculas por Genero y Titulo en propia DB
router.get('/genero/titulo', PeliculasController.peliculasGeneroTitulo)
// http://localhost:3000/peliculas/genero_titulo

// Búsqueda de película de mayor de 18 años
router.get('/adultos', PeliculasController.peliculasAdultos)
// http://localhost:3000/peliculas/adultos

// Búsqueda de películas por título y adulto
router.get('/adultos/titulo', PeliculasController.peliculasAdultoTitulo)
// http://localhost:3000/peliculas/adultos/titulo

// Búsqueda de películas por popularidad
router.get('/favoritas', PeliculasController.peliculasFavoritas)
// http://localhost:3000/peliculas/favoritas

/// /////////////////////LEER PELICULA //////////////////////

/// /////////////////////BORRAR PELICULA //////////////////////

// Borrar Pelicula DB propia
router.delete('/', isAdmin, PeliculasController.borrarPelicula)
// http://localhost:3000/peliculas

// Borrar todas Pelicula DB propia
router.delete('/todas', isAdmin, PeliculasController.borrarPeliculas)
// http://localhost:3000/peliculas

/// /////////////////////BORRAR PELICULA //////////////////////

/// ///////////////////// ENDPOINTS A MOVIE DB //////////////////////

// Búsqueda de películas por título
router.get('/titulo', PeliculasController.peliculasTitulo)
// http://localhost:3000/peliculas/titulo

// Búsqueda de novedades
router.get('/novedades', PeliculasController.traeNovedades)
// http://localhost:3000/peliculas/novedades

// Traemos las peliculas con mejor nota -- /mejor_valoradas
router.get('/top', PeliculasController.peliculasValoradas)
// http://localhost:3000/peliculas/top

// Ultima pelicula subida a la base de datos MOVIE DATABASE -- /latest
router.get('/ultimas', PeliculasController.peliculasUltimas)
// http://localhost:3000/peliculas/ultimas

// Traemos las peliculas relacionadas con la pelicula ID
router.get('/:id/relacionadas', PeliculasController.peliculasRelacionadas)
// http://localhost:3000/peliculas/:id/relacionadas

// Busqueda de Reviews de peliculas por id
router.get('/:id/reviews', PeliculasController.peliculasIdReviews)
// http://localhost:3000/peliculas/:id/reviews

// Busqueda por ID
router.get('/:id', PeliculasController.peliculasPorId)
// http://localhost:3000/peliculas/:id

module.exports = router
