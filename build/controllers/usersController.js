"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = require("../models/User");
const getAllUsers = async (req, res) => {
    const allUsers = await User.find();
    res.send(allUsers);
};
module.exports = { getAllUsers };
//# sourceMappingURL=usersController.js.map