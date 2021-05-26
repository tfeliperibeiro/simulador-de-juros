import React, { useState } from 'react';

import '../css/simulation.css';

function Simulation() {
  const [empresa, setEmpresa] = useState('');
  const [entrada, setEntrada] = useState('');
  const [juros, setJuros] = useState('');
  const [parcelas, setParcelas] = useState('');
  const [meses, setMeses] = useState('');

  const handleEmpresa = ({ target }) => setEmpresa(target.value);
  const handleEntrada = ({ target }) => setEntrada(target.value);
  const handleJuros = ({ target }) => setJuros(target.value);
  const handleParcelas = ({ target }) => setParcelas(target.value);
  const handleMeses = ({ target }) => setMeses(target.value);

  return (
    <main className="container-simulation">
      <h2>Digite os dados para fazermos a simulação.</h2>
      <form className="container-input">
        <input
          type="text"
          placeholder="Nome da empresa"
          value={empresa}
          onChange={handleEmpresa}
        />
        <input
          type="number"
          placeholder="Entrada"
          value={entrada}
          onChange={handleEntrada}
        />
        <input
          type="number"
          placeholder="Juros %"
          value={juros}
          onChange={handleJuros}
        />
        <input
          type="number"
          placeholder="Parcela"
          value={parcelas}
          onChange={handleParcelas}
        />
        <input
          type="number"
          placeholder="Meses"
          value={meses}
          onChange={handleMeses}
        />
        <button className="btn btn-register" type="button">
          Calcular
        </button>
      </form>
    </main>
  );
}

export default Simulation;
