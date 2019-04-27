const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL,{
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true
  }
});