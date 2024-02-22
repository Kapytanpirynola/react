import React from "react";


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