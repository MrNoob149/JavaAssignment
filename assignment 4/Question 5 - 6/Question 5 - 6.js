'use strict';
// for question 5
// async function getJoke() {
//     try {
//         const response = await fetch("https://api.chucknorris.io/jokes/random");
//         const json = await response.json();
//
//         // print only the joke text
//         console.log(json.value);
//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// }
//
// getJoke();

// question 6
const jokeForm = document.querySelector('#Joke');
const resultsDiv = document.querySelector('#results');
jokeForm.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const value_from_input = document.querySelector('#query').value;
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${value_from_input}`);
        const jsonData = await response.json();

        resultsDiv.innerHTML = "";
        jsonData.result.forEach(item => {
            const article = document.createElement('article');
            article.innerHTML = `<p>${item.value}</p>`;
            resultsDiv.appendChild(article);
        });

        if (jsonData.result.length === 0) {
            resultsDiv.innerHTML = "<p>No jokes found.</p>";
        }

    } catch (error) {
        console.log(error.message);
    }
});