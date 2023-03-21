import React, { Component, useState, useEffect } from "react";
import axios from "axios";

const URL = "https://newsapi.org/v2/everything?q=Golf&from=2023-03-14&sortBy=popularity&pageSize=3&apiKey=4d582ab6af0944268ed2816eb9865f75";

function Home() {

  const [articles, setArticles] = useState([]);;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get(URL)

    setArticles(data.articles)
  }

  {
    return (

      <div className="Home">
        <div class="grid-container">
          <div class="grid-child">
            {articles.map(article => (
              <div key={article.id}>
                <h5>{article.title}</h5>
                <p>{article.description}</p>
              </div>
            ))
            }
          </div>
          <div class="grid-child">
            <div>
              <h5>
                Weather
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;