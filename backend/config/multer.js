import multer from "multer";
import path from "path";
import fs from "fs";
const uploadDir = "./uploads/";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, uploadDir);
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const fileExtension = path.extname(file.originalname);
    const safeFilename = file.originalname
      .replace(fileExtension, "")
      .replace(/[^a-zA-Z0-9]/g, "_");
    callback(null, `${safeFilename}-${uniqueSuffix}${fileExtension}`);
  },
});
const fileFilter = (req, file, callback) => {
  const allowedFileTypes = /mp4|gif|mkv|avi|mov/; 
  const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedFileTypes.test(file.mimetype);

  if (extname && mimetype) {
    callback(null, true);
  } else {
    callback(new Error("Only video files are allowed"), false);
  }
};
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 20 * 1024 * 1024 }
});

export default upload;
