import Web3 from 'web3';
import React from 'react';
import Dashboard from './Dashboard';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1>My App</h1>
      <Dashboard />
    </div>
  );
}


let web3;

if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    window.ethereum.enable();
} else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
} else {
    window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
}

export default App;