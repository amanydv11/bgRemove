import express from 'express'
import upload from '../config/multer';
import { verifyToken } from '../verfiyUser.js';
import { videoAdd, videodown } from '../controller/uploadController.js';
const videoRouter = express.Router();

videoRouter.post('/add',upload.single("file"),videoAdd);
videoRouter.post('/download',verifyToken,videodown)

export default videoRouter