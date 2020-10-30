const config = require('../config/config');
const Sequelize = require('sequelize');
const dbConnectionString  =  'postgres://' + config.database_username + ':' + config.database_password + '@' + config.database_host + ':' + config.database_port + '/' + config.database_name;
//console.log("Connection String:\n" + dbConnectionString);
const sequelize = new Sequelize(dbConnectionString);
module.exports = sequelize;
