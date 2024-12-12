import {v2 as cloudinary} from "cloudinary"
import fs from 'fs/promises';
export const videoAdd = async(req,res)=>{
    console.log(req.body);
      try {
        const video = req.file;
        if (!video) {
          return res.status(400).json({ success: false, message: "No video file provided" });
        }
        const result = await cloudinary.uploader.upload(video.path, {
          resource_type: "video",
        });
        await fs.unlink(video.path);
        res.status(200).json({
          success: true,
          message: "Video uploaded successfully",
          videoUrl: result.secure_url,
        });
      } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({
          success: false,
          message: "Failed to upload video",
          error: error.message,
        });
      }
    };
export const videodown = async(req,res)=>{
    
}