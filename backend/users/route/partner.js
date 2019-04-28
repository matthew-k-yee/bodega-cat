const partnerRouter = require('express').Router();
const partnerAuth = require('../controller/consumerAuth');

partnerRouter.route('/login').get(partnerAuth.renderLogin);
partnerRouter.route('/register').get(partnerAuth.renderRegister);
partnerRouter.route('/login').post(partnerAuth.handleLogin);
partnerRouter.route('/register').post(partnerAuth.handleRegister);

module.exports = partnerRouter;