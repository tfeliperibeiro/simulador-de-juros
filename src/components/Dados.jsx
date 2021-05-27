import React from 'react';

import PropTypes from 'prop-types';

const Dados = (props) => {
  const {
    value: {
      entrada, juros, meses, parcelas,
    },
  } = props;
  return (
    <div>
      <p>{entrada}</p>
      <p>{juros}</p>
      <p>{meses}</p>
      <p>{parcelas}</p>
    </div>
  );
};

Dados.propTypes = {
  value: PropTypes.shape({
    entrada: PropTypes.number,
    juros: PropTypes.number,
    meses: PropTypes.number,
    parcelas: PropTypes.number,
  }).isRequired,
};

export default Dados;
