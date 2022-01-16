import React from 'react';
import './style.css';
import './testimonials.css';

const Testimonials = () => {
  const reviewsArray = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit.',
  ];
  const reviews = reviewsArray.map((item, idx) => {
    return (
      <div id={idx} className="review_text">
        {item}
      </div>
    );
  });

  return (
    <div>
      {' '}
      <div className="hero-image-reviews"></div>
      <div className="body-div">
        <div>{reviews}</div>
      </div>
    </div>
  );
};

export default Testimonials;
