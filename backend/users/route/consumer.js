const consumerRouter = require('express').Router();
const consumerAuth = require('../controller/consumerAuth');

consumerRouter.route('/login').get(consumerAuth.renderLogin);
consumerRouter.route('/register').get(consumerAuth.renderRegister);
consumerRouter.route('/login').post(consumerAuth.handleLogin);
consumerRouter.route('/register').post(consumerAuth.handleRegister);

module.exports = consumerRouter;