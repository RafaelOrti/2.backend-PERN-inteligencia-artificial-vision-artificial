//esta forma es la correcta
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
//hacerlo así
module.exports = (req, res, next) => {
    let token = req.headers.authorization.split(' ')[1];
/*
token -> Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMCwibmFtZSI6IkphaXIiLCJhZ2UiOjE5LCJzdXJuYW1lIjoiRGEgU2lsdmEiLCJlbWFpbCI6Imphc2FvQGdtYWlsLmNvbSIsIm5pY2tuYW1lIjoiSmFzaXIiLCJwYXNzd29yZCI6IiQyYiQxMCRrNGxuY3hkY0QxdFZHWTRKR01kQmMuR3ovTEYyRVpvYjBHakpiSzZ3Ry5KcU5ValpjV2xWZSIsImNyZWF0ZWRBdCI6IjIwMjItMDItMjJUMTQ6MzM6MDcuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjItMDItMjJUMTQ6MzM6MDcuMDAwWiJ9LCJpYXQiOjE2NDU1NDE1MjEsImV4cCI6MTY0NTYyNzkyMX0.4fYND8V8cX7k2i3FHZui8Ff8ojbqmioDgmuXcr5ov7k
token after split -> ["Bearer", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMCwibmFtZSI6IkphaXIiLCJhZ2UiOjE5LCJzdXJuYW1lIjoiRGEgU2lsdmEiLCJlbWFpbCI6Imphc2FvQGdtYWlsLmNvbSIsIm5pY2tuYW1lIjoiSmFzaXIiLCJwYXNzd29yZCI6IiQyYiQxMCRrNGxuY3hkY0QxdFZHWTRKR01kQmMuR3ovTEYyRVpvYjBHakpiSzZ3Ry5KcU5ValpjV2xWZSIsImNyZWF0ZWRBdCI6IjIwMjItMDItMjJUMTQ6MzM6MDcuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjItMDItMjJUMTQ6MzM6MDcuMDAwWiJ9LCJpYXQiOjE2NDU1NDE1MjEsImV4cCI6MTY0NTYyNzkyMX0.4fYND8V8cX7k2i3FHZui8Ff8ojbqmioDgmuXcr5ov7k"]
token[1] -> "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMCwibmFtZSI6IkphaXIiLCJhZ2UiOjE5LCJzdXJuYW1lIjoiRGEgU2lsdmEiLCJlbWFpbCI6Imphc2FvQGdtYWlsLmNvbSIsIm5pY2tuYW1lIjoiSmFzaXIiLCJwYXNzd29yZCI6IiQyYiQxMCRrNGxuY3hkY0QxdFZHWTRKR01kQmMuR3ovTEYyRVpvYjBHakpiSzZ3Ry5KcU5ValpjV2xWZSIsImNyZWF0ZWRBdCI6IjIwMjItMDItMjJUMTQ6MzM6MDcuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjItMDItMjJUMTQ6MzM6MDcuMDAwWiJ9LCJpYXQiOjE2NDU1NDE1MjEsImV4cCI6MTY0NTYyNzkyMX0.4fYND8V8cX7k2i3FHZui8Ff8ojbqmioDgmuXcr5ov7k"
*/

    // console.log(req.headers.authorization);
    //esto es el token

    let {usuario} = jwt.decode(token,authConfig.secret)
    //entre corchetes coges la llave, primero tienes llave y despues el valor de la llave solo coges esta, pero la variable se guarda en user

    try{
        if(usuario.rol){
            next();
        }else{
            res.status(403).send({msg:`User is not allowed.`})
        }
    }catch(error){
        console.log(error);
        res.status(400).json({
            msg:`Something had happened, try to check thue infos you put and try again.`,
                error:error
        });
    }
    console.log(usuario);
    
};








//esta forma mal

// const { Usuario } = require('../models/index'); 

// module.exports = (req, res, next) => {

//     let id = req.body.id;

//     Usuario.findOne({
//         where : { id : id }
//     }).then(usuarioEncontrado => {

//         if(usuarioEncontrado.rol == 1){
//             next();
//         }else {
//             res.send(`El usuario no es admin`)
//         }
//     }).catch(error => {
//         res.send(error)
//     })

// };