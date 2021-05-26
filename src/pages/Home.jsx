import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../assets/4136942-removebg-preview.png';

import '../css/home.css';

function Home() {
  return (
    <div>
      <section className="container-main">
        <h1 className="text-initial">
          O melhor sistema de simulação de financiamento!
          <Link className="btn" to="/simulation">
            Fazer simulação
          </Link>
        </h1>
        <div className="container-icon" />
        <img className="img" src={Icon} alt="Icone tela principal" />
      </section>
    </div>
  );
}

export default Home;
