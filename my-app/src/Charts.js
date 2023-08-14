import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import fetchBalance from './fetchBalance';

const Charts = () => {
  const [balances, setBalances] = useState([]);

  useEffect(() => {
    fetchBalance().then(data => setBalances(data));
  }, []);

  const data = {
    labels: balances.map(balance => balance.date),
    datasets: [
      {
        label: 'Portfolio Balance',
        data: balances.map(balance => balance.amount),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div>
      <h2>Portfolio Balance Over Time</h2>
      <Line data={data} />
    </div>
  );
}

export default Charts;