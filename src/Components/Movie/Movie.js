import React from 'react';
import './Movie.css'

const Movie = ({id, poster, title, avgRating, releaseDate, getMovieInfo, getMovieTrailer}) => {
    return  (
        <div className="movie-card" onClick={() => {
          getMovieInfo(id);
          getMovieTrailer(id);
        }}>
            <img className='movie-poster' src={poster}></img>
        </div>
    )
}

export default Movie;
