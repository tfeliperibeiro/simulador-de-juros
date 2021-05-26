import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../css/header.css';

function Header() {
  return (
    <>
      <header className="container-logo">
        <Link to="/">
          <img src={Logo} alt="Logo do sistema" />
        </Link>
        <div className="nav-links">
          <Link to="/about">Como funciona?</Link>
        </div>
      </header>
    </>
  );
}

export default Header;
