import React from 'react';
import Portfolio from './Portfolio';
import './style.css';

const Home = () => {
  function importAll(r) {
    return r.keys().map(r);
  }

  const imagesObj = importAll(require.context('../assets/hero-images', true, /\.(png|jpe?g|svg)$/));
  //the above returns an array of objects with images on .default

  const createImagesArray = (img) => {
    const valuesToArray = [];
    img.forEach((obj) => {
      valuesToArray.push(obj.default);
    });
    return valuesToArray;
  };

  const imagesArray = createImagesArray(imagesObj);

  return <Portfolio imagesArray={imagesArray} />;
};
export default Home;
