import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import JwwLogo from '../assets/logo.png';

const NavigationBar = () => {
  return (
    <nav id="navbar">
      <div class="columns">
        <div class="column"></div>
        <div class="column">
          <Link to="/">
            <img class="logo" src={JwwLogo} alt="John Webber Woodwork Logo, click for Home"></img>
          </Link>
          <button>
            <Link to="/about">About</Link>
          </button>
          <button>
            <Link to="/portfolio">Gallery</Link>
          </button>
          <button>
            <Link to="/testimonials">Customer Testimonials</Link>
          </button>
          <button>
            <Link to="/contact">Contact Form</Link>
          </button>
        </div>
        <div class="column"></div>
      </div>
    </nav>
  );
};

export default NavigationBar;
