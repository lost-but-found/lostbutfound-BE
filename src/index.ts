require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");

import sgMail from "@sendgrid/mail";

import verifyJWT from "./middleware/verifyJWT";
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");

// Routes imports
import missingItemRouter from "./routes/items/add-missing-item";
import foundItemRouter from "./routes/items/add-found-item";
import registerRouter from "./routes/register";
import loginRouter from "./routes/login";
import allItemsRouter from "./routes/items/all-items";
import resendOTPRouter from "./routes/resend-otp";
import verifyOTPRouter from "./routes/verify-otp";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/all-items", allItemsRouter);
app.use("/resend-otp", resendOTPRouter);
app.use("/verify-otp", verifyOTPRouter);
app.use("/refresh", require("./routes/refresh"));

app.use(verifyJWT);
app.use("/missing-item", missingItemRouter);
app.use("/found-item", foundItemRouter);
app.use("/items-by-user", require("./routes/items/items-by-user"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
