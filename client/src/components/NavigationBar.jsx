import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import JwwLogo from '../assets/logo.png';
import { useState } from 'react';

const NavigationBar = () => {
  /*this function will toggle the menu in mobile mode without needing to set a state
   This function must be included in the onClick for each menu item to the menu closes after the click.JwwLogo
  */
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
            width="160"
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
              <Link to="/" class="btnclr" onClick={toggleBurgerMenu}>
                Home
              </Link>
            </button>
          </div>
          <div class="navbar-item">
            <button>
              <Link to="/about" class="btnclr" onClick={toggleBurgerMenu}>
                About
              </Link>
            </button>
          </div>
          <div class="navbar-item">
            <button>
              <Link to="/portfolio" class="btnclr" onClick={toggleBurgerMenu}>
                Gallery
              </Link>
            </button>
          </div>
          <div class="navbar-item">
            <button>
              <Link to="/testimonials" class="btnclr" onClick={toggleBurgerMenu}>
                Reviews
              </Link>
            </button>
          </div>
          <div class="navbar-item">
            <button>
              <Link to="/contact" class="btnclr" onClick={toggleBurgerMenu}>
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
