const axios = require('axios');
const PeliculasController = {};
const {
    Pelicula
} = require('../models/index');
const {
    Op
} = require('sequelize')
const brain = require('../brain-browser');


//Funciones del controlador
const key = '210d6a5dd3f16419ce349c9f1b200d6d'




//////////////////////// ENDPOINTS A Propia DB //////////////////////


//Random number between two limits function
const minMaxRoundedRandom = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

// https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=5}&with_watch_monetization_types=flatrate

//Film methods
PeliculasController.clonarPeliculas = async () => {
    let TMDBimgUrlRoot = "https://image.tmdb.org/t/p/original";
    let firstScan = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
    let numbOfPagesTMDB = firstScan.data.total_pages
    let numbOfFilmsTMDB = firstScan.data.total_results
    for (let j = 1; j <= 25; j++) {
        let results1 = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${minMaxRoundedRandom(1, 25)}&with_watch_monetization_types=flatrate`);
        let numbOfResultsPerPageTMDB = results1.data.results.length
        for (let i = 0; i < numbOfResultsPerPageTMDB; i++) {
            // let gen="";
            // for(res in results1.data.results[i].genre_ids){
            //     gen+=res+",";
            // }
            var res = results1.data.results[i].overview.substring(0, 2);
            Pelicula.create({
                titulo: results1.data.results[i].original_title,
                genero: results1.data.results[i].genre_ids[0],
                sinopsis: res,
                adult: results1.data.results[i].adult,
                popularity: results1.data.results[i].popularity,
                imagen: (TMDBimgUrlRoot + "/" + results1.data.results[i].poster_path),
                fecha: results1.data.results[i].popularity,
                idioma: results1.data.results[i].original_language
            })
        }
    }

    return (`${25} páginas se han clonado con una cantidad de ${500} peliculas`)
};



//Registro de Peliculas en la BD propia
PeliculasController.registraPelicula = (req, res) => {


    let titulo = req.body.titulo;
    let genero = req.body.genero;
    let sinopsis = req.body.sinopsis;
    let adult = req.body.adult;
    let popularity = req.body.popularity;
    let imagen = req.body.imagen;
    let video = req.body.video;
    let fecha = req.body.fecha;
    let idioma = req.body.idioma;
    // let visualizaciones = req.body.visualizaciones;

    Pelicula.findAll({
        where: {
            titulo: titulo
        }
    }).then(peliculaRepetida => {
        if (titulo !== "" && genero !== "" && sinopsis !== "" && adult !== "" && popularity !== "" && imagen !== "" && video !== "" && fecha !== "" && idioma !== "") {
            if (peliculaRepetida == 0) {

                Pelicula.create({
                        titulo: titulo,
                        genero: genero,
                        sinopsis: sinopsis,
                        adult: adult,
                        popularity: popularity,
                        imagen: imagen,
                        video: video,
                        fecha: fecha,
                        idioma: idioma
                    }

                ).then(pelicula => {
                    res.send(`${pelicula.titulo} ha sido registrada`)
                }).catch((error) => {
                    res.send(error);
                });
            } else {
                res.send("La pelicula ya esta registrada")
            }
        }else{
            res.send("No dejes ningun campo en blanco")
        }

    }).catch(error => {
        res.send(error)
    });



};




//ACTUALIZAR Pelicula DB propia
PeliculasController.actualizarPelicula = (req, res) => {

    let id = req.body.id
    //console.log("hola", id);
    let datos = req.body;
    try {

        Pelicula.update(datos, {
                where: {
                    id: id
                }
            })
            .then(peliculaDel => {
                res.send(`La pelicula ${id} ha sido actualizada`)
            })

    } catch (error) {
        res.send(error)
    }

}



//Leer todos las Peliculas de nuestra propia DB
PeliculasController.traePeliculas = (req, res) => {
    // console.log("99999999999");
    // console.log(req);

    Pelicula.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.send(error)
        })

};



//Busca peliculas por Genero En propia BD
PeliculasController.peliculasGenero = (req, res) => {

    //console.log("hhhhhhhhhhhh1234")
    //console.log(req)
    let genero = req.body.genero;

    //console.log("hhhhhhhhhhhh")
    //console.log(genero)

    Pelicula.findAll({
        where: {
            genero: genero
        }
    }).then(pelicula => {
        res.send(pelicula)
    }).catch(error => {
        res.send(error)
    })

}


//Buscar Peliculas por Genero y Titulo en propia DB
PeliculasController.peliculasTituloDB = (req, res) => {

    let titulo = req.params.titulo

    Pelicula.findAll({
        where: {

            [Op.and]: [{
                titulo: {
                    [Op.like]: titulo
                }
            }]

        }
    }).then(pelicula => {

        if (pelicula != 0) {
            res.send(pelicula);
        } else {
            res.send(`Película no encontrada`);
        };

    }).catch(error => {
        res.send(error);
    })
};


//Buscar Peliculas por Genero y Titulo en propia DB
PeliculasController.peliculasGeneroTitulo = (req, res) => {

    let titulo = req.body.titulo
    let genero = req.body.genero

    Pelicula.findAll({
        where: {

            [Op.and]: [{
                    titulo: {
                        [Op.like]: titulo
                    }
                },
                {
                    genero: {
                        [Op.like]: genero
                    }
                }
            ]

        }
    }).then(pelicula => {

        if (pelicula != 0) {
            res.send(pelicula);
        } else {
            res.send(`Película no encontrada`);
        };

    }).catch(error => {
        res.send(error);
    })
};

//Busca peliculas por Adult En propia BD
PeliculasController.peliculasAdultos = (req, res) => {

    Pelicula.findAll({
        where: {
            [Op.not]: [{
                adult: {
                    [Op.like]: 0
                }
            }]
        }
    }).then(pelicula => {
        res.send(pelicula)
    }).catch(error => {
        res.send(error)
    })

}




PeliculasController.peliculasAdultoTitulo = (req, res) => {


    let titulo = req.query.titulo;
    let adult = req.query.adult;


    Pelicula.findAll({
        where: {

            [Op.and]: [{
                    titulo: {
                        [Op.like]: titulo
                    }
                },
                {
                    adult: {
                        [Op.like]: adult
                    }
                },
            ]

        }
    }).then(films => {

        if (films != 0) {
            res.send(films);
        } else {
            res.send(`Película no encontrada`);
        };

    }).catch(error => {
        res.send(error);
    })
};



PeliculasController.peliculasFavoritas = (req, res) => {

    let popularity = req.query.popularity;

    Pelicula.findAll({
        where: {

            [Op.and]: [{
                popularity: {
                    [Op.like]: popularity
                }
            }]

        }
    }).then(films => {

        if (films != 0) {
            res.send(films);
        } else {
            res.send(`Película no encontrada`);
        };

    }).catch(error => {
        res.send(error);
    })
};





//Borrar Pelicula todos las Peliculas de nuestra propia DB
PeliculasController.borrarPeliculas = (req, res) => {

    // Pelicula.findAll()
    //     .then(data => {
    //         res.send(data)
    //     })
    //     .catch(error => {
    //         res.send(error)
    //     })
    try {

        Pelicula.destroy({
                where: {},
                truncate: false
            })
            .then(peliculaDel => {
                res.send(`Las peliculas  han  sido eliminadaS`)
            })

    } catch (error) {
        res.send(error)
    }

};

PeliculasController.traerPeliculaId = (req, res) => {
    //Búsqueda buscando una Id
    Pelicula.findByPk(req.params.id)
        .then(data => {
            res.send(data)
        });
};

//Borrar Pelicula DB propia
PeliculasController.borrarPelicula = (req, res) => {

    let id = req.body.id

    try {

        Pelicula.destroy({
                where: {
                    id: id
                },
                truncate: false
            })
            .then(peliculaDel => {
                res.send(`La pelicula ${id} ha sido eliminada`)
            })

    } catch (error) {
        res.send(error)
    }

}








//////////////////////// ENDPOINTS A MOVIE DB //////////////////////





//Busqueda de peliculas por titulo
PeliculasController.peliculasTitulo = async (req, res) => {

    let busqueda = req.query.titulo;

    try {

        let resultado = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${busqueda}&page=1&include_adult=false`)
        res.send(resultado.data)
    } catch (error) {
        //console.log("El error es: ", error.response.status, error.response.statusText)
    }
}


