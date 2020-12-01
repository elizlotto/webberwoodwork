import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import JwwLogo from '../assets/logo.png';

const NavigationBar = () => {
  return (
    <nav id="navbar" role="navigation" class="navbar" aria-label="main navigation">
      <div class="navbar-brand">
        <Link to="/">
          <img
            class="logo"
            src={JwwLogo}
            width="130"
            alt="John Webber Woodwork Logo, click for Home"
          ></img>
        </Link>
      </div>
      <div class="navbar-start">
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
          <Link to="/contact">Contact Me</Link>
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
