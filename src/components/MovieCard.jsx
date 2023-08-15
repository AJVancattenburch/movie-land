import React from "react";

const MovieCard = ({ movie }) => {

  

  return (

    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : '//placehold.it/350x400/d88769/d88769'}
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>

  );
  // const { title, director, metascore, stars } = movie;
  // return (
  //   <div className="movie-card">
  //     <h2>{title}</h2>
  //     <div className="movie-director">
  //       Director: <em>{director}</em>
  //     </div>
  //     <div className="movie-metascore">
  //       Metascore: <strong>{metascore}</strong>
  //     </div>
  //     <h3>Actors</h3>
  //     {stars.map(star => (
  //       <div key={star} className="movie-star">
  //         {star}
  //       </div>
  //     ))}
  //   </div>
  // );
}

export default MovieCard;