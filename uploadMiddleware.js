// middleware/uploadMiddleware.js
import multer from "multer";
import path from "path";

// ========================
// STORAGE CONFIGURATION
// ========================
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/"); // Folder where images will be stored
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// ========================
// FILE TYPE CHECK
// ========================
function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpg, .jpeg, .png images are allowed!"));
  }
}

// ========================
// MULTER UPLOAD INSTANCE
// ========================
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter(req, file, cb) {
    checkFileType(file, cb);
  },
});

export default upload;
