import React from 'react';

function MovieList({ movies }) {
  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <p>Year: {movie.year}</p>
          <p>Genre: {movie.genre}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
