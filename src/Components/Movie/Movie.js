import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

const Movie = ({id, poster, title, avgRating, releaseDate, getMovieInfo, getMovieTrailer}) => {
    return  (
        <div className="movie-card" onClick={() => {
          getMovieInfo(id);
          getMovieTrailer(id);
        }}>
            <img src={poster}></img>
            <h2>{title}</h2>
            <p>Rating: {avgRating}</p>
            <p>Release Date: {releaseDate}</p>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    avgRating: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    getMovieInfo: PropTypes.func.isRequired,
    getMovieTrailer: PropTypes.func.isRequired
}

export default Movie;
