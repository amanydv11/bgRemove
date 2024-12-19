import express from 'express'
import { verifyToken } from '../verfiyUser.js';
import upload from '../middlewares/multer.js'
import { videoAdd, videodown } from '../controller/uploadController.js';
const videoRouter = express.Router();
videoRouter.post('/upload',upload.single("video"),videoAdd)
videoRouter.post('/status',verifyToken,videodown)

export default videoRouter