'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('emociones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      minuto: {
        type: Sequelize.INTEGER
      },
      angry: {
        type: Sequelize.FLOAT
      },
      disgusted: {
        type: Sequelize.FLOAT
      },
      fearful: {
        type: Sequelize.FLOAT
      },
      happy: {
        type: Sequelize.FLOAT
      },
      neutral: {
        type: Sequelize.FLOAT
      },
      sad: {
        type: Sequelize.FLOAT
      },
      surprised: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      peliculaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Peliculas',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('emociones');
  }
};