const User = require("../models/User");

const getAllUsers = async (req: any, res: any) => {
  const allUsers = await User.find();
  res.send(allUsers);
};

module.exports = { getAllUsers };