//Trae novedades de MOvieDB
PeliculasController.traeNovedades = async (req, res) => {

    try {
        let resultado = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`)
        res.send(resultado.data);
    } catch (error) {
        //console.log("El error es: ", error.response.status, error.response.statusText)
    }
}



// Traemos las peliculas con mejor nota -- /mejor_valoradas
PeliculasController.peliculasValoradas = async (req, res) => {

    try {
        let result = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`)
        res.send(result.data);
    } catch (error) {
        //console.log("El error es: ", error.response.status, error.response.statusText)
    }
}




//Busca Ultimas peliculas en MovieDB
PeliculasController.peliculasUltimas = async (req, res) => {

    try {
        let resultado = await axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`)
        res.send(resultado.data)
    } catch (error) {
        //console.log("El error es: ", error.response.status, error.response.statusText)
    }
}




//Traemos las peliculas relacionadas con la pelicula ID
PeliculasController.peliculasRelacionadas = async (req, res) => {

    let id = req.params.id

    try {
        let resultado = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${key}&language=en-US&page=1`)
        res.send(resultado.data)
    } catch (error) {
        //console.log("El error es: ", error.response.status, error.response.statusText)
    }
}



//Busca reviws de pelicula por ID en MOvieDB
PeliculasController.peliculasIdReviews = async (req, res) => {

    let id = req.params.id
    try {
        let resultado = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`)
        res.send(resultado.data)

    } catch (error) {
        //console.log("El error es: ", error.response.status, error.response.statusText)
    }
}


//Busca peliculas por ID en MovieDB
PeliculasController.peliculasPorId = async (req, res) => {

    let id = req.params.id
    try {
        let resultado = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
        res.send(resultado.data)

    } catch (error) {
        //console.log("El error es: ", error.response.status, error.response.statusText)
    }
}




//Registro de Peliculas en la BD propia
PeliculasController.avActualizaPelicula = async (req, res) => {

    // let angry = req.body.angry;
    // let disgusted = req.body.disgusted;
    // let fearful = req.body.fearful;
    // let happy = req.body.happy;
    // let neutral = req.body.neutral;
    // let sad = req.body.sad;
    // let surprised = req.body.surprised;
    let angry = req.body.angry;
    let disgusted = req.body.disgusted;
    let fearful = req.body.fearful;
    let happy = req.body.happy;
    let neutral = req.body.neutral;
    let sad = req.body.sad;
    let surprised = req.body.surprised;
    let id = req.body.id


    let consulta = `SELECT 
                            peliculas.visualizaciones AS visualizaciones,
                            peliculas.angry AS angry,
                            peliculas.disgusted AS disgusted,
                            peliculas.fearful AS fearful,
                            peliculas.happy AS happy,
                            peliculas.neutral AS neutral,
                            peliculas.sad AS sad,
                            peliculas.surprised AS surprised
                        FROM peliculas
                        WHERE 
                    id LIKE ${id}`;
    let resultado = await Pelicula.sequelize.query(consulta, {
        type: Pelicula.sequelize.QueryTypes.SELECT
    });


    //console.log(resultado)


    if (
        resultado[0].angry === 0 &&
        resultado[0].fearful === 0 &&
        resultado[0].disgusted === 0 &&
        resultado[0].happy === 0 &&
        resultado[0].neutral === 0 &&
        resultado[0].sad === 0 &&
        resultado[0].surprised === 0) {

        resultado[0].angry = angry;
        resultado[0].fearful = fearful;
        resultado[0].disgusted = disgusted;
        resultado[0].happy = happy;
        resultado[0].neutral = neutral;
        resultado[0].sad = sad;
        resultado[0].surprised = surprised;
        resultado[0].visualizaciones += 1;
    } else {

        let angry2 = resultado[0].visualizaciones * resultado[0].angry;
        let disgusted2 = resultado[0].visualizaciones * resultado[0].disgusted;
        let fearful2 = resultado[0].visualizaciones * resultado[0].fearful;
        let happy2 = resultado[0].visualizaciones * resultado[0].happy;
        let neutral2 = resultado[0].visualizaciones * resultado[0].neutral;
        let sad2 = resultado[0].visualizaciones * resultado[0].sad;
        let surprised2 = resultado[0].visualizaciones * resultado[0].surprised;
        //console.log("aaaaaaaaaaaaaaaaaaaaa")
        //console.log(sad)
        //console.log("aaaaaaaaaaaaaaaaaaaaa")

        angry = angry + angry2;
        fearful = fearful + fearful2;
        disgusted = disgusted + disgusted2;
        happy = happy + happy2;
        neutral = neutral + neutral2;
        sad = sad + sad2;
        surprised = surprised + surprised2;

        resultado[0].visualizaciones += 1;

        if (resultado[0].visualizaciones > 1000) {
            resultado[0].visualizaciones = 100;
        }

        resultado[0].angry = angry / resultado[0].visualizaciones;
        resultado[0].fearful = fearful / resultado[0].visualizaciones;
        resultado[0].disgusted = disgusted / resultado[0].visualizaciones;
        resultado[0].happy = happy / resultado[0].visualizaciones;
        resultado[0].neutral = neutral / resultado[0].visualizaciones;
        resultado[0].sad = sad / resultado[0].visualizaciones;
        resultado[0].surprised = surprised / resultado[0].visualizaciones;

    }

    // res.send(resultado) 
    try {

        Pelicula.update(resultado[0], {
                where: {
                    id: id
                }
            })
            .then(() => {
                res.send(`La pelicula ${id} ha sido actualizada con `
                +"angry"+resultado[0].angry
                +"fearful"+resultado[0].fearful
                +"disgusted"+resultado[0].disgusted
                +"happy"+resultado[0].happy
                +"neutral"+resultado[0].neutral
                +"sad"+resultado[0].sad
                +"surprised"+resultado[0].surprised)
            })

    } catch (error) {
        res.send(error)
    }


    // //console.log(resultado)
    // res.send(resultado)
    // let datos = req.body;
    // try {

    //     Pelicula.update(datos,{
    //         where: { id: id }
    //     })
    //         .then(peliculaDel => {
    //             res.send(`La emocion ${id} ha sido actualizada`)
    //         })

    // } catch (error) {
    //     res.send(error)
    // }

};



//ACTUALIZAR Usuario DB propia
PeliculasController.traerPeliculasAI = async (req, res) => {



    let id = req.params.id;
    let consulta = `SELECT  
            usuarios.p0 AS p0,
            usuarios.p1 AS p1,  
            usuarios.p2 AS p2,
            usuarios.p3 AS p3,
            usuarios.p4 AS p4,
            usuarios.p5 AS p5,
            usuarios.p6 AS p6,
            usuarios.p7 AS p7,
            usuarios.p8 AS p8,
            usuarios.p9 AS p9,
            usuarios.lectura AS lectura
    FROM usuarios
    WHERE 
    id LIKE ${id}`;
    // //console.log(valor);

    // //console.log("aaaaaaaaaaaaaa");
    // res.send(valor)

    let resultado = await Pelicula.sequelize.query(consulta, {
        type: Pelicula.sequelize.QueryTypes.SELECT
    });

    //console.log("iiiiiiiiii")
    //console.log(resultado[0])


    let consulta20 = `SELECT 
                            peliculas.id AS id, 
                            peliculas.angry AS angry,
                            peliculas.disgusted AS disgusted,
                            peliculas.fearful AS fearful,
                            peliculas.happy AS happy,
                            peliculas.neutral AS neutral,
                            peliculas.sad AS sad,
                            peliculas.surprised AS surprised,
                            peliculas.imagen AS imagen,
                            peliculas.video AS video
                        FROM peliculas
                        WHERE 
                        id LIKE '${resultado[0].p0}'
                        `;
    let resultado20 = await Pelicula.sequelize.query(consulta20, {
        type: Pelicula.sequelize.QueryTypes.SELECT
    });

    let consulta21 = `SELECT 
    peliculas.id AS id, 
    peliculas.angry AS angry,
    peliculas.disgusted AS disgusted,
    peliculas.fearful AS fearful,
    peliculas.happy AS happy,
    peliculas.neutral AS neutral,
    peliculas.sad AS sad,
    peliculas.surprised AS surprised,
    peliculas.imagen AS imagen,
    peliculas.video AS video
FROM peliculas
WHERE 
id LIKE '${resultado[0].p1}'
`;
    let resultado21 = await Pelicula.sequelize.query(consulta21, {
        type: Pelicula.sequelize.QueryTypes.SELECT
    });
    //console.log("iiiiiiiiii")
    //console.log(resultado21)

    let consulta22 = `SELECT 
    peliculas.id AS id, 
    peliculas.angry AS angry,
    peliculas.disgusted AS disgusted,
    peliculas.fearful AS fearful,
    peliculas.happy AS happy,
    peliculas.neutral AS neutral,
    peliculas.sad AS sad,
    peliculas.surprised AS surprised,
    peliculas.imagen AS imagen,
    peliculas.video AS video
FROM peliculas
WHERE 
id LIKE '${resultado[0].p2}'
`;
    let resultado22 = await Pelicula.sequelize.query(consulta22, {
        type: Pelicula.sequelize.QueryTypes.SELECT
    });

    let consulta23 = `SELECT 
peliculas.id AS id, 
peliculas.angry AS angry,
peliculas.disgusted AS disgusted,
peliculas.fearful AS fearful,
peliculas.happy AS happy,
peliculas.neutral AS neutral,
peliculas.sad AS sad,
peliculas.surprised AS surprised,
peliculas.imagen AS imagen,
peliculas.video AS video
FROM peliculas
WHERE 
id LIKE '${resultado[0].p3}'
`;
    let resultado23 = await Pelicula.sequelize.query(consulta23, {
        type: Pelicula.sequelize.QueryTypes.SELECT
    });

    let consulta24 = `SELECT 
peliculas.id AS id, 
peliculas.angry AS angry,
peliculas.disgusted AS disgusted,
peliculas.fearful AS fearful,
peliculas.happy AS happy,
peliculas.neutral AS neutral,
peliculas.sad AS sad,
peliculas.surprised AS surprised,
peliculas.imagen AS imagen,
peliculas.video AS video
FROM peliculas
WHERE 
id LIKE '${resultado[0].p4}'
`;
    let resultado24 = await Pelicula.sequelize.query(consulta24, {
        type: Pelicula.sequelize.QueryTypes.SELECT
    });

    let consulta25 = `SELECT 
peliculas.id AS id, 
peliculas.angry AS angry,
peliculas.disgusted AS disgusted,
peliculas.fearful AS fearful,
peliculas.happy AS happy,
peliculas.neutral AS neutral,
peliculas.sad AS sad,
peliculas.surprised AS surprised,
peliculas.imagen AS imagen,
peliculas.video AS video
FROM peliculas
WHERE 
id LIKE '${resultado[0].p5}'
`;
    let resultado25 = await Pelicula.sequelize.query(consulta25, {
        type: Pelicula.sequelize.QueryTypes.SELECT
    });

    let consulta26 = `SELECT 
peliculas.id AS id, 
peliculas.angry AS angry,
peliculas.disgusted AS disgusted,
peliculas.fearful AS fearful,
peliculas.happy AS happy,
peliculas.neutral AS neutral,
peliculas.sad AS sad,
peliculas.surprised AS surprised,
peliculas.imagen AS imagen,
peliculas.video AS video
FROM peliculas
WHERE 
id LIKE '${resultado[0].p6}'
`;
    let resultado26 = await Pelicula.sequelize.query(consulta26, {
        type: Pelicula.sequelize.QueryTypes.SELECT
    });

    let consulta27 = `SELECT 
peliculas.id AS id, 
peliculas.angry AS angry,
peliculas.disgusted AS disgusted,
peliculas.fearful AS fearful,
peliculas.happy AS happy,
peliculas.neutral AS neutral,
peliculas.sad AS sad,
peliculas.surprised AS surprised,
peliculas.imagen AS imagen,
peliculas.video AS video
FROM peliculas
WHERE 
id LIKE '${resultado[0].p7}'
`;
    let resultado27 = await Pelicula.sequelize.query(consulta27, {
        type: Pelicula.sequelize.QueryTypes.SELECT
    });

    let consulta28 = `SELECT 
peliculas.id AS id, 
peliculas.angry AS angry,
peliculas.disgusted AS disgusted,
peliculas.fearful AS fearful,
peliculas.happy AS happy,
peliculas.neutral AS neutral,
peliculas.sad AS sad,
peliculas.surprised AS surprised,
peliculas.imagen AS imagen,
peliculas.video AS video
FROM peliculas
WHERE 
id LIKE '${resultado[0].p8}'
`;
    let resultado28 = await Pelicula.sequelize.query(consulta28, {
        type: Pelicula.sequelize.QueryTypes.SELECT
    });

    let consulta29 = `SELECT 
peliculas.id AS id, 
peliculas.angry AS angry,
peliculas.disgusted AS disgusted,
peliculas.fearful AS fearful,
peliculas.happy AS happy,
peliculas.neutral AS neutral,
peliculas.sad AS sad,
peliculas.surprised AS surprised,
peliculas.imagen AS imagen,
peliculas.video AS video
FROM peliculas
WHERE 
id LIKE '${resultado[0].p9}'
`;
    let resultado29 = await Pelicula.sequelize.query(consulta29, {
        type: Pelicula.sequelize.QueryTypes.SELECT
    });

    let consulta3 = `SELECT  
    peliculas.angry AS angry,
    peliculas.disgusted AS disgusted,
    peliculas.fearful AS fearful,
    peliculas.happy AS happy,
    peliculas.neutral AS neutral,
    peliculas.sad AS sad,
    peliculas.surprised AS surprised,
    peliculas.imagen AS imagen,
    peliculas.video AS video,
    peliculas.id AS id,
    peliculas.titulo AS titulo,
    peliculas.sinopsis AS sinopsis
    FROM peliculas                 
    `;

    let resultado3 = await Pelicula.sequelize.query(consulta3, {
        type: Pelicula.sequelize.QueryTypes.SELECT
    });

    //console.log("44444" + resultado3)
    //console.log(resultado3)

    let resultadoIa = ""
    let recomendado = ""
    let obj = new Array();
    let i = 0
    const iniciar = () => {

        const redNeuronal = new brain.NeuralNetwork();

        const datos = [{
                "input": {
                    "angry": resultado20[0].angry,
                    "disgusted": resultado20[0].disgusted,
                    "fearful": resultado20[0].fearful,
                    "happy": resultado20[0].happy,
                    "neutral": resultado20[0].neutral,
                    "sad": resultado20[0].sad,
                    "surprised": resultado20[0].surprised
                },
                "output": {
                    "recomendado": 1
                }
            },
            {
                "input": {
                    "angry": resultado21[0].angry,
                    "disgusted": resultado21[0].disgusted,
                    "fearful": resultado21[0].fearful,
                    "happy": resultado21[0].happy,
                    "neutral": resultado21[0].neutral,
                    "sad": resultado21[0].sad,
                    "surprised": resultado21[0].surprised
                },
                "output": {
                    "recomendado": 1
                }
            },
            {
                "input": {
                    "angry": resultado22[0].angry,
                    "disgusted": resultado22[0].disgusted,
                    "fearful": resultado22[0].fearful,
                    "happy": resultado22[0].happy,
                    "neutral": resultado22[0].neutral,
                    "sad": resultado22[0].sad,
                    "surprised": resultado22[0].surprised
                },
                "output": {
                    "recomendado": 1
                }
            },
            {
                "input": {
                    "angry": resultado23[0].angry,
                    "disgusted": resultado23[0].disgusted,
                    "fearful": resultado23[0].fearful,
                    "happy": resultado23[0].happy,
                    "neutral": resultado23[0].neutral,
                    "sad": resultado23[0].sad,
                    "surprised": resultado23[0].surprised
                },
                "output": {
                    "recomendado": 1
                }
            },
            {
                "input": {
                    "angry": resultado24[0].angry,
                    "disgusted": resultado24[0].disgusted,
                    "fearful": resultado24[0].fearful,
                    "happy": resultado24[0].happy,
                    "neutral": resultado24[0].neutral,
                    "sad": resultado24[0].sad,
                    "surprised": resultado24[0].surprised
                },
                "output": {
                    "recomendado": 1
                }
            },
            {
                "input": {
                    "angry": resultado25[0].angry,
                    "disgusted": resultado25[0].disgusted,
                    "fearful": resultado25[0].fearful,
                    "happy": resultado25[0].happy,
                    "neutral": resultado25[0].neutral,
                    "sad": resultado25[0].sad,
                    "surprised": resultado25[0].surprised
                },
                "output": {
                    "recomendado": 1
                }
            },
            {
                "input": {
                    "angry": resultado26[0].angry,
                    "disgusted": resultado26[0].disgusted,
                    "fearful": resultado26[0].fearful,
                    "happy": resultado26[0].happy,
                    "neutral": resultado26[0].neutral,
                    "sad": resultado26[0].sad,
                    "surprised": resultado26[0].surprised
                },
                "output": {
                    "recomendado": 1
                }
            },
            {
                "input": {
                    "angry": resultado27[0].angry,
                    "disgusted": resultado27[0].disgusted,
                    "fearful": resultado27[0].fearful,
                    "happy": resultado27[0].happy,
                    "neutral": resultado27[0].neutral,
                    "sad": resultado27[0].sad,
                    "surprised": resultado27[0].surprised
                },
                "output": {
                    "recomendado": 1
                }
            },
            {
                "input": {
                    "angry": resultado28[0].angry,
                    "disgusted": resultado28[0].disgusted,
                    "fearful": resultado28[0].fearful,
                    "happy": resultado28[0].happy,
                    "neutral": resultado28[0].neutral,
                    "sad": resultado28[0].sad,
                    "surprised": resultado28[0].surprised
                },
                "output": {
                    "recomendado": 1
                }
            },
            {
                "input": {
                    "angry": resultado29[0].angry,
                    "disgusted": resultado29[0].disgusted,
                    "fearful": resultado29[0].fearful,
                    "happy": resultado29[0].happy,
                    "neutral": resultado29[0].neutral,
                    "sad": resultado29[0].sad,
                    "surprised": resultado29[0].surprised
                },
                "output": {
                    "recomendado": 1
                }
            },
            {
                "input": {
                    "angry": 1 - resultado20[0].angry,
                    "disgusted": 1 - resultado20[0].disgusted,
                    "fearful": 1 - resultado20[0].fearful,
                    "happy": 1 - resultado20[0].happy,
                    "neutral": 1 - resultado20[0].neutral,
                    "sad": 1 - resultado20[0].sad,
                    "surprised": 1 - resultado20[0].surprised
                },
                "output": {
                    "no recomendado": 1
                }
            },
            {
                "input": {
                    "angry": 1 - resultado21[0].angry,
                    "disgusted": 1 - resultado21[0].disgusted,
                    "fearful": 1 - resultado21[0].fearful,
                    "happy": 1 - resultado21[0].happy,
                    "neutral": 1 - resultado21[0].neutral,
                    "sad": 1 - resultado21[0].sad,
                    "surprised": 1 - resultado21[0].surprised
                },
                "output": {
                    "no recomendado": 1
                }
            },
            {
                "input": {
                    "angry": 1 - resultado22[0].angry,
                    "disgusted": 1 - resultado22[0].disgusted,
                    "fearful": 1 - resultado22[0].fearful,
                    "happy": 1 - resultado22[0].happy,
                    "neutral": 1 - resultado22[0].neutral,
                    "sad": 1 - resultado22[0].sad,
                    "surprised": 1 - resultado22[0].surprised
                },
                "output": {
                    "no recomendado": 1
                }
            },
            {
                "input": {
                    "angry": 1 - resultado23[0].angry,
                    "disgusted": 1 - resultado23[0].disgusted,
                    "fearful": 1 - resultado23[0].fearful,
                    "happy": 1 - resultado23[0].happy,
                    "neutral": 1 - resultado23[0].neutral,
                    "sad": 1 - resultado23[0].sad,
                    "surprised": 1 - resultado23[0].surprised
                },
                "output": {
                    "no recomendado": 1
                }
            },
            {
                "input": {
                    "angry": 1 - resultado24[0].angry,
                    "disgusted": 1 - resultado24[0].disgusted,
                    "fearful": 1 - resultado24[0].fearful,
                    "happy": 1 - resultado24[0].happy,
                    "neutral": 1 - resultado24[0].neutral,
                    "sad": 1 - resultado24[0].sad,
                    "surprised": 1 - resultado24[0].surprised
                },
                "output": {
                    "no recomendado": 1
                }
            },
            {
                "input": {
                    "angry": 1 - resultado25[0].angry,
                    "disgusted": 1 - resultado25[0].disgusted,
                    "fearful": 1 - resultado25[0].fearful,
                    "happy": 1 - resultado25[0].happy,
                    "neutral": 1 - resultado25[0].neutral,
                    "sad": 1 - resultado25[0].sad,
                    "surprised": 1 - resultado25[0].surprised
                },
                "output": {
                    "no recomendado": 1
                }
            },
            {
                "input": {
                    "angry": 1 - resultado26[0].angry,
                    "disgusted": 1 - resultado26[0].disgusted,
                    "fearful": 1 - resultado26[0].fearful,
                    "happy": 1 - resultado26[0].happy,
                    "neutral": 1 - resultado26[0].neutral,
                    "sad": 1 - resultado26[0].sad,
                    "surprised": 1 - resultado26[0].surprised
                },
                "output": {
                    "no recomendado": 1
                }
            },
            {
                "input": {
                    "angry": 1 - resultado27[0].angry,
                    "disgusted": 1 - resultado27[0].disgusted,
                    "fearful": 1 - resultado27[0].fearful,
                    "happy": 1 - resultado27[0].happy,
                    "neutral": 1 - resultado27[0].neutral,
                    "sad": 1 - resultado27[0].sad,
                    "surprised": 1 - resultado27[0].surprised
                },
                "output": {
                    "no recomendado": 1
                }
            },
            {
                "input": {
                    "angry": 1 - resultado28[0].angry,
                    "disgusted": 1 - resultado28[0].disgusted,
                    "fearful": 1 - resultado28[0].fearful,
                    "happy": 1 - resultado28[0].happy,
                    "neutral": 1 - resultado28[0].neutral,
                    "sad": 1 - resultado28[0].sad,
                    "surprised": 1 - resultado28[0].surprised
                },
                "output": {
                    "no recomendado": 1
                }
            },
            {
                "input": {
                    "angry": 1 - resultado29[0].angry,
                    "disgusted": 1 - resultado29[0].disgusted,
                    "fearful": 1 - resultado29[0].fearful,
                    "happy": 1 - resultado29[0].happy,
                    "neutral": 1 - resultado29[0].neutral,
                    "sad": 1 - resultado29[0].sad,
                    "surprised": 1 - resultado29[0].surprised
                },
                "output": {
                    "no recomendado": 1
                }
            }

        ]

        

        redNeuronal.train(datos);
        for (let element of resultado3) {
            // //console.log("resultaaa3333" + element)
            // //console.log(element)  
            recomendado = brain.likely({
                "angry": element.angry,
                "disgusted": element.disgusted,
                "fearful": element.fearful,
                "happy": element.happy,
                "neutral": element.neutral,
                "sad": element.sad,
                "surprised": element.surprised
            }, redNeuronal)
            // //console.log("resultaaa" + recomendado)
            // //console.log("resultaaa3333" + element)
            if (recomendado === "recomendado") {

                // //console.log("resultaaa3333" + element[0])
                resultadoIa = '"sinopsis":"' + element.sinopsis + '","video":"' + element.video +'","titulo":"' + element.titulo +  '","id":' + element.id + ',"imagen":"' + element.imagen + '"';
                //console.log("resultadoIa" + resultadoIa + "tttt")
                resultadoIa = JSON.parse('{' + resultadoIa + '}');
                obj[i] = resultadoIa
                // //console.log(obj[0])
                i++
                //console.log(obj)
            }
        }
        // "name":"John", "age":30, "city":"New York"
        // //console.log(resultadoIa)
        // resultadoIa=resultadoIa.slice(0, -1); 
        // //console.log(resultadoIa)
        // obj = JSON.parse('{'+resultadoIa+'}');
    }
    iniciar();
    // //console.log(resultado3)
    //console.log("6666666666" + obj);
    res.send(obj);



}
// let datos = req.body;
// try {

//     Usuario.update(datos,{
//         where: { id: id }
//     })
//         .then(UsuarioDel => {
//             res.send(`El Usuario ${id} ha sido actualizado`)
//         })

// } catch (error) {
//     res.send(error)
// }




//TRAE peliculas recomendadas por AV a traves de AI
PeliculasController.traerPeliculasAVAI = async (req, res) => {



    let angry = req.body.angry;
    let disgusted = req.body.disgusted;
    let fearful = req.body.fearful;
    let happy = req.body.happy;
    let neutral = req.body.neutral;
    let sad = req.body.sad;
    let surprised = req.body.surprised;
    // let id = req.body.id




    // //console.log(resultado2[0].angry)
    // //console.log(resultado2[0].angry)
    // brain=ml
    // //console.log(brain)

    let consulta3 = `SELECT  
    peliculas.angry AS angry,
    peliculas.disgusted AS disgusted,
    peliculas.fearful AS fearful,
    peliculas.happy AS happy,
    peliculas.neutral AS neutral,
    peliculas.sad AS sad,
    peliculas.surprised AS surprised,
    peliculas.imagen AS imagen,
    peliculas.video AS video,
    peliculas.id AS id,
    peliculas.titulo AS titulo,
    peliculas.sinopsis AS sinopsis
    
    FROM peliculas                 
    `;

    let resultado3 = await Pelicula.sequelize.query(consulta3, {
        type: Pelicula.sequelize.QueryTypes.SELECT
    });

    let resultadoIa = ""
    let recomendado = ""
    let obj = new Array();
    let i = 0
    const iniciar = () => {

        const redNeuronal = new brain.NeuralNetwork();

        const datos = [{
                "input": {
                    "angry": angry,
                    "disgusted": disgusted,
                    "fearful": fearful,
                    "happy": happy,
                    "neutral": neutral,
                    "sad": sad,
                    "surprised": surprised
                },
                "output": {
                    "recomendado": 1
                }
            },
            {
                "input": {
                    "angry": angry-0.05,
                    "disgusted": disgusted-0.05,
                    "fearful": fearful-0.05,
                    "happy": happy-0.05,
                    "neutral": neutral-0.05,
                    "sad": sad-0.05,
                    "surprised": surprised-0.05
                },
                "output": {
                    "recomendado": 1
                }
            },
            {
                "input": {
                    "angry": angry-0.03,
                    "disgusted": disgusted-0.03,
                    "fearful": fearful-0.03,
                    "happy": happy-0.03,
                    "neutral": neutral-0.03,
                    "sad": sad-0.03,
                    "surprised": surprised-0.03
                },
                "output": {
                    "recomendado": 1
                }
            },
            {
                "input": {
                    "angry": angry-0.04,
                    "disgusted": disgusted-0.04,
                    "fearful": fearful-0.04,
                    "happy": happy-0.04,
                    "neutral": neutral-0.04,
                    "sad": sad-0.04,
                    "surprised": surprised-0.04
                },
                "output": {
                    "recomendado": 1
                }
            },
            {
                "input": {
                    "angry": angry+0.05,
                    "disgusted": disgusted+0.05,
                    "fearful": fearful+0.05,
                    "happy": happy+0.05,
                    "neutral": neutral+0.05,
                    "sad": sad+0.05,
                    "surprised": surprised+0.05
                },
                "output": {
                    "recomendado": 1
                }
            },
            {
                "input": {
                    "angry": angry+0.03,
                    "disgusted": disgusted+0.03,
                    "fearful": fearful+0.03,
                    "happy": happy+0.03,
                    "neutral": neutral+0.03,
                    "sad": sad+0.03,
                    "surprised": surprised+0.03
                },
                "output": {
                    "recomendado": 1
                }
            },
            {
                "input": {
                    "angry": angry+0.04,
                    "disgusted": disgusted+0.04,
                    "fearful": fearful+0.04,
                    "happy": happy+0.04,
                    "neutral": neutral+0.04,
                    "sad": sad+0.04,
                    "surprised": surprised+0.04
                },
                "output": {
                    "recomendado": 1
                }
            },

            {
                "input": {
                    "angry": 1 - angry,
                    "disgusted": 1 - disgusted,
                    "fearful": 1 - fearful,
                    "happy": 1 - happy,
                    "neutral": 1 - neutral,
                    "sad": 1 - sad,
                    "surprised": 1 - surprised
                },
                "output": {
                    "no recomendado": 1
                }
            },
            {
                "input": {
                    "angry": 1 -  angry-0.05,
                    "disgusted": 1 -  disgusted-0.05,
                    "fearful": 1 -  fearful-0.05,
                    "happy": 1 -  happy-0.05,
                    "neutral": 1 -  neutral-0.05,
                    "sad": 1 -  sad-0.05,
                    "surprised": 1 -  surprised-0.05
                },
                "output": {
                    "no recomendado": 1
                }
            },
            {
                "input": {
                    "angry": 1 -  angry-0.03,
                    "disgusted": 1 -  disgusted-0.03,
                    "fearful": 1 -  fearful-0.03,
                    "happy": 1 -  happy-0.03,
                    "neutral": 1 -  neutral-0.03,
                    "sad": 1 -  sad-0.03,
                    "surprised": 1 -  surprised-0.03
                },
                "output": {
                    "no recomendado": 1
                }
            },
            {
                "input": {
                    "angry": 1 -  angry-0.04,
                    "disgusted": 1 -  disgusted-0.04,
                    "fearful": 1 -  fearful-0.04,
                    "happy": 1 -  happy-0.04,
                    "neutral": 1 -  neutral-0.04,
                    "sad": 1 -  sad-0.04,
                    "surprised": 1 -  surprised-0.04
                },
                "output": {
                    "no recomendado": 1
                }
            },
            {
                "input": {
                    "angry": 1 -  angry+0.05,
                    "disgusted": 1 -  disgusted+0.05,
                    "fearful": 1 -  fearful+0.05,
                    "happy": 1 -  happy+0.05,
                    "neutral": 1 -  neutral+0.05,
                    "sad": 1 -  sad+0.05,
                    "surprised": 1 -  surprised+0.05
                },
                "output": {
                    "no recomendado": 1
                }
            },
            {
                "input": {
                    "angry": 1 -  angry+0.03,
                    "disgusted": 1 -  disgusted+0.03,
                    "fearful": 1 -  fearful+0.03,
                    "happy": 1 -  happy+0.03,
                    "neutral": 1 -  neutral+0.03,
                    "sad": 1 -  sad+0.03,
                    "surprised": 1 -  surprised+0.03
                },
                "output": {
                    "no recomendado": 1
                }
            },
            {
                "input": {
                    "angry": 1 -  angry+0.04,
                    "disgusted": 1 -  disgusted+0.04,
                    "fearful": 1 -  fearful+0.04,
                    "happy": 1 -  happy+0.04,
                    "neutral": 1 -  neutral+0.04,
                    "sad": 1 -  sad+0.04,
                    "surprised": 1 -  surprised+0.04
                },
                "output": {
                    "no recomendado": 1
                }
            },
        ]



        redNeuronal.train(datos);
        for (let element of resultado3) {
            // //console.log(element)  
            recomendado = brain.likely({
                "angry": element.angry,
                "disgusted": element.disgusted,
                "fearful": element.fearful,
                "happy": element.happy,
                "neutral": element.neutral,
                "sad": element.sad,
                "surprised": element.surprised
            }, redNeuronal)
            // //console.log("resultaaa" + recomendado)
            // //console.log("resultaaa" + element.disgusted)
            if (recomendado === "recomendado") {


                resultadoIa = '"titulo":"' + element.titulo + '","sinopsis":"' + element.sinopsis+ '","id":' + element.id + ',"imagen":"' + element.imagen+ '","video":"' + element.video + '"'
                //console.log("resultadoIa" + resultadoIa + "tttt")
                resultadoIa = JSON.parse('{' + resultadoIa + '}');
                obj[i] = resultadoIa
                // //console.log(obj[0])
                i++
                //console.log(obj)
            }
        }

    }
    iniciar();
    // //console.log(resultado3)
    //console.log("eeee" + obj)
    res.send(obj)




    // let datos = req.body;
    // try {

    //     Usuario.update(datos,{
    //         where: { id: id }
    //     })
    //         .then(UsuarioDel => {
    //             res.send(`El Usuario ${id} ha sido actualizado`)
    //         })

    // } catch (error) {
    //     res.send(error)
    // }






}



module.exports = PeliculasController;