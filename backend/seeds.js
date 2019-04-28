const { sequelize, Consumer, Partner, Store, Inventory } = require('./models');

async function seeds() {
  try { 
    const consumer = await Consumer.bulkCreate([
      {
        first_name: 'Matthew',
        last_name: 'Lee', 
        email: 'aaa@gmail.com',
        password_digest: 'aaa',
        street_address: '10 E 21st St, New York, NY ',
        phone_number: '1111111111',
      },
      {
        first_name: 'Angel', 
        last_name: 'Goncalvez',
        email: 'angel@angel.com',
        password_digest: 'password',
        street_address: '11 Broadway, New York, NY',
        phone: '1111111111',
      },
      {
        first_name: 'Jess',
        last_name: 'Kim',
        email: 'bbbb@gmail.com',
        password_digest: 'bbb',
        street_address: '48 W 17th St, New York, NY',
        phone: '1111111111',
      },
      {
        first_name: 'Chris',
        last_name: 'Smith',
        email: 'accountemail@gmail.com',
        password_digest: 'password',
        street_address: '39 W 19th St, New York, NY',
        phone: '1234567890',
      },
    ]);

  
    const partner = await Partner.bulkCreate([
      {
        first_name: 'Kenny',
        last_name: 'Nguyen',
        email: '222@gmail.com',
        password_digest: '222',
        address: '3131313131',
        phone_number: '2222222222'
      },
      {
        first_name: 'Stephanie',
        last_name: 'Williams',
        email: '333@gmail.com',
        password_digest: '333',
        address: '3131313131',
        phone_number: '3333333333'
      },
      {
        first_name: 'Michelle',
        last_name: 'Alvero',
        email: '444@gmail.com',
        password_digest: '444',
        address: '3131313131',
        phone_number: '4444444444'
      },
      {
        first_name: 'Michael',
        last_name: 'Johnson',
        email: '555@gmail.com',
        password_digest: '555',
        address: '3131313131',
        phone_number: '5555555555'
      },
    ])
    const store = await Store.bulkCreate([
      {
        store_name: "Ralph's Deli",
        address: '922 Broadway, New York, NY',
        phone_number: '1234567890',
        monday: '0 - 24',
        tuesday: '0 - 24',
        wednesday: '0 - 24',
        thursday: '0 - 24',
        friday: '0 - 24',
        saturday: '0 - 24',
        monday: '0 - 24',
        sunday: '0 - 24',
        category: 'Groceries',
      },
      {
        store_name: 'Space Kitchen',
        address: '41 W 24th St, New York, NY ',
        phone_number: '123456890',
        monday: '0 - 24',
        tuesday: '0 - 24',
        wednesday: '0 - 24',
        thursday: '0 - 24',
        friday: '0 - 24',
        saturday: '0 - 24',
        monday: '0 - 24',
        sunday: '0 - 24',
        category: 'Hardware',
      },
      {
        store_name: '100 GET FOODS',
        address: '1 E 28th S, New York, NY',
        phone_number: '1234567890',
        monday: '0 - 24',
        tuesday: '0 - 24',
        wednesday: '0 - 24',
        thursday: '0 - 24',
        friday: '0 - 24',
        saturday: '0 - 24',
        monday: '0 - 24',
        sunday: '0 - 24',
        category: 'Groceries',
      },
      {
        store_name: 'BODEGA MARKET',
        address: '252 3rd Ave, New York, NY',
        phone_number: '1234567890',
        monday: '0 - 24',
        tuesday: '0 - 24',
        wednesday: '0 - 24',
        thursday: '0 - 24',
        friday: '0 - 24',
        saturday: '0 - 24',
        monday: '0 - 24',
        sunday: '0 - 24',
        category: 'Groceries',
      },
      {
        store_name: "Steve's Electronics",
        address: '80 7th Ave, New York, NY',
        phone_number: '1234567890',
        monday: '0 - 24',
        tuesday: '0 - 24',
        wednesday: '0 - 24',
        thursday: '0 - 24',
        friday: '0 - 24',
        saturday: '0 - 24',
        monday: '0 - 24',
        sunday: '0 - 24',
        category: 'Electronics',
      },
    ]);

    const inventory = await Inventory.bulkCreate([
      {
        name:  'Shin Ramen',
        category: 'food',
        price: 12,
        in_stock: true,
      },
      {
        name:  'Twinkies',
        category: 'food',
        price: .50,
        in_stock: true,
      },
      {
        name:  'Hagan Daas',
        category: 'food',
        price: 6,
        in_stock: true,
      },
      {
        name:  'Toothbrush',
        category: 'personal_care',
        price: 2,
        in_stock: true,
      },
      {
        name:  'Gatorade',
        category: 'food',
        price: 1.50,
        in_stock: true,
      },
      {
        name:  'Toliet Paper',
        category: 'household',
        price: 1.50,
        in_stock: true,
      },
      {
        name:  'Toothpaste',
        category: 'personal_care',
        price: 3,
        in_stock: true,
      },
      {
        name:  'USB_C Charger',
        category: 'electronics',
        price: 3,
        in_stock: true,
      },
      {
        name:  'Hammer',
        category: 'hardware',
        price: 10,
        in_stock: true,
      },
      {
        name:  'Nails',
        category: 'hardware',
        price: 4,
        in_stock: true,
      },
      {
        name:  'Lightbulb',
        category: 'household',
        price: 3,
        in_stock: true,
      },
      {
        name:  'Headphones',
        category: 'electronics',
        price: 3,
        in_stock: true,
      },
    ])
  } catch (e) {
    console.log(e);
  }
};

seeds();