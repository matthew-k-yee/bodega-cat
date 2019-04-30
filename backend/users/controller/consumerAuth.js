const Consumer  = require('../model/consumer');
const token = require('../services/token');

const renderRegister = (req, res) => {
  res.render('/consumer/auth/register', { messages: req.flash('error') });
};

const handleRegister = async (req, res) => {
  try {
    // save inputted user info
    debugger;
    const newUser = await Consumer.save(req.body);
    debugger;
    // remove user's password
    delete newUser.password_digest;
    const userToken = await token.create({ newUser });
    // send token to client
    return res.json({ userToken });
  } catch (err) {
    throw (err);
  }
};

const renderLogin = (req, res) => {
  res.render('/consumer/auth/login', { messages: req.flash('error') });
};

const handleLogin = async (req, res) => {
  try {
    // wait for verification
    const userInfo = await Consumer.login(req.body);
    // remove password from grabbed user
    delete userInfo.password_digest;
    // create token for already existing user
    const userToken = await token.create({ userInfo });
    // send token wrapped in json object to client
    return res.json({ userToken });
  } catch (err) {
    throw (err);
  }
};

module.exports = {
  renderRegister,
  handleRegister,
  renderLogin,
  handleLogin
}
