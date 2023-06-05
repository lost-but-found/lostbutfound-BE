const express = require("express");
const router = express.Router();
const allItemsController = require("../controllers/itemsController");

router.post("/", allItemsController.handleAllItems);

module.exports = router;
