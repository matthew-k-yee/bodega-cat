const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { User, Store, Inventory } = require('./models');

const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.json({msg: 'it works'})
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ users });
  } catch(e) {
    console.log(e);
  }
}); 

app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json({user});
  } catch(e) {
    console.log(e);
  }
});

app.post('/users', async (req, res) => {
  try {
    User.create(req.body);
    res.json({
      message: `User with name ${req.body.name} created!`
    });
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

app.get('/stores/:id', async (req, res) => {
  try {
    const store = await Store.findByPk(req.params.id);
    res.json({store});
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

app.get('/inventory', async (req, res) => {
  const items = await Inventory.findAll();
  res.json({items});
});

app.get('/inventory/:id', async (req, res) => {
  try {
    const item = await Inventory.findByPk(req.params.id);
    consoel
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
    
  } catch(e) {
    console.error(e);
  }
});

app.listen(PORT, () => {
  console.log('The server is listening on port: ', PORT);
});