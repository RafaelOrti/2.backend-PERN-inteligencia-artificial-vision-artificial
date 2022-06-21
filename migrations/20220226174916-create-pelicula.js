'use strict'
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Peliculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      sinopsis: {
        type: Sequelize.STRING
      },
      adult: {
        type: Sequelize.BOOLEAN
      },
      popularity: {
        type: Sequelize.FLOAT
      },
      imagen: {
        type: Sequelize.STRING
      },
      video: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
      },
      idioma: {
        type: Sequelize.STRING
      },
      puntos: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      anuncio: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
        allowNull: false
      },
      visualizaciones: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      angry: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false
      },
      disgusted: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false
      },
      fearful: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false
      },
      happy: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false
      },
      neutral: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false
      },
      sad: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false
      },
      surprised: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Peliculas')
  }
}
