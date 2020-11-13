import React from 'react';
import { Link } from 'react-router-dom';


const NavigationBar = () => {
  return (
    <nav>
      <div class="columns">
        <div class="column"></div>
        <div class="column">
          <button><Link to="/">Home</Link></button>
      <button><Link to="/about">About</Link></button>
      <button><Link to="/portfolio">Gallery</Link></button>
      <button><Link to="/testimonials">Customer Testimonials</Link></button>
          <button><Link to="/contact">Contact Form</Link></button>
      </div>
        <div class="column"></div>

  
      </div>
     
    </nav>
  );
};

export default NavigationBar;
