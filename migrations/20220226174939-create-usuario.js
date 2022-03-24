'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      p0: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      p1: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      p2: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      p3: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      p4: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      p5: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      p6: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      p7: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      p8: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      p9: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      lectura: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      nombre: {
        type: Sequelize.STRING,
        //Este valor puede ser nulo
        allowNull: false
      },
      apellido: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      edad: {
        type: Sequelize.INTEGER
        ,
        allowNull: false,
        defaultValue: 0
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      rol: {
        type: Sequelize.BOOLEAN,
        //este método se usa para dar un valor por defecto
        defaultValue: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },  
      puntos: {
        type: Sequelize.INTEGER,
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};