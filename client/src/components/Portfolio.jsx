import React from 'react';
import './style.css';
import ImageDisplayer from './ImageDisplayer';

const Portfolio = () => {
  return (
    <div className="body-div">
      <div id="portfolio-text">
        <h1>Portfolio</h1>
        <p>
          The work shown in this gallery represents a few examples of the types of projects we
          specialize in: reproducing Park Slope and Ditmas Park historical entrance doors; intricate
          parquet floor border patterns; kitchen and bathroom remodels; matched exterior woodwork,
          and fine interior architectural details.
        </p>
        <p>We know these houses; every day we do what others say can't be done anymore.</p>
      </div>
      <div id="gallery-div">{<ImageDisplayer />}</div>
    </div>
  );
};

export default Portfolio;
