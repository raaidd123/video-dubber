import React from "react";

const VideoPlayer = ({ backendBase = "http://localhost:5000", dubbed_url, english_text, translated_text }) => {
  if (!dubbed_url) {
    return (
      <div style={{ padding: 20 }}>
        <p>No dubbed video yet. Upload one using the form.</p>
      </div>
    );
  }

  const src = dubbed_url.startsWith("http") ? dubbed_url : `${backendBase.replace(/\/$/, "")}${dubbed_url}`;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div>
        <video
          controls
          src={src}
          style={{ width: "100%", maxWidth: 960, borderRadius: 8 }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <a href={src} download style={{ padding: "8px 12px", background: "#2b7cff", color: "#fff", borderRadius: 6, textDecoration: "none" }}>
          Download Dubbed Video
        </a>
      </div>
    </div>
  );
};

export default VideoPlayer;
