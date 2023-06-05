const User = require("../models/User");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { fullName, email, pwd } = req.body;
  if (!email || !pwd || !fullName)
    return res
      .status(400)
      .json({ message: "Email and password are required." });

  // check for duplicate usernames in the db
  const duplicate = await User.findOne({ email }).exec();
  if (duplicate) return res.sendStatus(409); //Conflict

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(pwd, 10);

    //create and store the new user
    const result = await User.create({
      fullName,
      email,
      password: hashedPwd,
    });
    console.log(result);

    res.status(201).json({ success: `New user created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };
