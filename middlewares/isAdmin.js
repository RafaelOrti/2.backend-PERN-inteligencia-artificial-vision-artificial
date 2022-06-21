// esta forma es la correcta
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')
// hacerlo así
module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]

  // esto es el token

  const { usuario } = jwt.decode(token, authConfig.secret)
  // entre corchetes coges la llave, primero tienes llave y despues el valor de la llave solo coges esta, pero la variable se guarda en user

  try {
    if (usuario.rol) {
      next()
    } else {
      res.status(403).send({ msg: 'User is not allowed.' })
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({
      msg: 'Something had happened, try to check thue infos you put and try again.',
      error
    })
  }
  console.log(usuario)
}

// esta forma mal

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
