import React from 'react';
import Movie from '../Movie/Movie';
import PropTypes from 'prop-types';
import './Movies.css'

const Movies = (props) => {
    const  movieCards = props.movies.map(movie => {
      const splitDate = movie.release_date.split('-')
      const newDate = splitDate[1] + '-' + splitDate[2] + '-' + splitDate[0]
        return (
            <Movie
                poster={movie.poster_path}
                background={movie.backdrop_path}
                title={movie.title}
                avgRating={movie.average_rating.toFixed(1)}
                releaseDate={newDate}
                id={movie.id}
                key={movie.id}
                getMovieInfo={props.getMovieInfo}
                getMovieTrailer={props.getMovieTrailer}
            />
        )
    })

    return (
        <div className='movies-container'>
          {movieCards}
        </div>
      )
}

Movies.propTypes = {
  getMovieInfo: PropTypes.func.isRequired,
  getMovieTrailer: PropTypes.func.isRequired
}

export default Movies;
