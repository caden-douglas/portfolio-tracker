import axios from 'axios';
import { std } from 'mathjs';

export const calculateVolatility = async (coinId) => {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=30`);
    const prices = response.data.prices.map(priceData => priceData[1]);
    const volatility = std(prices);
    return volatility;
  } catch (error) {
    console.error(`Error calculating volatility: ${error}`);
  }
}

export default calculateVolatility;