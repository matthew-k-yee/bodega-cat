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
        tuesday: '6 - 22',
        wednesday: '0 - 24',
        thursday: '6 - 22',
        friday: '0 - 24',
        saturday: '0 - 24',
        sunday: '0 - 24',
        category: 'Groceries',
        partner_id: 1
      },
      {
        store_name: 'Space Kitchen',
        address: '41 W 24th St, New York, NY ',
        phone_number: '123456890',
        monday: '8 - 20',
        tuesday: '8 - 20',
        wednesday: '8 - 20',
        thursday: '8 - 20',
        friday: '6 - 24',
        saturday: '6 - 2',
        sunday: '6 - 2',
        category: 'Hardware',
        partner_id: 2
      },
      {
        store_name: '100 GET FOODS',
        address: '1 E 28th S, New York, NY',
        phone_number: '1234567890',
        monday: '10 - 20',
        tuesday: '10 - 20',
        wednesday: '10 - 20',
        thursday: '10 - 20',
        friday: '10 - 20',
        saturday: '10 - 20',
        sunday: '10 - 20',
        category: 'Groceries',
        partner_id: 3
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
        sunday: '0 - 24',
        category: 'Groceries',
        partner_id: 4
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
        partner_id: 1
      },
    ]);

    const inventory = await Inventory.bulkCreate([
      {
        name:  'Shin Ramen',
        category: 'food',
        price: 12,
        in_stock: true,
        store_id: 1
      },
      {
        name:  'Twinkies',
        category: 'food',
        price: .50,
        in_stock: true,
        store_id: 1
      },
      {
        name:  'Hagan Daas',
        category: 'food',
        price: 6,
        in_stock: true,
        store_id: 1
      },
      {
        name:  'Toothbrush',
        category: 'personal_care',
        price: 2,
        in_stock: true,
        store_id: 1
      },
      {
        name:  'Gatorade',
        category: 'food',
        price: 1.50,
        in_stock: true,
        store_id: 1
      },
      {
        name:  'Toliet Paper',
        category: 'household',
        price: 1.50,
        in_stock: true,
        store_id: 1
      },
      {
        name:  'Toothpaste',
        category: 'personal_care',
        price: 3,
        in_stock: true,
        store_id: 1
      },
      {
        name:  'USB_C Charger',
        category: 'electronics',
        price: 3,
        in_stock: true,
        store_id: 1
      },
      {
        name:  'Hammer',
        category: 'hardware',
        price: 10,
        in_stock: true,
        store_id: 2
      },
      {
        name:  'Nails',
        category: 'hardware',
        price: 4,
        in_stock: true,
        store_id: 2
      },
      {
        name:  'Lightbulb',
        category: 'household',
        price: 3,
        in_stock: true,
        store_id: 1
      },
      {
        name:  'Headphones',
        category: 'electronics',
        price: 3,
        in_stock: true,
        store_id: 1
      },
      {
        name:  'Shin Ramen',
        category: 'food',
        price: 12,
        in_stock: true,
        store_id: 3
      },
      {
        name:  'Twinkies',
        category: 'food',
        price: .50,
        in_stock: true,
        store_id: 3
      },
      {
        name:  'Hagan Daas',
        category: 'food',
        price: 6,
        in_stock: true,
        store_id: 3
      },
      {
        name:  'Toothbrush',
        category: 'personal_care',
        price: 2,
        in_stock: true,
        store_id: 3
      },
      {
        name:  'Gatorade',
        category: 'food',
        price: 1.50,
        in_stock: true,
        store_id: 3
      },
      {
        name:  'Toliet Paper',
        category: 'household',
        price: 1.50,
        in_stock: true,
        store_id: 3
      },
      {
        name:  'Toothpaste',
        category: 'personal_care',
        price: 3,
        in_stock: true,
        store_id: 3
      },
      {
        name:  'USB_C Charger',
        category: 'electronics',
        price: 3,
        in_stock: true,
        store_id: 3
      },
      {
        name:  'Lightbulb',
        category: 'household',
        price: 3,
        in_stock: false,
        store_id: 3
      },
      {
        name:  'Headphones',
        category: 'electronics',
        price: 3,
        in_stock: true,
        store_id: 3
      },
      {
        name:  'Shin Ramen',
        category: 'food',
        price: 12,
        in_stock: true,
        store_id: 4
      },
      {
        name:  'Twinkies',
        category: 'food',
        price: .50,
        in_stock: true,
        store_id: 4
      },
      {
        name:  'Hagan Daas',
        category: 'food',
        price: 6,
        in_stock: false,
        store_id: 4
      },
      {
        name:  'Toothbrush',
        category: 'personal_care',
        price: 2,
        in_stock: true,
        store_id: 4
      },
      {
        name:  'Gatorade',
        category: 'food',
        price: 1.50,
        in_stock: true,
        store_id: 4
      },
      {
        name:  'Toliet Paper',
        category: 'household',
        price: 1.50,
        in_stock: true,
        store_id: 4
      },
      {
        name:  'Toothpaste',
        category: 'personal_care',
        price: 3,
        in_stock: false,
        store_id: 4
      },
      {
        name:  'USB_C Charger',
        category: 'electronics',
        price: 3,
        in_stock: true,
        store_id: 4
      },
      {
        name:  'Lightbulb',
        category: 'household',
        price: 3,
        in_stock: true,
        store_id: 4
      },
      {
        name:  'Headphones',
        category: 'electronics',
        price: 3,
        in_stock: true,
        store_id: 3
      },
      {
        name:  'Shin Ramen',
        category: 'food',
        price: 12,
        in_stock: true,
        store_id: 5
      },
      {
        name:  'Twinkies',
        category: 'food',
        price: .50,
        in_stock: true,
        store_id: 5
      },
      {
        name:  'Hagan Daas',
        category: 'food',
        price: 6,
        in_stock: true,
        store_id: 5
      },
      {
        name:  'Toothbrush',
        category: 'personal_care',
        price: 2,
        in_stock: true,
        store_id: 3
      },
      {
        name:  'Gatorade',
        category: 'food',
        price: 1.50,
        in_stock: false,
        store_id: 5
      },
      {
        name:  'Toliet Paper',
        category: 'household',
        price: 1.50,
        in_stock: true,
        store_id: 5
      },
      {
        name:  'Toothpaste',
        category: 'personal_care',
        price: 3,
        in_stock: false,
        store_id: 5
      },
      {
        name:  'USB_C Charger',
        category: 'electronics',
        price: 3,
        in_stock: true,
        store_id: 5
      },
      {
        name:  'Lightbulb',
        category: 'household',
        price: 3,
        in_stock: true,
        store_id: 5
      },
      {
        name:  'Headphones',
        category: 'electronics',
        price: 3,
        in_stock: true,
        store_id: 5
      },
    ])
  } catch (e) {
    console.log(e);
  }
};

seeds();