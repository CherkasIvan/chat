import React from 'react';

import './MainPage.scss'
import {apiKeys} from "../../constants/ApiMovie";
import {Header} from "../../modules";

const MainPage = ({children}) => {
  getMovies(apiKeys.API_URL_TOP_100)

  async function getMovies(url) {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKeys.API_KEY,
      }
    })
    const respData = await response.json()
    showMovies(respData)
  }

  function getClassByRate(vote) {
    if (vote > 7) {
      return 'green'
    } else if (vote > 5) {
      return 'orange'
    } else if (vote < 5) {
      return 'red'
    }
    return 'expectation'
  }

  function showMovies(data) {
    const moviesEl =  document.querySelector('.movies')

    document.querySelector('.movies').innerHTML = ''

    data.films.forEach(movie => {
      const movieEl = document.createElement('div')
      movieEl.classList.add('movie')
      movieEl.innerHTML =
        `<div class="movie__cover-inner">
        <img
          src="${movie.posterUrlPreview}"
          alt="${movie.nameRu}" class="movie__cover">
        <div class="movie__cover--darkened"></div>
      </div>
      <div class="movie__info">
        <div class="movie__title">${movie.nameRu}</div>
        <div class="movie__category">${movie.genres.map(genre => ` ${genre.genre}`)}</div>
        ${movie.rating && (`
        <div class="movie__average movie__average--${getClassByRate(movie.rating)}">${movie.rating}</div>
        `)
        }
      </div>`
      moviesEl.appendChild(movieEl)
    })
  }

  return (
    <div>
      <div className="container-movie">
        <div className="movies"></div>
      </div>
      <div className="movies__chat"></div>
      <Header>{children}</Header>

    </div>
  );
};

export default MainPage;