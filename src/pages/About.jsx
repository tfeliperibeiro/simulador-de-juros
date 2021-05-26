import React from 'react';

import Logo from '../assets/about.png';
import '../css/about.css';

function About() {
  return (
    <div className="container-sobre">
      <div className="about-fess">
        <h2>O que são juros compostos com aportes?</h2>
        <p>
          Como dito, são juros calculados sobre juros, gerando aumento no
          rendimento de forma significativa. Juros é um conceito já conhecido
          por todos. Na escola, aprendemos o termo nas aulas de matemática.
          Quando crescemos, nos deparamos com juros do cartão de crédito, nas
          compras parceladas, nos financiamentos e empréstimos. Por isso, muitas
          pessoas pensam que juros são ruins. São responsáveis por aumentar o
          tamanho de uma dívida e é um dos gatilhos para a chamada “bola de
          neve”, que tira o sono de muita gente.
        </p>
        <p className="text-formula">Veja abaixo a fórmula para calcular os juros:</p>
        <ul className="list-calculo">
          <li>M = montante (resultado)</li>
          <li>C = capital inicial</li>
          <li>i = taxa de juros aplicada</li>
          <li>t = tempo (duração do investimento)</li>
        </ul>
      </div>
      <div className="container-img-about">
        <img src={Logo} alt="Imagem de mulher pensando" />
      </div>
    </div>
  );
}

export default About;
