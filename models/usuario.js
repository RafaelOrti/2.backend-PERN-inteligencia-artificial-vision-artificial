'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Pedido, {
        foreignKey: 'usuarioId'
      });
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    nickname: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    email: DataTypes.STRING,
    rol: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    puntos: DataTypes.INTEGER,
    p0: DataTypes.INTEGER,
    p1: DataTypes.INTEGER,
    p2: DataTypes.INTEGER,
    p3: DataTypes.INTEGER,
    p4: DataTypes.INTEGER,
    p5: DataTypes.INTEGER,
    p6: DataTypes.INTEGER,
    p7: DataTypes.INTEGER,
    p8: DataTypes.INTEGER,
    p9: DataTypes.INTEGER,
    lectura: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};