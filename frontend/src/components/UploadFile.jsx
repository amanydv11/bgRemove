import React, { useState, useRef } from "react";
import { BsArrowBarUp } from "react-icons/bs";

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [videoURL, setVideoURL] = useState("");
  const fileInputRef = useRef(null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setVideoURL(URL.createObjectURL(selectedFile));
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a video first!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("video", file);
      const response = await fetch("/api/video/add", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Upload successful!");
        setFile(null);
        setVideoURL("");
        fileInputRef.current.value = "";
      } else {
        alert(`Upload failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error during upload:", error);
      alert("An error occurred during upload.");
    }
  };

  return (
    <div className="align-middle">
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div className="w-[500px] h-[280px] m-8 bg-black flex justify-center items-center overflow-hidden rounded">
        {videoURL ? (
          <video
            src={videoURL}
            controls
            className="h-full w-full object-cover"
          ></video>
        ) : (
          <p className="text-white">Select a video to preview</p>
        )}
      </div>
      <div>
        <button
          className="mt-[10px] px-3 py-3 bg-[#007bff] text-white border-none border rounded cursor-pointer inline-flex items-center"
          onClick={handleButtonClick}
        >
          <BsArrowBarUp />
          Select Video
        </button>
        <button
          className="mt-[10px] text-white border-none rounded cursor-pointer inline-flex items-center ml-[10px] px-3 py-3 bg-green-500"
          onClick={handleUpload}
        >
          <BsArrowBarUp />
          Upload Clip
        </button>
      </div>
    </div>
  );
};

export default UploadFile;
