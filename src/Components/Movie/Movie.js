import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css'

const Movie = ({id, poster, title}) => {
    return  (
       <Link to={`/movie/${id}`}>
            <div className="movie-card">
                <img className='movie-poster' src={poster} alt={'Cover image for ' + title}></img>
            </div>
        </Link>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    avgRating: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
}

export default Movie;
