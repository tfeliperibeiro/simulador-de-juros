import React from 'react';

import Logo from '../assets/about.png';
import '../css/about.css';

function About() {
  return (
    <div className="container-sobre">
      <h1>Sobre</h1>
      <img src={Logo} alt="Imagem de mulher pensando" />
    </div>
  );
}

export default About;
