import React from 'react';
import { Link } from 'react-router-dom';
//import './NavigationBar.css';
import JwwLogo from '../assets/logo.png';

const NavigationBar = () => {
  return (
    <nav id="navbar" role="navigation" class="navbar" aria-label="main navigation">
      <div class="columns">
        <div class="column"></div>
        <div class="navbar-brand">
          <Link to="/">
            <img class="logo" src={JwwLogo} alt="John Webber Woodwork Logo, click for Home"></img>
          </Link>
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
          </div>
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
    </nav>
  );
};

export default NavigationBar;
