import React, { Component } from 'react';
import './Movie.css'

const Movie = (props) => {
    return  (
        <div className="movie-card">
            <img src={props.poster_path}></img>
            <h2>{props.title}</h2>
            <p>{props.average_rating.toFixed(1)}</p>
            <p>{props.release_date}</p>
        </div>
    )
}

export default Movie;