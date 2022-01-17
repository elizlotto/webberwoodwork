import React from 'react';
import './FooterBar.css';
import { Link } from 'react-router-dom';

const FooterBar = () => {
  function toggleBurgerMenu() {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  }

  return (
    <section className="hero is-primary is-medium">
      <div className="hero-head" id="hero-head-bottom">
        <div className="footer-top"></div>
        <h2>
          <a href="tel:3574000311">
            <button className="tel-mail">(347) 400-0311</button>
          </a>{' '}
          •
          <a href="mailto:john@johnwebberwoodwork.com">
            <button className="tel-mail"> john@johnwebberwoodwork.com</button>
          </a>
        </h2>
        <nav id="navbar" role="navigation" className="navbar" aria-label="main navigation">
          <div className="navbar-brand">
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
              {/* <div className="navbar-item">
                <Link to="/testimonials" className="btnclr" onClick={toggleBurgerMenu}>
                  <button>Reviews</button>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="navbar-end"></div>
        </nav>
      </div>
    </section>
  );
};

export default FooterBar;
