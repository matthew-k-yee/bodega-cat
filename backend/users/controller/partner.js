const Partner = require('../model/partner');
// Grab the user by their email
const getUser = async (req, res, next) => {
  try {
    const user = await Partner.findUser(req.params.user.email);
    res.locals.data = user;
    next();
  } catch (err) {
    throw (err);
  }
};

module.exports = getUser;
