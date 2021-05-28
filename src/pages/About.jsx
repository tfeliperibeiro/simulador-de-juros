import React from 'react';

import Logo from '../assets/about.png';
import '../css/about.css';

function About() {
  return (
    <div className="container-sobre">
      <div className="about-fess">
        <h2>Simulação de Juros compostos com aportes.</h2>
        <p>
          Fórmula dos Juros Compostos com Aporte Mensal A fórmula de juros
          compostos com aporte mensal é um pouco mais complicada. Nesse caso, o
          uso de uma ferramenta (como calculadora financeira, Excel ou mesmo uma
          calculadora de juros na internet) pode facilitar a sua vida. Veja qual
          é a fórmula dos juros compostos com aporte mensal:
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
