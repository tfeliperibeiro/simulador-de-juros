import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../assets/home.png';

import '../css/home.css';

function Home() {
  return (
    <div>
      <section className="container-main">
        <h1 className="text-initial">
          A melhor calculadora de financiamento de imóveis!
          <Link className="btn" to="/simulation">
            Iniciar
          </Link>
          <p className="text-footer">Rápido e Fácil</p>
        </h1>
        <img className="img" src={Icon} alt="Icone tela principal" />
      </section>
    </div>
  );
}

export default Home;
