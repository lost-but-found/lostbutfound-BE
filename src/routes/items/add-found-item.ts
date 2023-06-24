import express, { Router } from "express";
import { addFoundItem } from "../../controllers/itemsController";
const upload = require("../../middleware/multer");

const router: Router = express.Router();

router.post("/", upload.single("itemImg"), addFoundItem);

export default router;
