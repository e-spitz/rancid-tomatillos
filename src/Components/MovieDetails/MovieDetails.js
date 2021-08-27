import React from 'react';
import './MovieDetails.css'

const MovieDetails = (props) => {
    let { movie } = props
    console.log(props.movieInfo)
    return  (
        <div className="movie-card-info" >
            <button onClick={() => props.goToMainView()}>Go Back!</button>
            <img src={movie.poster_path}></img>
            <img src={movie.backdrop_path}></img>
            <h2>{movie.title}</h2>
            <p>Rating: {movie.average_rating}</p>
            <p>Release Date: {movie.release_date}</p>
        </div>
    )
}

export default MovieDetails;