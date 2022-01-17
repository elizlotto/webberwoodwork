import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import JwwLogo from '../assets/logo.png';

const NavigationBar = () => {
  return (
    <section className="hero is-primary is-medium">
      <div className="hero-head">
        <Link to="/">
          <img
            className="logo"
            src={JwwLogo}
            width="300"
            alt="John Webber Woodwork Logo, click for Home"
          ></img>
        </Link>
        <h2>Brooklyn, New York</h2>
        <div className="header-bottom"></div>
      </div>
    </section>
  );
};

export default NavigationBar;
