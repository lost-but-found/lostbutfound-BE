"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const path = require("path");
// Set storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, "../uploads/");
        cb(null, uploadDir); // Specify the directory where you want to store the uploaded files
    },
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}-${file.originalname}`;
        cb(null, fileName);
    },
});
// Configure multer with the storage
const upload = multer({ storage });
module.exports = upload;
//# sourceMappingURL=multer.js.map