import React from 'react';
import { Link } from 'react-router-dom';


const NavigationBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Gallery</Link>
      <Link to="/testimonials">Customer Testimonials</Link>
      <Link to="/contact">Contact Form</Link>
    </nav>
  );
};

export default NavigationBar;
