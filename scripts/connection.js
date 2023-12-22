// document.addEventListener('DOMContentLoaded', function () {
//     const apiKey = 'HAMVMCY-MGCMGN8-NG6FEXB-C0QSH45';
//     const apiUrl = 'https://api.kinopoisk.dev/v1.4/movie?year=2023&genres.name=криминал';

//     fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         renderMovies(data);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//         renderError();
//     });
// });
const headers = {
    "X-API-KEY": "HAMVMCY-MGCMGN8-NG6FEXB-C0QSH45"
};
  
  async function getMoviesByGenre(genres, page = 1, limit = 1) {
    try {
      const response = await fetch('https://api.kinopoisk.dev/v1.4/movie?' + new URLSearchParams({
        "genres.name": genres,
        "limit": limit,
        "page": page,
      }), {
        headers: headers
      });
  
      if (!response.ok) {
        renderError();
      }
  
      const movies = await response.json();
      //renderMovies(movies.docs);
      return movies.docs;
  
    } catch (e) {
       
    }
  }
  
  getMoviesByGenre("комедия").then(movies => {
    console.log(movies);
  });

function renderError() {
    const errorPlaceholder = document.createElement('p');
    errorPlaceholder.textContent = '⚠ Что-то пошло не так';
    document.body.appendChild(errorPlaceholder);
}

function renderMovies(data) {
    const moviesList = document.getElementById('movies-list');

    data.forEach(movie => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${movie.name}</strong><p>${movie.description}</p>`;
        moviesList.appendChild(listItem);
    });
}