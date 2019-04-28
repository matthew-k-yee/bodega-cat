const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
  database: 'bodega_cat',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true
  }
});

const User = sequelize.define('user', {
  name: Sequelize.STRING, 
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  street_address: Sequelize.STRING,
  phone: Sequelize.INTEGER,
  credit_card: Sequelize.BIGINT
});

User.beforeCreate((user, options) => {
  const password_digest = bcrypt.hashSync(user.password, 10);
  user.password = password_digest;
});

const Store = sequelize.define('store', {
  name: Sequelize.STRING,
  address: Sequelize.TEXT,
  phone_number: Sequelize.INTEGER,
  hours_of_operation: Sequelize.TEXT,
  email: Sequelize.TEXT,
  category: Sequelize.TEXT,
  password: Sequelize.TEXT
});

const Inventory = sequelize.define('inventory', {
  name: Sequelize.TEXT,
  price: Sequelize.STRING,
  item_count: Sequelize.INTEGER
})


Inventory.belongsTo(Store)
Store.hasMany(Inventory)

User.hasMany(Inventory)
Inventory.belongsTo(User)



module.exports = {
  sequelize, 
  User, 
  Store, 
  Inventory
}