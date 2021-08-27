import React from 'react';
import './Movie.css'

const Movie = ({id, poster, title, avgRating, releaseDate, backgorund, getMovieInfo}) => {
    return  (
        <div className="movie-card" onClick={() => getMovieInfo(id)}>
            <img src={poster}></img>
            <h2>{title}</h2>
            <p>Rating: {avgRating}</p>
            <p>Release Date: {releaseDate}</p>
        </div>
    )
}

export default Movie;
