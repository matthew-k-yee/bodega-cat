const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
require('dotenv').config()
const axios = require('axios')
const jwt = require('express-jwt');
const flash = require('connect-flash');
const consumer = require('./users/controller/consumerAuth');
const partner = require('./users/controller/partnerAuth');

const secret = process.env.TOKEN_SECRET || 'securesecret';

const { Consumer, Partner, Store, Inventory } = require('./models');

const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;

const apiSecret = process.env.GOOGLE_API_KEY;
// console.log(secret)
const app = express();
// const stripe = require("stripe")(keySecret);

app.set("view engine", "pug");
app.use(require("body-parser").urlencoded({extended: false}));

app.use(cors());
app.use(flash());
app.use(bodyParser.json());
app.use(logger('dev'));

const PORT = process.env.PORT || 3001

app.get('/',
  jwt({ secret }),
  (req, res) => {
    res.json({
      message: `Hello ${req.user.username}!`,
    });
  }
);

app.get('/consumer/auth/login', (req, res) => {
  consumer.renderLogin();
}); 

app.post('/consumer/auth/login', (req, res) => {
  consumer.handleLogin();
}); 

app.get('/consumer/auth/register', (req, res) => {
  consumer.renderRegister();
}); 

app.post('/consumer/auth/register', (req, res) => {
  consumer.handleRegister();
}); 

app.get('/partner/auth/login', (req, res) => {
  partner.renderLogin();
}); 

app.post('/partner/auth/login', (req, res) => {
  partner.handleLogin();
}); 

app.get('/partner/auth/register', (req, res) => {
  partner.renderRegister();
}); 

app.post('/partner/auth/register', (req, res) => {
  partner.handleRegister();
}); 

app.get('/', (req, res) => {
  res.json({msg: 'it works'});
  })
   
// app.get('/', (req, res) =>
//   res.render("index.pug", {keyPublishable}));

app.get('/maps/:fromaddress/:destinationaddress', async (req, res) => {
  try {
    const fromaddress = req.params.fromaddress;
    const destaddress = req.params.destinationaddress
    const resp = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${fromaddress}+NY&destinations=${destaddress}+NY&mode=walking&language=en-EN&key=${apiSecret}`)
    res.json(resp.data)
    } catch (e) {
      console.log(e)
    }
  }
)

app.get('/consumers', async (req, res) => {
  try {
    const users = await Consumer.findAll();
    res.json({ users });
  } catch(e) {
    console.log(e);
  }
}); 

app.get('/consumers/:id/', async (req, res) => {
  try {
    const user = await Consumer.findByPk(req.params.id);
    res.json({user});
  } catch(e) {
    console.log(e);
  }
});

app.post('/consumers', async (req, res) => {
  try {
    Consumer.create(req.body);
    res.json({
      message: `User with name ${req.body.name} created!`
    });
  } catch(e) {
    console.error(e);
  }
});

app.delete('/consumers/:id', async (req, res) => {
  try {
    const queryItem = Consumer.findByPk(req.params.id);
    res.json({message: 'item deleted', item: queryItem});
  } catch(e) {
    console.error(e);
  }
});

app.get('/stores', async (req, res) => {
  try {
    const stores = await Store.findAll();
    res.json({stores});
  } catch(e) {
    console.log(e);
  }
});

app.get('/stores/:id/inventory', async (req, res) => {
  try {
    const store = await Store.findByPk(req.params.id);
    // console.log(store.id)
    // debugger
    const inventory = await Inventory.findAll( {
      where: {
        store_id: 1
      }
    })
    // debugger
    // const allInventory = await Store.findByPk(req.params.id, {
    //   include: [{
    //     model: Inventory, 
    //     attributes: ['id', 'name', 'category', 'price', 'in_stock']
    //   }]
    // })
    res.json({inventory});
  } catch(e) {
    console.log(e);
  }
});


app.post('/stores', async (req, res) => {
  try {
    const store = Store.create(req.body);
    res.json({store});
  } catch(e) {
    console.log(e);
  }
});

app.delete('/stores/:id', async (req, res) => {
  try {
    const queryItem = Store.findByPk(req.params.id);
    res.json({message: 'item deleted', item: queryItem});
  } catch(e) {
    console.error(e);
  }
});

app.get('/inventory', async (req, res) => {
  const items = await Inventory.findAll();
  res.json({items});
});

app.get('/inventory/:id', async (req, res) => {
  try {
    const item = await Inventory.findByPk(req.params.id);
    res.json({item});
  } catch(e) {
    console.log(e);
  }
});

app.post('/inventory', async (req, res) => {
  try {
    const item = Inventory.create(req.body);
    res.json({item});
  } catch(e) {
    console.error(e);
  }
});

app.delete('/inventory/:id', async (req, res) => {
  try {
    const queryItem = Inventory.findByPk(req.params.id);
    res.json({message: 'item deleted', item: queryItem});
  } catch(e) {
    console.error(e);
  }
});

app.get('/partners', async (req, res) => {
  try {
    const partners = Partner.findAll();
    res.json({partner});
  } catch(e) {
    console.log(e);
  }
});

app.get('/partners/:id', async (req, res) => {
  try {
    const partner = Partner.findByPk(req.params.id);
    res.json({partner});
  } catch(e) {
    console.log(e);
  }
});

app.delete('/partners/:id', async (req, res) => {
  try {
    const queryItem = Partner.findByPk(req.params.id);
    res.json({message: 'item deleted', item: queryItem});
  } catch(e) {
    console.error(e);
  }
});


app.listen(PORT, () => {
<<<<<<< HEAD
  console.log(`Express server listening on port ${PORT}`);
});
=======
  console.log('The server is listening on port: ', PORT);
});
>>>>>>> d8649edc0f9db289a1a50b6ee06216e3ce0c0617
