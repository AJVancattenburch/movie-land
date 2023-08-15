import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard.jsx";

import "./App.css";
import SearchIcon from './search.svg'

const API_URL = "http://www.omdbapi.com?apikey=c41fcfc9";

const movie1 = {
  "Title": "V for Vendetta",
  "Year": "2005",
  "imdbID": "tt0434409",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_SX300.jpg"
}

const App = () => {

  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`)
    const data = await res.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('V for Vendetta');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for a movie(s)..."
          type="text"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search Icon"
          onClick={() => { }}
        />
      </div>

      {
        movies?.length > 0 ?
        (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
            )
          )}
        </div>
        )
         : 
        (
          <div className="empty">
            <h2>No movies to show</h2>
          </div>
        )
      }

    </div>
  );

}

export default App;