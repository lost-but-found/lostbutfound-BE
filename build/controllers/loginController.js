"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const handleLogin = async (req, res) => {
    const { email, pwd } = req.body;
    if (!email || !pwd)
        return res
            .status(400)
            .json({ message: "Email and password are required." });
    const foundUser = await User.findOne({ email }).exec();
    console.log(foundUser);
    if (!foundUser)
        return res.sendStatus(401); //Unauthorized
    // evaluate password
    const match = await bcrypt.compare(pwd, foundUser.password);
    if (match) {
        // create JWTs
        const accessToken = jwt.sign({ email: foundUser.email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "300s",
        });
        const refreshToken = jwt.sign({ email: foundUser.email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "5d" });
        // Saving refreshToken with current user
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        console.log(result);
        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            sameSite: "None",
            //   secure: true,
            maxAge: 24 * 60 * 60 * 1000,
        });
        res.json({ accessToken });
    }
    else {
        res.sendStatus(401);
    }
};
module.exports = { handleLogin };
//# sourceMappingURL=loginController.js.map