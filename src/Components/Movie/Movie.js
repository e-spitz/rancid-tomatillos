import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'
import { NavLink } from 'react-router-dom'

const Movie = ({id, poster, title, avgRating, releaseDate, getMovieInfo, getMovieTrailer}) => {
    return  (
      <NavLink to={`/movies/${id}`}>
          <img src={poster} key={id} id={id} className='movie-poster'/>
        </NavLink>
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

// <div className="movie-card" onClick={() => {
//   getMovieInfo(id);
//   getMovieTrailer(id);
// }}>
// <div className='movie-card'>
//     <img className='movie-poster' src={poster}></img>
// </div>
