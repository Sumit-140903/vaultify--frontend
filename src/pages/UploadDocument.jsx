import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import '../styles/UploadDocument.css';

function UploadDocument() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [hash, setHash] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title) {
      alert('Please select a file and enter title');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Content = reader.result.split(',')[1];

      try {
        setStatus('⏳ Uploading...');
        const token = localStorage.getItem('token');

        const response = await fetch('http://localhost:8000/api/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title,
            contentBase64: base64Content,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          setHash(result.hash);
          setStatus('✅ Document uploaded and verified on blockchain!');
        } else {
          setStatus(`❌ Upload failed: ${result.error}`);
        }
      } catch (error) {
        console.error('Upload error:', error);
        setStatus('❌ Upload error');
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <PageWrapper>
      <div className="upload-container">
        <h2>Upload New Document</h2>
        <form onSubmit={handleUpload}>
          <input
            type="text"
            placeholder="Document Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="upload-box">
            <p>{file ? file.name : 'Click to select a file'}</p>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.png,.jpg,.jpeg"
              hidden
            />
          </label>

          <button type="submit">Upload</button>
        </form>

        {status && (
          <div className="hash-section">
            <p><strong>Status:</strong> {status}</p>
            {hash && <p><strong>Blockchain Hash:</strong> {hash}</p>}
          </div>
        )}
      </div>
    </PageWrapper>
  );
}

export default UploadDocument;
