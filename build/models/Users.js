"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    roles: {
        User: {
            type: Number,
            default: 2001,
        },
        Editor: Number,
        Admin: Number,
    },
    password: {
        type: String,
        required: true,
    },
    refreshToken: String,
});
module.exports = mongoose.model("User", userSchema);
//# sourceMappingURL=Users.js.map