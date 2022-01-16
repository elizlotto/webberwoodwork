import React from 'react';
import './style.css';
import ImageDisplayer from './ImageDisplayer';

const Portfolio = (props) => {
  return <div className="body-div">{<ImageDisplayer images={props.imagesArray} />}</div>;
};

export default Portfolio;
