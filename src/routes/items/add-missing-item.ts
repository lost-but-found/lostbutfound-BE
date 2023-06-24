import express, { Router } from "express";
import { addMissingItem } from "../../controllers/itemsController";
const upload = require("../../middleware/multer");

const router: Router = express.Router();

router.post("/", upload.single("itemImg"), addMissingItem);

export default router;
