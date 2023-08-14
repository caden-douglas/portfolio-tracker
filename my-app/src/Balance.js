import React, { useState, useEffect } from 'react';
import fetchBalance from './fetchBalance';

const Balance = () => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    fetchBalance().then(balance => {
      if (balance !== undefined) {
        setBalance(balance);
      }
    });
  }, []);

  return (
    <div>
      <h2>Current Balance</h2>
      {balance !== null ? <p>{balance} ETH</p> : <p>Loading...</p>}
    </div>
  );
}

export default Balance;