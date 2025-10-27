import { useEffect, useState } from "react";
import { getNewsByCountry } from "../services/newsAPI";
import "./NewsCard.css";

export default function NewsCard({ countryCode }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const articles = await getNewsByCountry(countryCode);
      setNews(articles);
      setLoading(false);
    };

    if (countryCode) {
      fetchNews();
    }
  }, [countryCode]);

  if (loading) {
    return <div className="news-loading">Loading news...</div>;
  }

  if (news.length === 0) {
    return <div className="news-error">No news available for this country</div>;
  }

  return (
    <div className="news-section">
      <h3>📰 Latest News</h3>
      <div className="news-grid">
        {news.map((article, index) => (
          <div key={index} className="news-item">
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} />
            )}
            <div className="news-content">
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-link"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
