import React, { useState } from 'react';

import { Bar } from 'react-chartjs-2';
import Footer from '../components/Footer';
import '../css/simulation.css';

function ValueRegister() {
  const [entrance, setEntrance] = useState('');
  const [plots, setPlots] = useState('');
  const [fees, setFees] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(0);

  const handleEntrance = ({ target }) => setEntrance(target.value);
  const handlePlots = ({ target }) => setPlots(target.value);
  const handleFees = ({ target }) => setFees(target.value);
  const handleYears = ({ target }) => setYears(target.value);

  const handleResult = () => {
    const fessTotal = fees / 100;
    const finalAmount = plots * [(1 + fessTotal) ** years - 1];
    const futureValue = finalAmount / fessTotal;
    const valueFinal = Number(entrance) + Number(futureValue);
    setResult(valueFinal.toFixed(2));
  };

  return (
    <>
      <main className="container-simulation">
        <h2>Que bom te ver por aqui &#128512; </h2>
        <h3>Para começar, insira os valores para a simulação!</h3>
        <form className="container-input">
          <input
            type="number"
            placeholder="Qual será a sua entrada?"
            value={entrance}
            onChange={handleEntrance}
            required
          />
          <input
            type="number"
            placeholder="Qual será o valor da parcela?"
            value={plots}
            onChange={handlePlots}
            required
          />
          <input
            type="number"
            placeholder="Qual a taxa de Juros?"
            value={fees}
            onChange={handleFees}
            min="0"
            step="0.1"
            required
          />
          <input
            type="number"
            placeholder="Período em meses?"
            value={years}
            onChange={handleYears}
            required
          />
          <div className="container-btn">
            <button
              className="btn btn-register"
              type="button"
              onClick={handleResult}
            >
              Calcular
            </button>
          </div>
        </form>
        <div className="result-chart">
          <h4 className="result">{`Valor final do imóvel: R$ ${result}`}</h4>
          <div>
            <Bar
              data={{
                labels: ['Entrada', 'Parcelas', 'Juros', 'Período', 'Valor Final'],
                datasets: [{
                  label: 'Resultado',
                  data: [entrance, plots, fees, years, result],
                  backgroundColor: ['#0ba360'],
                }],
              }}
              options={{ keepAspectRatio: false }}
            />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default ValueRegister;
