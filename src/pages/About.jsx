import React from 'react';

import Logo from '../assets/about.png';
import '../css/about.css';

function About() {
  return (
    <div className="container-sobre">
      <div className="about-fess">
        <h2>Simulação de Juros compostos com aportes.</h2>
        <p>
          Com essa ferramenta você consegue literalmente visualizar o poder dos
          juros compostos e simular diferentes cenários, com diferentes
          rentabilidades mensais e diferente valores de aportes recorrentes.
          Você poderá usar esta ferramenta para simular financimantos de
          imóveis.
        </p>
        <p className="text-formula">
          Veja abaixo a fórmula para calcular os juros:
        </p>
        <ul className="list-calculo">
          <li>FV = valor futuro (resultado)</li>
          <li>PMT = valor dos aportes mensais</li>
          <li>n = número de meses da aplicação</li>
          <li>i = taxa fixa. (juros)</li>
        </ul>
      </div>
      <div className="container-img-about">
        <img src={Logo} alt="Imagem de mulher pensando" />
      </div>
    </div>
  );
}

export default About;
