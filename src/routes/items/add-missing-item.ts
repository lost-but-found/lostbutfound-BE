const express = require("express");
const router = express.Router();
const itemsController = require("../../controllers/itemsController");
const upload = require("../../middleware/multer");

router.post("/", upload.single("itemImg"), itemsController.addMissingItem);

module.exports = router;
