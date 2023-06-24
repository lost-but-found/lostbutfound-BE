"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const itemsController_1 = require("../../controllers/itemsController");
const router = express_1.default.Router();
router.post("/", itemsController_1.handleAllItems);
exports.default = router;
//# sourceMappingURL=all-items.js.map