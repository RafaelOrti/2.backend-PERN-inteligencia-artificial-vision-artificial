const config = require('./config/config.json');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE || config.development.database, //nombre db
    process.env.MYSQL_USER || config.development.username, //nombre superusuario
    process.env.MYSQL_PASSWORD || config.development.password, //nombre contraseña superusuario no es usuario normal 
    {
        host: process.env.MYSQL_HOST || config.development.host,//donde esta el banco de datos localhost intenta entrar en variables de entorno no existe y leugo va a config autoexplicativo en config
        port: process.env.MYSQL_PORT || config.development.port || '3306',//cual es el puerto
        dialect: 'mysql',//cual es el banco de datos que tieens mysql
        operatorAliases: false,//?
        pool: {//cuantas persona pueden conetarse banco de datos?
            max: 5,  //maximum number of connection in pool
            min: 0,  //minimum number of connection in pool
            acquire: 30000, //maximum time, in milliseconds, that a connection can be idle before being released
            idle: 10000 // maximum time, in milliseconds, that pool will try to get connection before throwing error
        },
    }
);
//verificar si el banco de datos ha sido creado bien, ver documentacion sequelize
module.exports = sequelize.authenticate()
.then((db)=>{
    console.log('MYSQL connected'); 
    return db;
});