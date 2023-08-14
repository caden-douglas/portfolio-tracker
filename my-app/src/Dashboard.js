import React from 'react';
import News from './News';
import Volatility from './Volatility';
import Balance from './Balance';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Balance />
      <News />
      <Volatility />
    </div>
  );
}

export default Dashboard;