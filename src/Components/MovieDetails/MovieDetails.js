import React from 'react';
import './MovieDetails.css'

const MovieDetails = (props) => {
    const { movie } = props
    const splitDate = movie.release_date.split('-')
    const newDate = splitDate[1] + '-' + splitDate[2] + '-' + splitDate[0]
    return  (
        <div className="movie-card-info" >
            <button onClick={() => props.goToMainView()}>Go Back!</button>
            <img src={movie.poster_path}></img>
            <img src={movie.backdrop_path}></img>
            <h2>{movie.title}</h2>
            <p>Rating: {movie.average_rating.toFixed(1)}</p>
            <p>Release Date: {newDate}</p>
        </div>
    )
}

export default MovieDetails;
