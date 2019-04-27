const { sequelize, User, Store, Inventory } = require('./models');

async function seeds() {
  try { 
    const user = await User.bulkCreate([
      {
        name: 'Matthew Yee', 
        email: '111@gmail.com',
        password: '123',
        street_address: '316 57th Street',
        city: 'Brooklyn',
        state: 'New York',
        phone: 1111111111,
        credit_card: '1234123412341234',
        zipcode: 10032,
      },
      {
        name: 'angel', 
        email: 'angel@angel.com',
        password: 'password',
        street_address: 'angel address',
        city: 'angel city',
        state: 'angel state',
        phone: 1111111111,
        credit_card: '1234567890',
        zipcode: 10468,
      },
      {
        name: 'Jess Kim',
        email: '222@gmail.com',
        password: '123',
        street_address: '316 34th Street',
        city: 'Manhattan',
        state: 'New York',
        phone: 1111111111,
        credit_card: '12',
        zipcode: 10031,
      },
      {
        name: 'account name',
        email: 'accountemail@gmail.com',
        password: 'password',
        street_address: 'account address',
        city: 'account city',
        state: 'account state',
        phone: 1234567890,
        credit_card: '1234567890',
        zipcode: 10454,
      },
    ]);

    const store = await Store.bulkCreate([
      {
        address: 'firstStore address',
        phone_number: '1234567890',
        hours_of_operation: '9-5',
        email: 'firststoreemail@gmail.com',
        category: 'groceries',
        password: 'firststorepassword',
      },
      {
        address: 'secondStore address',
        phone_number: '123456890',
        hours_of_operation: '9-5',
        email: 'secondstoreemail@gmail.com',
        category: 'food',
        password: 'secondstorepassword',
      },
      {
        address: 'thirdStore address',
        phone_number: '1234567890',
        hours_of_operation: '9-5',
        email: 'thirdStore address',
        category: 'food',
        password: 'thirdstorepassword',
      },
      {
        address: 'fourthStore address',
        phone_number: '1234567890',
        hours_of_operation: '9-5',
        email: 'fourthStore address',
        category: 'food',
        password: 'fourthstorepassword',
      },
      {
        address: 'fifthStore address',
        phone_number: '1234567890',
        hours_of_operation: '9-5',
        email: 'fifthStore address',
        category: 'groceries',
        password: 'fifthstorepassword',
      },
    ]);

    const inventory = await Inventory.bulkCreate([
      {
        name:  'Shin Ramen',
        price: 12,
        item_count: 25
      },
      {
        name:  'Twinkies',
        price: .50,
        item_count: 25
      },
      {
        name:  'Hagan Daas',
        price: 6,
        item_count: 50
      },
      {
        name:  'Toothbrush',
        price: 2,
        item_count: 10
      },
      {
        name:  'Gatorade',
        price: 1.50,
        item_count: 25
      },
    ])
  } catch (e) {
    console.log(e);
  }
};

seeds();