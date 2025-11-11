import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import VideoPlayer from './components/VideoPlayer';
import './App.css';

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSuccess = (data) => {
    setResult(data);
    setLoading(false);
    setError(null);
  };

  const handleError = (msg) => {
    setError(msg);
    setLoading(false);
  };

  const handleUploadStart = () => {
    setLoading(true);
    setError(null);
    setResult(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>English to Indian Languages Video Dubber</h1>
        <p className="subtitle">
          Hindi • Tamil • Telugu • Kannada • Malayalam
        </p>
      </header>

      <main>
        <UploadForm
          onSuccess={handleSuccess}
          onError={handleError}
          onUploadStart={handleUploadStart}
        />

        {loading && (
          <div className="status loading">
            <div className="spinner"></div>
            <p>Processing video… This may take 30-90 seconds.</p>
          </div>
        )}

        {error && (
          <div className="status error">
            <strong>Error:</strong> {error}
          </div>
        )}

        {result && !loading && (
  <div className="result-section">
    <h2>Result</h2>
    <div className="text-block">
      <h3>Original (English)</h3>
      <p>{result.english_text}</p>
    </div>
    <div className="text-block">
      <h3>Translated</h3>
      <p>{result.translated_text}</p>
    </div>
    <VideoPlayer dubbed_url={result.dubbed_url} target_lang={result.target_lang} />  {/* FIXED: Add target_lang */}
  </div>
)}
      </main>

     
    </div>
  );
}

export default App;