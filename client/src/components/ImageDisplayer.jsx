import React from 'react';
const { useState } = React;
import './ImageDisplayer.css';

const ImageDisplayer = () => {
  const [lightBoxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState('');

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context('../assets/hero-images', true, /\.(png|jpe?g|svg)$/));

  const imageCards = images.map((image) => (
    <img className="image-card" onClick={() => showImage(image.default)} src={image.default} />
  ));

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  const showNext = (e) => {
    e.stopPopagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };

  return (
    <>
      <div>{imageCards}</div>

      {lightBoxDisplay ? (
        <div id="lightbox" onClick={hideLightBox}>
          <button onClick={showPrev}>⭠</button>
          <img id="lightbox-img" src={imageToShow}></img>
          <button onClick={showNext}>⭢</button>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default ImageDisplayer;
