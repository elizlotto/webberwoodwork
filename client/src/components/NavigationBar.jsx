import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import JwwLogo from '../assets/logo.png';

const NavigationBar = () => {
  function toggleBurgerMenu() {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }

  return (
    <section className="hero is-primary is-medium">
      <div className="hero-head">
        <nav id="navbar" role="navigation" className="navbar" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to="/">
              <img
                className="logo"
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
              data-target="navbarMenuHeroA"
              onClick={toggleBurgerMenu}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarMenuHeroA" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <Link to="/" className="btnclr" onClick={toggleBurgerMenu}>
                  <button>Home</button>
                </Link>
              </div>
              <div className="navbar-item">
                <Link to="/about" className="btnclr" onClick={toggleBurgerMenu}>
                  <button>About</button>
                </Link>
              </div>
              <div className="navbar-item">
                <Link to="/portfolio" className="btnclr" onClick={toggleBurgerMenu}>
                  <button>Gallery</button>
                </Link>
              </div>
              <div className="navbar-item">
                <Link to="/testimonials" className="btnclr" onClick={toggleBurgerMenu}>
                  <button>Reviews</button>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="navbar-item">
            <Link to="/contact" className="btnclr" onClick={toggleBurgerMenu}>
              <button>Contact</button>
            </Link>
          </div> */}

          <div className="navbar-end"></div>
        </nav>
      </div>
    </section>
  );
};

export default NavigationBar;
