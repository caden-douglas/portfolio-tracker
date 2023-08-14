import React, { useState, useEffect } from 'react';
import fetchNews from './fetchNews';

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews().then(data => {
      setNewsData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {newsData.map((news, index) => (
        <div key={index}>
          <h2>{news.title}</h2>
          <p>{news.description}</p>
          <a href={news.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
}

export default News;