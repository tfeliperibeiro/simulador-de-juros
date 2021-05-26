import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import '../css/start.css';

function ValueRegister() {
  const [entrance, setEntrance] = useState('');
  const [fees, setFees] = useState('');
  const [plots, setPlots] = useState('');
  const [years, setYears] = useState('');

  const handleEntrance = ({ target }) => setEntrance(target.value);
  const handleFees = ({ target }) => setFees(target.value);
  const handlePlots = ({ target }) => setPlots(target.value);
  const handleYears = ({ target }) => setYears(target.value);

  return (
    <main className="container-simulation">
      <h2>Que bom te ver por aqui &#128512; </h2>
      <h3>Para começar, cadastre os valores para simular o financiamento!</h3>
      <form className="container-input">
        <input
          type="number"
          placeholder="Entrada"
          value={entrance}
          onChange={handleEntrance}
          required
        />
        <input
          type="number"
          placeholder="Juros %"
          value={fees}
          onChange={handleFees}
          required
        />
        <input
          type="number"
          placeholder="Parcela"
          value={plots}
          onChange={handlePlots}
          required
        />
        <input
          type="number"
          placeholder="Meses"
          value={years}
          onChange={handleYears}
          required
        />
        <div className="container-btn">
          <button className="btn btn-register" type="submit">
            Cadastrar valores
          </button>
          <Link className="btn-register btn-simulation" to="simulation/">
            Ver simulações
          </Link>
        </div>
      </form>
    </main>
  );
}

export default ValueRegister;
