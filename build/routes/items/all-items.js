"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const itemsController = require("../../controllers/itemsController");
router.post("/", itemsController.handleAllItems);
module.exports = router;
//# sourceMappingURL=all-items.js.map