import React, { useState, useEffect } from 'react';
import { calculateVolatility } from './calculateVolatility';

const Volatility = () => {
  const [bitcoinVolatility, setBitcoinVolatility] = useState(0);
  const [ethereumVolatility, setEthereumVolatility] = useState(0);

  useEffect(() => {
    calculateVolatility('bitcoin').then(volatility => setBitcoinVolatility(volatility));
    calculateVolatility('ethereum').then(volatility => setEthereumVolatility(volatility));
  }, []);

  return (
    <div>
      <h2>Volatility</h2>
      <p>Bitcoin: {bitcoinVolatility}</p>
      <p>Ethereum: {ethereumVolatility}</p>
    </div>
  );
}

export default Volatility;