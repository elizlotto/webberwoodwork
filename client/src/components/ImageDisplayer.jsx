import React from 'react';
import './ImageDisplayer.css';
import Gallery from 'react-grid-gallery';
import photos from './photos.js';

const ImageDisplayer = () => {
  return (
    <div>
      <Gallery images={photos} />
    </div>
  );
};

export default ImageDisplayer;
