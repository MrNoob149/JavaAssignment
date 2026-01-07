'use strict';
// the line below is for question 1
const TV = document.querySelector('#tvForm')
TV.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const code = document.querySelector('#query').value;
    try {                                               // error handling: try/catch/finally
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${code}`);    // starting data download, fetch returns a promise which contains an object of type 'response'
        const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
        console.log(jsonData);    // log the result to the console
    } catch (error) {
        console.log(error.message);
    }
});

// the line below is for question 3
'use strict';

const TV = document.querySelector('#tvForm');
const resultsDiv = document.querySelector('#results');

TV.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const code = document.querySelector('#query').value;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${code}`);
        const jsonData = await response.json();

        // clear old results
        resultsDiv.innerHTML = "";

        // loop through each show
        jsonData.forEach(tvShow => {
            const article = document.createElement('article');


            const h2 = document.createElement('h2');
            h2.textContent = tvShow.show.name;
            article.appendChild(h2);


            const link = document.createElement('a');
            link.href = tvShow.show.url;
            link.target = "_blank";
            link.textContent = "Details";
            article.appendChild(link);


            if (tvShow.show.image?.medium) {
                const img = document.createElement('img');
                img.src = tvShow.show.image.medium;
                img.alt = tvShow.show.name;
                article.appendChild(img);
            }


            const summaryDiv = document.createElement('div');
            summaryDiv.innerHTML = tvShow.show.summary || "No summary available.";
            article.appendChild(summaryDiv);
            resultsDiv.appendChild(article);
        });

    } catch (error) {
        console.log(error.message);
    }
});