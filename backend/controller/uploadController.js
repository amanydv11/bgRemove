import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";
import axios from "axios";
import path from "path";

const RUNWAY_API_URL = "https://api.runwayml.com/v1/models/background-removal/run"; // Example endpoint
const RUNWAY_API_KEY = "key_cb67c0d9834921e4f5c2699434162f87ced8df2ee5cbf5929fdda32b32902afd5d01d02fd208a3a8b803d973a0c042e906a4bb5d82da60f458abc07b6ca4b787"; // Replace with your actual API key

const ensureDirectoryExists = async (dir) => {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (error) {
    console.error(error.message);
  }
};

const processVideoWithRunwayML = async (inputPath) => {
  try {
    const fileBuffer = await fs.readFile(inputPath);

    const response = await axios.post(
      RUNWAY_API_URL,
      { file: fileBuffer.toString("base64") }, // Send the video file as Base64
      {
        headers: {
          Authorization: `Bearer ${RUNWAY_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // RunwayML returns a URL of the processed video
    const processedVideoUrl = response.data.output;
    return processedVideoUrl;
  } catch (error) {
    console.error("RunwayML error:", error.response?.data || error.message);
    throw new Error("Failed to process video with RunwayML");
  }
};

export const videoAdd = async (req, res, next) => {
  try {
    const video = req.file;
    if (!video) {
      return res.status(400).json({ success: false, message: "No video file provided" });
    }

    const inputPath = path.resolve(video.path);
    const outputDir = path.resolve("processed");
    await ensureDirectoryExists(outputDir);

    // Use RunwayML for background removal
    const processedVideoUrl = await processVideoWithRunwayML(inputPath);

    // Upload the processed video to Cloudinary
    const result = await cloudinary.uploader.upload(processedVideoUrl, {
      resource_type: "video",
    });

    // Clean up temporary files
    await fs.unlink(inputPath);

    res.status(200).json({
      success: true,
      message: "Video uploaded and processed successfully",
      videoUrl: result.secure_url,
    });

    console.log("Processed Video URL:", result.secure_url);
  } catch (error) {
    next(error);
  }
};

export const videodown = async (req, res, next) => {
  try {
    const videoUrl = req.query.url;
    if (!videoUrl) {
      return next(errorHandler(400, "No video URL provided"));
    }

    res.status(200).json({
      success: true,
      message: "Video ready for download",
      videoUrl,
    });
  } catch (error) {
    next(error);
  }
};
