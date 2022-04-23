const {
    Pedido
} = require('../models/index');

const PedidosController = {};


//Creacion de pedido en DB propia
PedidosController.nuevoPedido = async (req, res) => {

    let body = req.body;

    //////////////OPCION INICIAL PARA CREAR PEDIDO /////////////////
    Pedido.create({
        price: body.price,
        peliculaId: body.peliculaId,
        usuarioId: body.usuarioId,
        fechaEntrega: body.fechaEntrega
    }).then(pedido => {
        if (pedido) {
            res.send(pedido)
        } else {
            res.send("La creación de un nuevo pedido ha fallado");
        }
    }).catch((error => {
        res.send(error)
    }))
}



//actualizar DB propia
PedidosController.actualizarPedido = (req, res) => {

    let id = req.params.id

    let datos = req.body;
    try {

        Pedido.update(datos, {
                where: {
                    id: id
                }
            })
            .then(pedidoDel => {
                res.send(`El pedido ${id} ha sido actualizada`)
            })

    } catch (error) {
        res.send(error)
    }

}




//Buscamos Pedidos Todos los pedidos en DB
PedidosController.todosPedidos = async (req, res) => {

    let consulta = `SELECT * FROM pedidos`;

    try {
        let resultado = await Pedido.sequelize.query(consulta, {
            type: Pedido.sequelize.QueryTypes.SELECT
        });

        if (resultado) {
            res.send(resultado);
        } else {
            res.send("Ha ocurrido algun error al hacer la consulta")
        }

    } catch (error) {
        res.send(error)
    }
}



//Busqueda Avanzada de pedido en DB
PedidosController.infoPedidoAvanzado = async (req, res) => {

    let consulta = `SELECT  usuarios.nombre AS Nombre,
                            usuarios.email AS correo, 
                            usuarios.edad AS Edad,  
                            peliculas.titulo AS Titulo_Alquilado , 
                            peliculas.genero AS Genero, 
                            pedidos.fechaEntrega AS Fecha_Alquiler
                    FROM usuarios 
                            INNER JOIN pedidos ON usuarios.id = pedidos.usuarioId 
                            INNER JOIN peliculas ON peliculas.id = pedidos.peliculaId `;
    try {
        let resultado = await Pedido.sequelize.query(consulta, {
            type: Pedido.sequelize.QueryTypes.SELECT
        });

        if (resultado) {
            res.send(resultado);
        } else {
            res.send("Ha ocurrido algun error al hacer la consulta")
        }

    } catch (error) {
        res.send(error)
    }


}

//Busqueda avanzada de Usuarios con alquiler
PedidosController.infoUsuarios = async (req, res) => {

    let consulta = `SELECT  usuarios.nombre AS Nombre,
                            usuarios.apellido AS Apellido,
                            usuarios.email AS correo, 
                            usuarios.edad AS Edad,
                            peliculas.titulo AS Titulo_Alquilado,
                            pedidos.fechaEntrega AS Fecha_Alquiler
                    FROM usuarios 
                            INNER JOIN pedidos ON usuarios.id = pedidos.usuarioId
                            INNER JOIN peliculas ON peliculas.id = pedidos.peliculaId `;
    try {
        let resultado = await Pedido.sequelize.query(consulta, {
            type: Pedido.sequelize.QueryTypes.SELECT
        });

        if (resultado) {
            res.send(resultado);
        } else {
            res.send("Ha ocurrido algun error al hacer la consulta")
        }

    } catch (error) {
        res.send(error)
    }
}



//Busqueda Avanzada de Usuarios por Nombre
PedidosController.pedidoNombre = async (req, res) => {

    let nombre = req.params.nombre

    let consulta = `SELECT  usuarios.nombre AS Nombre,
                            usuarios.email AS correo, 
                            usuarios.edad AS Edad,  
                            peliculas.titulo AS Titulo_Alquilado , 
                            peliculas.genero AS Genero, 
                            pedidos.fechaEntrega AS Fecha_Alquiler
                    FROM usuarios 
                            INNER JOIN pedidos ON usuarios.id = pedidos.usuarioId 
                            INNER JOIN peliculas ON peliculas.id = pedidos.peliculaId
                    WHERE nombre LIKE '%${nombre}%'`;

    try {
        let resultado = await Pedido.sequelize.query(consulta, {
            type: Pedido.sequelize.QueryTypes.SELECT
        });

        if (resultado) {
            res.send(resultado);
        } else {
            res.send("Ha ocurrido algun error al hacer la consulta")
        }

    } catch (error) {
        res.send(error)
    }
}




//Borramos todos los pedidos en DB
PedidosController.borrarTodos = async (req, res) => {

    let consulta = `DELETE FROM pedidos`;

    try {
        let resultado = await Pedido.sequelize.query(consulta, {
            type: Pedido.sequelize.QueryTypes.DELETE
        });

        if (resultado != 0) {
            res.send("Pedidos Eliminados con exito!");
        } else {
            res.send("Ha ocurrido algun error al borrar los pedidos")
        }

    } catch (error) {
        res.send(error)
    }
}



//Borrar pedidos de Ususarios por Nombre
PedidosController.borrarNombre = async (req, res) => {

    let nombre = req.params.nombre

    let consulta = `DELETE FROM pedidos 
    INNER JOIN usuarios ON usuarios.id = pedidos.usuarioId WHERE (Nombre = '${nombre}');`;

    try {
        let resultado = await Pedido.sequelize.query(consulta, {
            type: Pedido.sequelize.QueryTypes.DELETE
        });

        if (resultado != 0) {
            res.send(`pedidos de ${nombre} eliminados con exito!`);
        } else {
            res.send("Ha ocurrido algun error al borrar los pedidos")
        }

    } catch (error) {
        res.send(error)
    }
}

//Borrar pedidos por ID en DB
PedidosController.borrarPorId = async (req, res) => {

    let id = req.params.id

    let consulta = `DELETE FROM pedidos WHERE (id = ${id});`;

    try {
        let resultado = await Pedido.sequelize.query(consulta, {
            type: Pedido.sequelize.QueryTypes.DELETE
        });

        if (resultado != 0) {
            res.send("Pedido eliminado con exito!");
        } else {
            res.send("Ha ocurrido algun error al borrar los pedidos")
        }

    } catch (error) {
        res.send(error)
    }

}



module.exports = PedidosController;