const Consumer = require('../model/consumer');
const token = require('../services/token');

const renderRegister = (req, res) => {
  res.render('auth/register', { messages: req.flash('error') });
};

const handleRegister = async (req, res) => {
  try {
    // save inputted user info
    const newUser = await Consumer.create(req.body);
    // remove user's password
    delete newUser.password_digest;
    const userToken = await token.create(newUser);
    // send token to client
    return res.json({ userToken });
  } catch (err) {
    req.flash('error', 'username unavailable');
    res.redirect('/auth/register');
  }
};

const renderLogin = (req, res) => {
  res.render('auth/register', { messages: req.flash('error') });
};

const handleLogin = async (req, res) => {
  try {
    // wait for verification
    const userInfo = await Consumer.login(req.body);
    // remove password from grabbed user
    delete userInfo.password_digest;
    // create token for already existing user
    const userToken = await token.create(userInfo);
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
