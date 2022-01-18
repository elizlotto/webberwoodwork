import React from 'react';
const { useState } = React;
import './ImageDisplayer.css';
import Gallery from 'react-grid-gallery';
import photos from './photos.js';

const ImageDisplayer = () => {
  console.log('props:', photos);
  return (
    <div>
      <Gallery images={photos} />
    </div>
  );
};

export default ImageDisplayer;
