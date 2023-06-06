"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const verifyJWT_1 = __importDefault(require("./middleware/verifyJWT"));
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");
const PORT = process.env.PORT || 3500;
// Connect to MongoDB
connectDB();
// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);
// Cross Origin Resource Sharing
app.use(cors(corsOptions));
// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));
// built-in middleware for json
app.use(express.json());
//middleware for cookies
app.use(cookieParser());
// routes
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/all-items", require("./routes/items/all-items"));
// app.use("/refresh", require("./routes/refresh"));
// app.use("/logout", require("./routes/logout"));
app.use(verifyJWT_1.default);
app.use("/add-missing-item", require("./routes/items/add-missing-item"));
app.use("/add-found-item", require("./routes/items/add-found-item"));
app.use("/items-by-user", require("./routes/items/items-by-user"));
//app.use("/employees", require("./routes/api/employees"));
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
//# sourceMappingURL=index.js.map