// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const API_KEY = 'n08L8ORwffNZscGJYo0iz0LqLGZ1TUWo'
const url = `${BASE_URL}?q=cars&api-key=${API_KEY}`;

fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
    }

    const snippet = article.snippet;
    document.getElementById('article-snippet').innerText = snippet;

    const link = article.web_url
    const linkFormat = `<a href="${link}" target="_blank">Full article</a>`
    document.getElementById('article-link').innerHTML = linkFormat
    
    const section = article.section_name
    const sectionFormat = `Section: ${section}`
    document.getElementById('section').innerText = sectionFormat

    const author = article.byline.original
    const location = article.news_desk
    const authorAndLoc = `${author} in ${location}`
    document.getElementById('author').innerText = authorAndLoc

  });
