'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class emociones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      this.belongsTo(models.Pelicula, {
        foreignKey: 'peliculaId'
      })
    }
  }
  emociones.init({
    titulo: DataTypes.STRING,
    minuto: DataTypes.INTEGER,
    angry: DataTypes.FLOAT,
    disgusted: DataTypes.FLOAT,
    fearful: DataTypes.FLOAT,
    happy: DataTypes.FLOAT,
    neutral: DataTypes.FLOAT,
    sad: DataTypes.FLOAT,
    surprised: DataTypes.FLOAT,
    peliculaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'emociones'
  })
  return emociones
}
