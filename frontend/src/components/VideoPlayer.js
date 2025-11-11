import React from 'react';

const VideoPlayer = ({ dubbed_url, english_text, translated_text, target_lang }) => {
  if (!dubbed_url) return null;

  // Map lang code to name
  const langName = {
    hi: 'Hindi',
    ta: 'Tamil',
    te: 'Telugu',
    kn: 'Kannada', 
    ml: 'Malayalam'
  }[target_lang] || 'Unknown';

  const videoSrc = `http://localhost:5000${dubbed_url}`;

  return (
    <div className="video-player">
      <div className="text-section">
        <div className="text-block">
          <h3>Original (English)</h3>
          <p className="transcript">{english_text}</p>
        </div>

        <div className="text-block">
          <h3>Translated ({langName})</h3>
          <p className="transcript">{translated_text}</p>
        </div>
      </div>

      <div className="video-section">
        <video
          controls
          src={videoSrc}
          width="100%"
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>

        <div className="download-btn">
          <a href={videoSrc} download>
            Download Dubbed Video ({langName})
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;