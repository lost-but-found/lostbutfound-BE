"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const itemsController = require("../../controllers/itemsController");
router.post("/", itemsController.addFoundItem);
module.exports = router;
//# sourceMappingURL=add-found-item.js.map