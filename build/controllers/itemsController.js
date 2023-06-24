"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemsByUser = exports.addFoundItem = exports.addMissingItem = exports.handleAllItems = void 0;
const Item_1 = __importDefault(require("../models/Item"));
const User_1 = __importDefault(require("../models/User"));
const handleAllItems = async (req, res) => {
    const allItems = await Item_1.default.find();
    res.send(allItems);
};
exports.handleAllItems = handleAllItems;
const addMissingItem = async (req, res) => {
    const { title, desc, category } = req.body;
    const itemImg = req.file?.path;
    try {
        const result = await Item_1.default.create({
            title,
            description: desc,
            missing: true,
            category,
            itemImg, // Store the file path in the itemPic field
        });
        res.send({ message: "Item added!" });
        console.log(result);
    }
    catch (error) {
        res.status(500).send({ error });
        console.log(error);
    }
};
exports.addMissingItem = addMissingItem;
const addFoundItem = async (req, res) => {
    const { title, desc, category } = req.body;
    const itemImg = req.file?.path;
    try {
        const result = await Item_1.default.create({
            title,
            description: desc,
            missing: false,
            category,
            itemImg,
        });
        res.send({ message: "Item added!" });
        console.log(result);
    }
    catch (error) {
        res.send(error);
    }
};
exports.addFoundItem = addFoundItem;
const getItemsByUser = async (req, res) => {
    const { username } = req.params;
    try {
        const user = await User_1.default.findOne({ username });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const items = await Item_1.default.find({ user: user._id });
        res.json(items);
    }
    catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
};
exports.getItemsByUser = getItemsByUser;
//# sourceMappingURL=itemsController.js.map