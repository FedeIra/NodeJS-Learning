'use strict';

// PARA HACER MIGRACIONES
const { USER_TABLE } = require('./../models/user.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(USER_TABLE, 'recovery_token', {
      field: 'recovery_token',
      allowNull: true,
      type: Sequelize.DataTypes.STRING,
    });
  }, //? 1) Agrega la columna "recovery_token" a la tabla "users" con los parámetros que le pasamos como parámetro (queryInterface, Sequelize) y los parámetros que le pasamos como parámetro (USER_TABLE, 'recovery_token', { field: 'recovery_token', allowNull: true, type: Sequelize.DataTypes.STRING, })

  down: async (queryInterface) => {
    await queryInterface.remove(USER_TABLE, 'recovery_token');
  },
}; //? esto es un rollback en caso de que algo salga mal. Le decimos que elimine la nueva tabla que agregamos.

/* This is a migration file for a Sequelize-based Node.js application. The migration adds a new column named 'recovery_token' to an existing database table called 'user', and sets it to allow null values.

The 'up' function is an asynchronous function that uses Sequelize's queryInterface.addColumn() method to add the new column to the 'user' table. The method takes three arguments: the name of the table to modify (in this case, USER_TABLE), the name of the new column, and an object that specifies the column's attributes, including its data type.

The 'down' function is another asynchronous function that uses Sequelize's queryInterface.removeColumn() method to remove the 'recovery_token' column from the 'user' table. */
