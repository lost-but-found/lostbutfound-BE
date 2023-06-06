"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Item = require("../models/Item");
const User = require("../models/User");
const handleAllItems = async (req, res) => {
    const allItems = await Item.find();
    res.send(allItems);
};
const addMissingItem = async (req, res) => {
    const { title, desc, category } = req.body;
    try {
        const result = await Item.create({
            title,
            description: desc,
            missing: true,
            category,
            itemImg: req.file.path, // Store the file path in the profilePic field
        });
        res.send({ message: "Item added!" });
        console.log(result);
    }
    catch (error) {
        res.send({ message: error });
    }
};
const addFoundItem = async (req, res) => {
    const { title, desc } = req.body;
    try {
        const result = await Item.create({
            title,
            description: desc,
            missing: false,
        });
        res.send({ message: "Item added!" });
        console.log(result);
    }
    catch (error) {
        res.send(error);
    }
};
const getItemsByUser = async (req, res) => {
    const { username } = req.params;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const items = await Item.find({ user: user._id });
        res.json(items);
    }
    catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
};
module.exports = {
    handleAllItems,
    addMissingItem,
    addFoundItem,
    getItemsByUser,
};
//# sourceMappingURL=itemsController.js.map