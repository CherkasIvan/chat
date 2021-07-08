import React from 'react';
import {Link} from 'react-router-dom';

import {Input} from "./MainPageStyled";
import './MainPage.scss'

const MainPage = () => {

  return (
    <div>
      <header className="container">
        <div className="header__container">
          <Link to='index.html' class="header__logo">Movie App</Link>
          <form>
            <Input type="text" className="header__search" placeholder="Search"/>
          </form>
        </div>
      </header>
      <div className="container">
        <div className="movies"></div>
      </div>
    </div>
  );
};

export default MainPage;


// const API_KEY = '9bd3e478-5b46-4c5e-8fc9-c53ac8c7107c'
// const API_URL_TOP_100 = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1'
// const API_URL_SEARCH = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword='
//
// getMovies(API_URL_TOP_100)
//
// async function getMovies(url) {
//   const response = await fetch(url, {
//     headers: {
//       "Content-Type": "application/json",
//       "X-API-KEY": API_KEY,
//     }
//   })
//   const respData = await response.json()
//   showMovies(respData)
// }
//
// function getClassByRate(vote) {
//   if (vote > 7) {
//     return 'green'
//   } else if (vote > 5) {
//     return 'orange'
//   } else if (vote < 5) {
//     return 'red'
//   }
//   return 'expectation'
// }
//
// function showMovies(data) {
//   const moviesEl = document.querySelector('.movies')
//
//   document.querySelector('.movies').innerHTML = ''
//
//   data.films.forEach(movie => {
//     const movieEl = document.createElement('div')
//     movieEl.classList.add('movie')
//     movieEl.innerHTML =
//       `<div class="movie__cover-inner">
//         <img
//           src="${movie.posterUrlPreview}"
//           alt="${movie.nameRu}" class="movie__cover">
//         <div class="movie__cover--darkened"></div>
//       </div>
//       <div class="movie__info">
//         <div class="movie__title">${movie.nameRu}</div>
//         <div class="movie__category">${movie.genres.map(genre => ` ${genre.genre}`)}</div>
//         ${movie.rating && (`
//         <div class="movie__average movie__average--${getClassByRate(movie.rating)}">${movie.rating}</div>
//         `)
//       }
//       </div>`
//     moviesEl.appendChild(movieEl)
//   })
// }
//
// const form = document.querySelector('form')
// const search = document.querySelector('.header__search')
//
// form.addEventListener('submit', (e) => {
//   const apiSearchUrl = `${API_URL_SEARCH}${search.value}`
//   e.preventDefault()
//
//   if (search.value) {
//     getMovies(apiSearchUrl)
//     search.value = ''
//   }
// })