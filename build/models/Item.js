"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itemSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    missing: {
        type: Boolean,
        default: true,
    },
    category: {
        type: String,
        required: true,
    },
    itemImg: {
        type: String,
    },
    createdAt: {
        type: String,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});
module.exports = mongoose.model("Item", itemSchema);
//# sourceMappingURL=Item.js.map