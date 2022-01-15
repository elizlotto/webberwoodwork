import React from 'react';
import './style.css';
import ImageDisplayer from './ImageDisplayer';

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

const Portfolio = () => {
  return <div className="body-div">{<ImageDisplayer images={imagesArray} />}</div>;
};

export default Portfolio;
