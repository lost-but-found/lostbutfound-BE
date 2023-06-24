import User from "../models/User";
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { fullName, email, pwd, phoneNumber } = req.body;
  if (!email || !pwd || !fullName || !phoneNumber)
    return res.status(400).json({ message: "Please fill in all details" });

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
      phoneNumber,
    });
    console.log(result);

    res.status(201).json({ success: `New user created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { handleNewUser };
