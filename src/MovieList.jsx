// Movie.js
import React from 'react';

function Movie({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Year: {movie.year}</p>
      <p>Genre: {movie.genre}</p>
    </div>
  );
}

export default Movie;
