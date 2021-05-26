import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../assets/financiamento-colaborativo.svg';
import '../css/header.css';

function Header() {
  return (
    <>
      <header className="container-logo">
        <Link to="/">
          <img src={Logo} alt="Logo do sistema" />
        </Link>
        <Link to="/about">Sobre</Link>
      </header>
    </>
  );
}

export default Header;
