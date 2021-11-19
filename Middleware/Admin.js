const User = require('../models/UserModel');

const Admin = async (req, res, next) => {
  try {
    const { userId } = req;
    const user = await User.findById(userId);
    if (!user.isAdmin) {
      return res.status(401).json({ message: 'Not an Admin.' });
    }

    return next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = Admin;
