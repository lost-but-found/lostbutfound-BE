"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
router.post("/", loginController.handleLogin);
module.exports = router;
//# sourceMappingURL=login.js.map