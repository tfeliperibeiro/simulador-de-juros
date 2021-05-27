import React, { useState } from 'react';

import '../css/start.css';

function ValueRegister() {
  const [entrance, setEntrance] = useState('');
  const [fees, setFees] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(0);

  const handleEntrance = ({ target }) => setEntrance(target.value);
  const handleFees = ({ target }) => setFees(target.value);
  const handleYears = ({ target }) => setYears(target.value);

  const handleResult = () => {
    const totalJurosCompostos = entrance * ((1 + fees / 100)) ** years;
    setResult(totalJurosCompostos.toFixed(2));
  };

  return (
    <main className="container-simulation">
      <h2>Que bom te ver por aqui &#128512; </h2>
      <h3>Para começar, insira os valores para a simulação!</h3>
      <form className="container-input">
        <input
          type="number"
          placeholder="Qual será o valor inicial?"
          value={entrance}
          onChange={handleEntrance}
        />
        <input
          type="number"
          placeholder="Qual a taxa de Juros?"
          value={fees}
          onChange={handleFees}
          min="0"
          step="0.1"
        />
        <input
          type="number"
          placeholder="Período em meses?"
          value={years}
          onChange={handleYears}
        />
        <div className="container-btn">
          <button className="btn btn-register" type="button" onClick={handleResult}>
            Calcular
          </button>
        </div>
      </form>
      <div>
        <h1 className="result">{`Montante total: ${result}`}</h1>
      </div>
    </main>
  );
}

export default ValueRegister;
