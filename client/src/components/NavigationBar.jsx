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
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <button>
              <Link to="/about">About</Link>
            </button>
          </div>
          <div class="navbar-item">
            <button>
              <Link to="/portfolio">Gallery</Link>
            </button>
          </div>
          <div class="navbar-item">
            <button>
              <Link to="/testimonials">Reviews</Link>
            </button>
          </div>
          <div class="navbar-item">
            <button>
              <Link to="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>

      <div class="navbar-end"></div>
    </nav>
  );
};

export default NavigationBar;
