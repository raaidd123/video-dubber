import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = ({ onSuccess, onError, onUploadStart }) => {
  const [file, setFile] = useState(null);
  const [targetLang, setTargetLang] = useState('hi');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError('Please select a video file');
      return;
    }

    // Reset & notify parent
    setError('');
    setLoading(true);
    onUploadStart?.();  // Trigger loading spinner in App.js

    const formData = new FormData();
    formData.append('video', file);
    formData.append('target_lang', targetLang);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 300000, // 5 minutes (for long processing)
        onUploadProgress: (progressEvent) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          console.log(`Upload: ${percent}%`);
          // Optional: Add progress bar here later
        },
      });

      onSuccess(response.data);
    } catch (err) {
      const message = err.response?.data?.error || err.message || 'Upload failed';
      setError(message);
      onError?.(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form">
      <div className="form-group">
        <label htmlFor="video">Upload MP4 Video</label>
        <input
          id="video"
          type="file"
          accept="video/mp4"
          onChange={(e) => setFile(e.target.files[0])}
          required
          disabled={loading}
        />
      </div>

      <div className="form-group">
        <label htmlFor="lang">Target Language</label>
        <select
          id="lang"
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
          disabled={loading}
        >
          <option value="hi">Hindi</option>
          <option value="ta">Tamil</option>
          <option value="te">Telugu</option>
          <option value="kn">Kannada</option>
          <option value="ml">Malayalam</option>
        </select>
      </div>

      <button type="submit" disabled={loading || !file} className="submit-btn">
        {loading ? (
          <>
            <span className="spinner-small"></span> Dubbing in progress…
          </>
        ) : (
          'Dub Video'
        )}
      </button>

      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default UploadForm;