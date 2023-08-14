const axios = require('axios');

const fetchNews = async () => {
  try {
    const response = await axios.get('https://gnews.io/api/v4/search?q=example&apikey=4e8597e8cf3ec14e1fb08289a56f11c5');
    if (response.data.articles) {
      return response.data.articles;
    } else {
      throw new Error('No articles found');
    }
  } catch (error) {
    console.error(`Error fetching news: ${error}`);
    return []; // Return an empty array in case of an error
  }
}

module.exports = fetchNews;