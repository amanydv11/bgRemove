import {v2 as cloudinary} from "cloudinary"
import uploadModel from '../models/uploadModel.js'

export const videoAdd = async(req,res,next)=>{
    console.log(req.body);
try {
    const videoFile = req.file;
    if (!videoFile) {
        return res.status(400).json({ success: false, message: "No video file uploaded" });
      }
      const result = await cloudinary.uploader.upload(videoFile.path, {
        resource_type: "video", 
      });
      const videoUrl = result.secure_url;
      return res.status(200).json({
        success: true,
        message: "Video uploaded successfully",
        videoUrl,
      });
} catch (error) {
    console.log(error);
    
    res.json({success:false, message:error.message})
}
}
export const videodown = async(req,res,next)=>{
    
}