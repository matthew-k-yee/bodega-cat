const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
  database: 'bodega_cat',
  dialect: 'postgres',
  // operatorsAliases: false,
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
  phone_number: Sequelize.STRING,
});

const Partner = sequelize.define('partner', {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  email: Sequelize.STRING,
  password_digest: Sequelize.STRING,
  address: Sequelize.STRING,
  phone_number: Sequelize.STRING,
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
  store_name: Sequelize.STRING, 
  address: Sequelize.STRING,
  phone_number: Sequelize.STRING,
  monday: Sequelize.STRING,
  tuesday: Sequelize.STRING,
  wednesday: Sequelize.STRING,
  thursday: Sequelize.STRING,
  friday: Sequelize.STRING,
  saturday: Sequelize.STRING,
  monday: Sequelize.STRING,
  sunday: Sequelize.STRING,
  category: Sequelize.STRING,
  partner_id: Sequelize.INTEGER
})

const Inventory = sequelize.define('inventory', {
  name: Sequelize.STRING,
  category: Sequelize.STRING,
  price: Sequelize.INTEGER,
  in_stock: Sequelize.BOOLEAN,
  store_id: Sequelize.INTEGER
})

Partner.hasMany(Store)
Store.belongsTo(Partner)

Store.hasOne(Inventory)

module.exports = {
  sequelize, 
  Consumer,
  Partner, 
  Store, 
  Inventory
}
