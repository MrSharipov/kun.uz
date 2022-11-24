
const apiLink = `https://newsapi.org/v2/top-headlines?country=us&apiKey=632e1ffdb365469d8ab34ba6447aafb2`

const news_box = document.getElementById('news_box');

const getNews = () => {
    fetch(apiLink)
        .then(res => res.json())
        .then(data => showResult(data.articles));
}

const handleSearch = () => {
    const searchText = document.getElementById('searchText');
    getNewsByCategory(searchText.value);
    searchText.value = '';
}

const getNewsByCategory = (category) => {
    const apiLink = `https://newsapi.org/v2/top-headlines?country=de&category=${category}&apiKey=632e1ffdb365469d8ab34ba6447aafb2`;
    fetch(apiLink)
        .then(res => res.json())
        .then(data => showResult(data.articles));
}

const showResult = (data) => {
    let text = '';
    data.forEach(news => {
    text += `<div class="news">
                <h3>${news.title}</h3>
                <img src=${news.urlToImage} alt="rasm" />
                <p>${news.description}</p>
            </div>
        `
    });
    
    news_box.innerHTML = text;
}

getNews();