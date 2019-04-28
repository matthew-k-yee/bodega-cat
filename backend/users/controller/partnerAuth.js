const Partner = require('../model/partner');
const token = require('../services/token');

const renderRegister = (req, res) => {
  res.render('/partner/auth/register', { messages: req.flash('error') });
};

const handleRegister = async (req, res) => {
  try {
    // save inputted user info
    const newUser = await Partner.save(req.body);
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
  res.render('/partner/auth/register', { messages: req.flash('error') });
};

const handleLogin = async (req, res) => {
  try {
    // wait for verification
    const userInfo = await Partner.login(req.body);
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
