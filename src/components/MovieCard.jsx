import React from "react";

const MovieCard = ({ movie }) => {

  return (

    <div className="movie">
      <div>
        <p>Release Year: {movie.Year}</p>
      </div>
      <div>
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : '//placehold.it/350x400/111/ae6b63'}
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>

  );
}

export default MovieCard;