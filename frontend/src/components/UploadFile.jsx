import React, { useState, useRef } from "react";
import { BsArrowBarUp } from "react-icons/bs";

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [videoURL, setVideoURL] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const url = URL.createObjectURL(selectedFile); 
      setVideoURL(url);
      setUploadProgress(0); 
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a video first!");
      return;
    }
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        alert("Upload complete!");
      }
    }, 500);
  };
  return (
    <div className="upload-file-container" style={{ textAlign: "center" }}>
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div
        className="video-container"
        style={{
          width: "500px",
          height: "280px",
          margin: "20px auto",
          backgroundColor: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: "10px",
        }}
      >
        {videoURL ? (
          <video
            src={videoURL}
            controls
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          ></video>
        ) : (
          <p style={{ color: "#fff" }}>Select a video to preview</p>
        )}
      </div>
      {uploadProgress > 0 && (
        <div
          className="progress-bar"
          style={{
            width: "500px",
            margin: "10px auto",
            height: "10px",
            backgroundColor: "#ddd",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${uploadProgress}%`,
              height: "100%",
              backgroundColor: "#4caf50",
              transition: "width 0.3s ease",
            }}
          ></div>
        </div>
      )}
      <div>
        <button
          className="upload-button"
          onClick={handleButtonClick}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <BsArrowBarUp className="icon" style={{ marginRight: "5px" }} />
          Select Video
        </button>

        <button
          className="upload-button"
          onClick={handleUpload}
          style={{
            marginTop: "10px",
            marginLeft: "10px",
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <BsArrowBarUp className="icon" style={{ marginRight: "5px" }} />
          Upload Clip
        </button>
      </div>
    </div>
  );
};

export default UploadFile;
