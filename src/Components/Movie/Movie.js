import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css'

const Movie = ({id, poster, title, avgRating, releaseDate, getMovieInfo, getMovieTrailer}) => {
    // console.log(id)
    return  (
        // <Link to={`/${id}`}></Link>
        //     <div className="movie-card" onClick={() => {
        //     getMovieInfo(id);
        //     getMovieTrailer(id);
        //     }}>
        //         <img className='movie-poster' src={poster}></img>
        //     </div>
        // </Link>

        <Link to={`/${id}`}>
                <img className='movie-poster' src={poster}></img>
        </Link>
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
