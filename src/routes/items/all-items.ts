import express, { Router } from "express";
import { handleAllItems } from "../../controllers/itemsController";

const router: Router = express.Router();

router.post("/", handleAllItems);

export default router;
