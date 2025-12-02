import React, { useState } from "react";
import axios from "axios";

const UploadForm = ({ backendBase = "http://localhost:5000", onSuccess, onError, onUploadStart }) => {
  const [file, setFile] = useState(null);
  const [language, setLanguage] = useState("hi");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const LANG_OPTIONS = [
    { name: "Assamese", code: "as" },
    { name: "Bengali", code: "bn" },
    { name: "Bodo", code: "brx" },
    { name: "Dogri", code: "doi" },
    { name: "Gujarati", code: "gu" },
    { name: "Hindi", code: "hi" },
    { name: "Kannada", code: "kn" },
    { name: "Kashmiri", code: "ks" },
    { name: "Konkani", code: "kok" },
    { name: "Maithili", code: "mai" },
    { name: "Malayalam", code: "ml" },
    { name: "Manipuri", code: "mni" },
    { name: "Marathi", code: "mr" },
    { name: "Nepali", code: "ne" },
    { name: "Odia", code: "or" },
    { name: "Punjabi", code: "pa" },
    { name: "Sanskrit", code: "sa" },
    { name: "Santali", code: "sat" },
    { name: "Sindhi", code: "sd" },
    { name: "Tamil", code: "ta" },
    { name: "Telugu", code: "te" },
    { name: "Urdu", code: "ur" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return setError("Please upload an MP4 file.");
    setError("");
    setLoading(true);
    onUploadStart?.();

    const formData = new FormData();
    formData.append("video", file);
    formData.append("target_lang", language); // matches backend expectation

    try {
      const res = await axios.post(`${backendBase}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 0, // long uploads / processing — disable timeout
      });
      onSuccess?.(res.data);
    } catch (err) {
      const msg = err.response?.data?.error || err.message;
      setError(msg);
      onError?.(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form" style={{ maxWidth: 640 }}>
      <div className="form-group">
        <label>Upload MP4</label>
        <input
          type="file"
          accept="video/mp4"
          onChange={(e) => { setFile(e.target.files?.[0] || null); }}
          disabled={loading}
        />
      </div>

      <div className="form-group">
        <label>Target language</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          disabled={loading}
          style={{ padding: 8, width: "100%" }}
        >
          {LANG_OPTIONS.map((l) => (
            <option key={l.code} value={l.code}>{l.name}</option>
          ))}
        </select>
      </div>

      <button type="submit" disabled={loading || !file} style={{ padding: "10px 14px" }}>
        {loading ? "Uploading & processing…" : "Upload & Dub"}
      </button>

      {error && <div style={{ color: "crimson", marginTop: 8 }}>{error}</div>}
    </form>
  );
};

export default UploadForm;
