import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadLine = () => {
    const [articles, setArticles] = useState([])
    useEffect(()=>{
        const url = 'https://newsapi.org/v2/everything?q=bd&from=2022-02-03&sortBy=publishedAt&apiKey=a4f2166c177745178cde4cddc328a135';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setArticles(data.articles))
    },[])
    return (
        <div>
            <h1>Total Articles : {articles.length}</h1>
            {
                articles.map(article=><News></News>)
            }
        </div>
    );
};

export default TopHeadLine;