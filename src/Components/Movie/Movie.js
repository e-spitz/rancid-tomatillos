import React from 'react';
import './Movie.css'

const Movie = (props) => {
    return  (
        <div className="movie-card">
            <img src={props.poster}></img>
            <h2>{props.title}</h2>
            <p>Rating: {props.avgRating}</p>
            <p>Release Date: {props.releaseDate}</p>
        </div>
    )
}

export default Movie;
