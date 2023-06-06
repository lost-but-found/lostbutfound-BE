const express = require("express");
const router = express.Router();
const itemsController = require("../controllers/itemsController");

router.post("/", itemsController.addFoundItem);

module.exports = router;