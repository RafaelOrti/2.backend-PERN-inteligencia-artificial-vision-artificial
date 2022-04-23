const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {
    console.log("888888888");
    console.log(req);
    console.log("888888888");
    console.log(req.headers);

    // Comprobar que existe el token
    if (!req.headers.authorization) {
        res.status(401).json({
            msg: "Acceso no autorizado"
        });
    } else {

        // Comrpobar la validez de este token
        let token = req.headers.authorization.split(" ")[1];
        console.log("888888888");
        console.log(token)

        // Comprobar la validez de este token
        jwt.verify(token, authConfig.secret, (err, decoded) => {

            if (err) {
                res.status(500).json({
                    msg: "Ha ocurrido un problema al decodificar el token",
                    err
                });
            } else {
                req.user = decoded;
                next();
            }

        })
    }

};