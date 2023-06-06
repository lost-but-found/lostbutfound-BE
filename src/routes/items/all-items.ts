const express = require("express");
const router = express.Router();
const itemsController = require("../../controllers/itemsController");

router.post("/", itemsController.handleAllItems);

module.exports = router;
