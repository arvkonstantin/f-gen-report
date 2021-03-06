import React from 'react';
import ReactDOM from 'react-dom/client';
import FieldsInfo from './FieldsInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));

const onFileSelect = (e) => {
  const formData = new FormData();
  formData.append('zip', e.target.files[0]);
  // noinspection JSIgnoredPromiseFromCall
  fetch('/api/upload', { method: 'POST', body: formData })
    .then((response) => response.blob())
    .then((blob) => URL.createObjectURL(blob))
    .then((url) => {
      window.open(url, '_blank');
      URL.revokeObjectURL(url);
    });
};

root.render(
  <React.StrictMode>
    <FieldsInfo />
    <input type="file" onChange={onFileSelect} />
  </React.StrictMode>,
);
