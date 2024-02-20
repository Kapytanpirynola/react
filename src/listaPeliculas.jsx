import React from "react";
import Movie from './Movies';

function MovieList ({movies}) {
    return (
        <div>
        {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
        ))}
        </div>
    );
}

export default MovieList;