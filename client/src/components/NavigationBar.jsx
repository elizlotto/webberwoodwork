import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import JwwLogo from '../assets/logo.png';
import { useState } from 'react';

const NavigationBar = () => {
  function toggleBurgerMenu() {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }

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
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasic"
          onClick={toggleBurgerMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasic" className="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <button>
              <Link to="/" onClick={toggleBurgerMenu}>
                Home
              </Link>
            </button>
          </div>
          <div class="navbar-item">
            <button>
              <Link to="/about" onClick={toggleBurgerMenu}>
                About
              </Link>
            </button>
          </div>
          <div class="navbar-item">
            <button>
              <Link to="/portfolio" onClick={toggleBurgerMenu}>
                Gallery
              </Link>
            </button>
          </div>
          <div class="navbar-item">
            <button>
              <Link to="/testimonials" onClick={toggleBurgerMenu}>
                Reviews
              </Link>
            </button>
          </div>
          <div class="navbar-item">
            <button>
              <Link to="/contact" onClick={toggleBurgerMenu}>
                Contact Me
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div class="navbar-end"></div>
    </nav>
  );
};

export default NavigationBar;
