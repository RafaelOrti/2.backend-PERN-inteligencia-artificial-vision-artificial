'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelicula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Pedido, {
        foreignKey: 'peliculaId'
      });
    }
  }
  Pelicula.init({
    titulo: DataTypes.STRING,
    genero: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    adult: DataTypes.BOOLEAN,
    popularity: DataTypes.FLOAT,
    imagen: DataTypes.STRING,
    video: DataTypes.STRING,
    fecha: DataTypes.DATE,
    idioma:DataTypes.STRING,
    puntos: DataTypes.INTEGER,
    anuncio: DataTypes.BOOLEAN,
    visualizaciones: DataTypes.INTEGER,
    angry: DataTypes.FLOAT,
    disgusted: DataTypes.FLOAT,
    fearful: DataTypes.FLOAT,
    happy: DataTypes.FLOAT,
    neutral: DataTypes.FLOAT,
    sad: DataTypes.FLOAT,
    surprised: DataTypes.FLOAT

  }, {
    sequelize,
    modelName: 'Pelicula',
  });
  return Pelicula;
};