const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
  database: 'bodega_cat',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true
  }
});

const Consumer = sequelize.define('consumer', {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  email: Sequelize.STRING,
  password_digest: Sequelize.STRING,
  address: Sequelize.STRING,
  phone_number: Sequelize.INTEGER,
});

const Partner = sequelize.define('partner', {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  email: Sequelize.STRING,
  password_digest: Sequelize.STRING,
  address: Sequelize.STRING,
  phone_number: Sequelize.INTEGER,
});

// User.beforeCreate((user, options) => {
//   const password_digest = bcrypt.hashSync(user.password, 10);
//   user.password = password_digest;
// });

// const Card = sequelize.define('credit_card', {
//   first_name: Sequelize.STRING,
//   last_name: Sequelize.STRING,
//   card_number: Sequelize.INTEGER,
//   exp_date: Sequelize.INTEGER,
//   cvc_number: Sequelize.INTEGER
// });

// Card.associate = models => {
//   Card.belongsTo(models.User, {
//     onDelete: 'CASCADE',
//     foreignKey: {
//       allowNull: false
//     }
//   });

// }


// const History = sequelize.define('order_history', {
//   // idk what's going here yet
//   order_number: Sequelize.INTEGER
// });

// History.associate = models => {
//   History.belongsTo(models.User, {
//     onDelete: 'CASCADE',
//     foreignKey: {
//       allowNull: false
//     }
//   });
// }

// User.associate = models => {
//   User.hasMany(models.Card);
//   User.hasOne(models.History);
// }

const Store = sequelize.define('store', {
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


module.exports = {
  sequelize, 
  Consumer,
  Partner,
  Store,
  Inventory
}
