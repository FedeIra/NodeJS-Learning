const { config } = require('./../config/config');

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(config.dbUrl, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

module.exports = sequelize;

// module.exports = {
//   development: {
//     url: config.dbUrl,
//     dialect: 'postgres',
//   },
//   production: {
//     url: config.dbUrl,
//     dialect: 'postgres',
//     dialectOptions: {
//       ssl: {
//         rejectUnauthorized: false,
//       },
//     },
//   },
// };
