
import { useEffect, useState } from 'react';
import './App.css';
import Header from './Componants/Header/Header';
import News from './Componants/News/News';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([])
  // useEffect(() => {
  //   const url = 'https://newsapi.org/v2/everything?q=Bangladesh&from=2022-02-04&sortBy=publishedAt&apiKey=a4f2166c177745178cde4cddc328a135';
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => setArticles(data.articles))
  // }, [])
  useEffect(() => {
    const url = 'https://newsapi.org/v2/everything?q=Bangladesh&from=2022-02-04&sortBy=publishedAt&apiKey=a4f2166c177745178cde4cddc328a135';
    axios(url)
      .then(data => setArticles(data.data.articles))
  }, [])
  return (
    <div className="App">
      <Header></Header>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
        {
          articles.map(article => <News article={article}></News>)
        }
      </div>
    </div>
  );
}

export default App;
