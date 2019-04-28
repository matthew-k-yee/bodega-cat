const { sequelize, User, Store, Inventory } = require('./models');

async function seeds() {
  try { 
    const user = await User.bulkCreate([
      {
        name: 'Matthew Yee', 
        email: '111@gmail.com',
        password: '123',
        street_address: '10 E 21st St, New York, NY ',
        phone: 1111111111,
        credit_card: '1234123412341234',
      },
      {
        name: 'angel', 
        email: 'angel@angel.com',
        password: 'password',
        street_address: '11 Broadway, New York, NY',
        city: 'angel city',
        state: 'angel state',
        phone: 1111111111,
        credit_card: '1234567890',
      },
      {
        name: 'Jess Kim',
        email: '222@gmail.com',
        password: '123',
        street_address: '48 W 17th St, New York, NY',
        city: 'Manhattan',
        state: 'New York',
        phone: 1111111111,
        credit_card: '12',
      },
      {
        name: 'account name',
        email: 'accountemail@gmail.com',
        password: 'password',
        street_address: '39 W 19th St, New York, NY',
        city: 'account city',
        state: 'account state',
        phone: 1234567890,
        credit_card: '1234567890',
      },
    ]);

    const store = await Store.bulkCreate([
      {
        name: "Ralph's Deli",
        address: '922 Broadway, New York, NY',
        phone_number: '1234567890',
        hours_of_operation: '9-5',
        email: 'firststoreemail@gmail.com',
        category: 'groceries',
        password: 'firststorepassword',
      },
      {
        name: 'Space Kitchen',
        address: '41 W 24th St, New York, NY ',
        phone_number: '123456890',
        hours_of_operation: '9-5',
        email: 'secondstoreemail@gmail.com',
        category: 'food',
        password: 'secondstorepassword',
      },
      {
        name: '100 GET FOODS',
        address: '1 E 28th S, New York, NY',
        phone_number: '1234567890',
        hours_of_operation: '9-5',
        email: 'thirdStore address',
        category: 'food',
        password: 'thirdstorepassword',
      },
      {
        name: 'BODEGA MARKET',
        address: '252 3rd Ave, New York, NY',
        phone_number: '1234567890',
        hours_of_operation: '9-5',
        email: 'fourthStore address',
        category: 'food',
        password: 'fourthstorepassword',
      },
      {
        name: "Steve's Groceries",
        address: '80 7th Ave, New York, NY',
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
      {
        name:  'Toliet Paper',
        price: 1.50,
        item_count: 25
      },
    ])
  } catch (e) {
    console.log(e);
  }
};

seeds();