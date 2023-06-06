"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");
router.post("/", registerController.handleNewUser);
module.exports = router;
//# sourceMappingURL=register.js.map