import Web3 from 'web3';

const fetchBalance = async () => {
  try {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      const balanceWei = await web3.eth.getBalance(accounts[0]);
      const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
      return balanceEth;
    } else {
      console.log('Please install MetaMask.');
      return;
    }
  } catch (error) {
    console.error(`Error fetching balance: ${error}`);
  }
}

export default fetchBalance;