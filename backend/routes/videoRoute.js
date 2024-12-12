import express from 'express'
import { verifyToken } from '../verfiyUser.js';
import upload from '../middlewares/multer.js'
import { videoAdd, videodown } from '../controller/uploadController.js';
import multer from 'multer';
const videoRouter = express.Router();
videoRouter.post('/add',upload.single("video"),videoAdd)
videoRouter.post('/download',verifyToken,videodown)

export default videoRouter