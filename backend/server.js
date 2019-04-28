const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const jwt = require('express-jwt');
const flash = require('connect-flash');
const Consumer = require('./users/controller/consumerAuth');
const Partner = require('./users/controller/partnerAuth');

const jwtSecret = process.env.TOKEN_SECRET || 'securesecret';

const app = express()
app.use(cors());
app.use(flash());
app.use(bodyParser.json());
app.use(logger('dev'));

const PORT = process.env.PORT || 3001

app.get('/',
  jwt({ jwtSecret }),
  (req, res) => {
    res.json({
      message: `Hello ${req.user.username}!`,
    });
  }
);

app.get('consumer/auth/login', (req, res) => {
  Consumer.renderLogin();
}); 

app.post('consumer/auth/login', (req, res) => {
  Consumer.handleLogin();
}); 

app.get('consumer/auth/register', (req, res) => {
  Consumer.renderRegister();
}); 

app.post('consumer/auth/register', (req, res) => {
  Consumer.handleRegister();
}); 

app.get('partner/auth/login', (req, res) => {
  Partner.renderLogin();
}); 

app.post('partner/auth/login', (req, res) => {
  Partner.handleLogin();
}); 

app.get('partner/auth/register', (req, res) => {
  Partner.renderRegister();
}); 

app.post('partner/auth/register', (req, res) => {
  Partner.handleRegister();
}); 

app.get('/', (req, res) => {
  res.json({msg: 'it works'});
});

app.listen(PORT, () => {
  console.log('The server is listening on port: ', PORT);
});