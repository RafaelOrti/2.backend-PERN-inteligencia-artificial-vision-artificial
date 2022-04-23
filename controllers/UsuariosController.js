const authConfig = require('../config/auth');
const {
    Usuario
} = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
    Op
} = require("sequelize");



const constHighPassword = "JjFJ%j9$Xdim";
const UsuariosController = {};


//Funciones del controlador


///////////////Registro y login////////////

//Registro de usuarios
UsuariosController.registraUsuario = async (req, res) => {


    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let nickname = req.body.nickname;
    let edad = req.body.edad;
    let email = req.body.email;
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));


    if (/^([a-zA-Z0-9@*#]{8,15})$/.test(req.body.password) !== true) {
        return res.send(
            "La contraseña debe tener al menos 8 caracteres y no más de 15 caracteres."
        );
    };

    if (req.body.edad < 3) {
        res.send("Debes de tener más de 3 años para usar esta aplicación");
    }

    Usuario.findAll({
        where: {

            [Op.or]: [{
                    email: {
                        [Op.like]: email
                    }
                },
                {
                    nickname: {
                        [Op.like]: nickname
                    }
                }
            ]

        }
    }).then(datosRepetidos => {
        if (datosRepetidos == 0) {
            Usuario.create({
                nombre: nombre,
                apellido: apellido,
                nickname: nickname,
                edad: edad,
                email: email,
                password: password

            }).then(usuario => {
                res.send(`Bienvenido, ${usuario.nombre}`);
            }).catch((error) => {
                res.send(error);
            });
        } else {
            res.send("El usuario con ese e-mail o nickname ya existe en nuestra base de datos");
        }
    }).catch(error => {
        res.send(error)
    });

};



UsuariosController.registraUsuarioEmail = async (req, res) => {
    try {
        if (/^([a-zA-Z0-9@*#]{8,15})$/.test(req.body.password) !== true) {
            return res.send(
                "La contraseña debe tener al menos 8 caracteres y no más de 15 caracteres."
            );
        }
        const hash = bcrypt.hashSync(
            req.body.password,
            Number.parseInt(authConfig.rounds)
        );
        const usuario = await Usuario.create({
            ...req.body,
            password: hash,
            confirmed: 0,
            rol: 0,

        });
        const emailToken = jwt.sign({
            email: req.body.email
        }, authConfig.secret, {
            expiresIn: authConfig.expires,
        });
        const url = "http://localhost:3000/usuarios/confirmar/" + emailToken;
        await transporter.sendMail({
            to: req.body.email,
            subject: "Confirme su registro",
            html: `<h3>Bienvenido, estás a un paso de registrarte </h3>
                      <a href="${url}"> Click para confirmar tu registro</a> `,
        });
        res.send(
            `${usuario.nombre}, Te hemos enviado un correo para confirmar el registro, recuerda revisar tu carpeta SPAM si no ves nuestro correo`
        );
    } catch (error) {
        res.status(400).send(error);
    }
};


UsuariosController.confirmarEmail = async (req, res) => {
        try {
            const token = req.params.emailToken;
            const payload = jwt.verify(token, authConfig.secret);
            await User.update({
                confirmed: true
            }, {
                where: {
                    email: payload.email,
                },
            });
            res.status(201).send("Usuario confirmado con exito");
        } catch (error) {
            console.error(error);
        }
    },


    //Login de un usuario registrado
    UsuariosController.loginUsuarios = (req, res) => {
        let correo = req.body.email;
        let password = req.body.password;

        Usuario.findOne({
            where: {
                email: correo
            }
        }).then(Usuario => {

            if (!Usuario) {
                res.send("Usuario o contraseña inválido");
            } else {
                //el usuario existe, por lo tanto, vamos a comprobar
                //si el password es correcto

                if (bcrypt.compareSync(password, Usuario.password)) { //COMPARA CONTRASEÑA INTRODUCIDA CON CONTRASEÑA GUARDADA, TRAS DESENCRIPTAR

                    let token = jwt.sign({
                        usuario: Usuario
                    }, authConfig.secret, {
                        expiresIn: authConfig.expires
                    });
                    Usuario.token = token
                    res.json({
                        usuario: Usuario,
                        token: token
                    })
                } else {
                    res.status(401).json({
                        msg: "Usuario o contraseña inválidos"
                    });
                }
            };


        }).catch(error => {
            res.send(error);
        })
    };



///////////////Registro y login////////////

///////////////Acciones usuario////////////

///////////////Actualizar////////////

//Actualiza Datos por ID
UsuariosController.updateProfileId = async (req, res) => {

    let id = req.params.id
    req.body.password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
    let datos = req.body;

    try {
        Usuario.update(datos, {
                where: {
                    id: id
                }
            })
            .then(actualizado => {
                res.send(actualizado)
            })
    } catch (error) {
        res.send("Ha ocurrido lo siguiente:", error)
    }

}



//Actualizar contraseña del usuario por id
UsuariosController.updatePasswordId = (req, res) => {


    let id = req.body.id;
    let oldPassword = req.body.oldPassword;
    let newPassword = req.body.newPassword;

    Usuario.findOne({
        where: {
            id: id
        }
    }).then(usuarioFound => {

        if (usuarioFound) {

            if (bcrypt.compareSync(oldPassword, usuarioFound.password)) {

                //En caso de que el Password antiguo SI sea el correcto....
                //1er paso..encriptamos el nuevo password....

                newPassword = bcrypt.hashSync(newPassword, Number.parseInt(authConfig.rounds));

                //2do paso guardamos el nuevo password en la base de datos

                let data = {
                    password: newPassword
                }

                Usuario.update(data, {
                        where: {
                            id: id
                        }
                    })
                    .then(actualizado => {
                        res.send(actualizado);
                    })
                    .catch((error) => {
                        res.status(401).json({
                            msg: `Ha ocurrido un error actualizando el password`
                        });
                    });
            } else {
                res.status(401).json({
                    msg: "contraseña actual inválida"
                });
            }
        } else {
            res.send(`Usuario no encontrado`);
        }
    }).catch((error => {
        res.send(error);
    }));

};

//Actualizar a admin del usuario por id
UsuariosController.idAdmin = (req, res) => {

    let id = req.body.id;
    let highPassword = req.body.highPassword;
    let newRol;

    if (highPassword === `${constHighPassword}`) {

        Usuario.findOne({
            where: {
                id: id
            }
        }).then(usuarioFound => {
            if (usuarioFound) {
                if (usuarioFound.rol === false) {
                    //En caso de que el rol antiguo SI sea el correcto....

                    //1er paso..encriptamos el nuevo password....

                    newRol = true;

                    //2do paso guardamos el nuevo password en la base de datos

                    let data = {
                        rol: newRol
                    }

                    Usuario.update(data, {
                            where: {
                                id: id
                            }
                        })
                        .then(actualizado => {
                            res.send(actualizado);
                        })
                        .catch((error) => {
                            res.status(401).json({
                                msg: `Ha ocurrido un error actualizando el password`
                            });
                        });
                } else {
                    res.status(401).json({
                        msg: "Tu usuario ya es Admin"
                    });
                }
            } else {
                res.send(`Usuario no encontrado`);
            }
        }).catch((error => {
            res.send(error);
        }));
    } else {
        res.send(`Contraseña de admin incorrecta`);
    }

};


//Actualizar a auth del usuario por id
UsuariosController.degradeProfileId = (req, res) => {

    let id = req.body.id;
    let highPassword = req.body.highPassword;
    let newRol;

    if (highPassword === `${constHighPassword}`) {

        Usuario.findOne({
            where: {
                id: id
            }
        }).then(usuarioFound => {
            if (usuarioFound) {
                if (usuarioFound.rol === true) {
                    //En caso de que el rol antiguo SI sea el correcto....
                    //1er paso..encriptamos el nuevo password....

                    newRol = false;
                    ////////////////////////////////7

                    //2do paso guardamos el nuevo password en la base de datos

                    let data = {
                        rol: newRol
                    }

                    Usuario.update(data, {
                            where: {
                                id: id
                            }
                        })
                        .then(actualizado => {
                            res.send(actualizado);
                        })
                        .catch((error) => {
                            res.status(401).json({
                                msg: `Ha ocurrido un error actualizando el password`
                            });
                        });
                } else {
                    res.status(401).json({
                        msg: "Tu usuario ya es Auth"
                    });
                }
            } else {
                res.send(`Usuario no encontrado`);
            }
        }).catch((error => {
            res.send(error);
        }));
    } else {
        res.send(`Contraseña de admin incorrecta`);
    }

};

//Actualiza Datos por email
UsuariosController.updateProfileEmail = async (req, res) => {

    let datos = req.body;
    let email = req.params.email

    try {

        Usuario.update(datos, {
                where: {
                    email: email
                }
            })
            .then(actualizado => {
                res.send(actualizado)
            })

    } catch (error) {
        res.send(error)
    }

}

//Actualizar contraseña del usuario por email
UsuariosController.updatePasswordEmail = (req, res) => {

    let email = req.body.email;
    let oldPassword = req.body.oldPassword;
    let newPassword = req.body.newPassword;

    Usuario.findOne({
        where: {
            email: email
        }
    }).then(usuarioFound => {
        if (usuarioFound) {
            if (bcrypt.compareSync(oldPassword, usuarioFound.password)) {

                //En caso de que el Password antiguo SI sea el correcto....
                //1er paso..encriptamos el nuevo password....

                newPassword = bcrypt.hashSync(newPassword, Number.parseInt(authConfig.rounds));

                //2do paso guardamos el nuevo password en la base de datos

                let data = {
                    password: newPassword
                }

                Usuario.update(data, {
                        where: {
                            email: email
                        }
                    })
                    .then(actualizado => {
                        res.send(actualizado);
                    })
                    .catch((error) => {
                        res.status(401).json({
                            msg: `Ha ocurrido un error actualizando el password`
                        });
                    });
            } else {
                res.status(401).json({
                    msg: "Usuario o contraseña inválidos"
                });
            }
        } else {
            res.send(`Usuario no encontrado`);
        }
    }).catch((error => {
        res.send(error);
    }));

};

//Actualizar a admin del usuario por email
UsuariosController.emailAdmin = (req, res) => {


    let email = req.body.email;
    let password = req.body.password;
    let newRol;

    if (password === "JjFJ%j9$Xdim") {
        Usuario.findOne({
            where: {
                email: email
            }
        }).then(usuarioFound => {
            if (usuarioFound) {
                if (usuarioFound.rol === 0) {

                    //En caso de que el rol antiguo SI sea el correcto....
                    //1er paso..encriptamos el nuevo password....

                    newRol = 1;

                    //2do paso guardamos el nuevo password en la base de datos

                    let data = {
                        rol: newRol
                    }

                    //console.log("esto es data", data);

                    Usuario.update(data, {
                            where: {
                                email: email
                            }
                        })
                        .then(actualizado => {
                            res.send(actualizado);
                        })
                        .catch((error) => {
                            res.status(401).json({
                                msg: `Ha ocurrido un error actualizando el password`
                            });
                        });

                } else {
                    res.status(401).json({
                        msg: "Tu usuario ya es Admin"
                    });
                }
            } else {
                res.send(`Usuario no encontrado`);
            }
        }).catch((error => {
            res.send(error);
        }));
    } else {
        res.send(`Contraseña de admin incorrecta`);
    }

};

//Actualizar a admin del usuario por email
UsuariosController.degradeProfileEmail = (req, res) => {

    let email = req.body.email;
    let highPassword = req.body.highPassword;
    let newRol;

    if (highPassword === `${constHighPassword}`) {

        Usuario.findOne({
            where: {
                email: email
            }
        }).then(usuarioFound => {
            if (usuarioFound) {
                if (usuarioFound.rol === true) {

                    //En caso de que el rol antiguo SI sea el correcto....
                    //1er paso..encriptamos el nuevo password....

                    newRol = false;

                    //2do paso guardamos el nuevo password en la base de datos

                    let data = {
                        rol: newRol
                    }

                    Usuario.update(data, {
                            where: {
                                email: email
                            }
                        })
                        .then(actualizado => {
                            res.send(actualizado);
                        })
                        .catch((error) => {
                            res.status(401).json({
                                msg: `Ha ocurrido un error actualizando el password`
                            });
                        });
                } else {
                    res.status(401).json({
                        msg: "Tu usuario ya es Auth"
                    });
                }
            } else {
                res.send(`Usuario no encontrado`);
            }
        }).catch((error => {
            res.send(error);
        }));
    } else {
        res.send(`Contraseña de admin incorrecta`);
    }

};

///////////////Actualizar////////////


///////////////Acciones usuario////////////


///////////////Acciones superusuario////////////

//Búsqueda trayendo a todos los usuarios
UsuariosController.traeUsuarios = (req, res) => {

    Usuario.findAll()
        .then(data => {
            res.send(data)
        }).catch(error => {
            res.send(error)
        })
};

UsuariosController.traerUsuarioId = (req, res) => {
    //Búsqueda buscando una Id
    Usuario.findByPk(req.params.id)
        .then(data => {
            res.send(data)
        });
};

UsuariosController.traerUsuariosEmail = (req, res) => {
    //Búsqueda comparando un campo
    Usuario.findOne({
            where: {
                email: req.params.email
            }
        })
        .then(data => {
            res.send(data)
        });
};

UsuariosController.traerUsuariosNickname = (req, res) => {
    //Búsqueda comparando un campo
    Usuario.findOne({
            where: {
                nickname: req.params.nickname
            }
        })
        .then(data => {
            res.send(data)
        });
};


//Borra todos los usuarios de la db
UsuariosController.deleteAll = async (req, res) => {

    try {
        Usuario.destroy({
                where: {},
                truncate: false
            })
            .then(usuariosEliminados => {
                res.send(`se han eliminado ${usuariosEliminados} usuarios`)
            })
    } catch (error) {
        res.send(error)
    }

};


//Borra Usuarios por ID
UsuariosController.deleteById = async (req, res) => {

    let id = req.params.id

    try {
        Usuario.destroy({
                where: {
                    id: id
                },
                truncate: false
            })
            .then(usuariosEliminados => {
                res.send(`El usuario con la id ${id} ha sido eliminado ${usuariosEliminados}`)
            })
    } catch (error) {
        res.send(error)
    }

};


//Borra Usuarios por email
UsuariosController.deleteByEmail = async (req, res) => {

    let email = req.params.email;

    try {

        Usuario.destroy({
                where: {
                    email: email
                },
                truncate: false
            })
            .then(usuarioEliminados => {
                res.send(`El usuario con el email ${email} ha sido eliminado ${usuarioEliminados}`)
            })
    } catch (error) {
        res.send(error)
    }

};


//Borra Usuarios por nickname
UsuariosController.deleteByNickname = async (req, res) => {

    let nickname = req.params.nickname

    try {
        Usuario.destroy({
                where: {
                    nickname: nickname
                },
                truncate: false
            })
            .then(usuarioEliminados => {
                res.send(`El usuario con el nickname ${nickname} ha sido eliminado ${usuarioEliminados}`)
            })
    } catch (error) {
        res.send(error)
    }

};



////////////////////////////dataset

//Registro de Datasets en la BD propia
UsuariosController.registraDataset = async (req, res) => {

    let p = req.body.p;
    let id = req.body.id;

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
    FROM usuarios`;


    let resultado = await Usuario.sequelize.query(consulta, {
        type: Usuario.sequelize.QueryTypes.SELECT
    });
    
    let data;
    let lec = resultado[id].lectura + 1;

    switch (resultado[id].lectura) {
        case 0:
            data = {
                p0: p,
                lectura: lec
            }

            Usuario.update(data, {
                where: {
                    id: id
                }
            })
            break;
        case 1:
            data = {
                p1: p,
                lectura: lec
            }

            Usuario.update(data, {
                where: {
                    id: id
                }
            })

            break;
        case 2:
            data = {
                p2: p,
                lectura: lec
            }

            Usuario.update(data, {
                where: {
                    id: id
                }
            })
            break;
        case 3:
            data = {
                p3: p,
                lectura: lec
            }

            Usuario.update(data, {
                where: {
                    id: id
                }
            })
            break;
        case 4:
            data = {
                p4: p,
                lectura: lec
            }

            Usuario.update(data, {
                where: {
                    id: id
                }
            })
            break;
        case 5:
            data = {
                p5: p,
                lectura: lec
            }

            Usuario.update(data, {
                where: {
                    id: id
                }
            })
            break;
        case 6:
            data = {
                p6: p,
                lectura: lec
            }

            Usuario.update(data, {
                where: {
                    id: id
                }
            })
            break;
        case 7:
            data = {
                p7: p,
                lectura: lec
            }

            Usuario.update(data, {
                where: {
                    id: id
                }
            })
            break;
        case 8:
            data = {
                p8: p,
                lectura: lec
            }

            Usuario.update(data, {
                where: {
                    id: id
                }
            })
            break;
        case 9:
            data = {
                p9: p,
                lectura: 0
            }

            Usuario.update(data, {
                where: {
                    id: id
                }
            })
            break;

    }

    res.send(`El Usuario ${id} ha sido actualizado`)

};


module.exports = UsuariosController;