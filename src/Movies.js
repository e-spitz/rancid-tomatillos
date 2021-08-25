import React from 'react';
import Movie from './Movie';
import './Movies.css'

const Movies = (props) => {
    const  movieCards = props.movies.map(movie => {
        return (
            <Movie 
                poster={movie.poster_path}
                title={movie.title}
                avgRating={movie.average_rating.toFixed(1)}
                releaseDate={movie.release_date}
                id={movie.id}
                key={movie.id}
            />
        )
    })

    return (
        <div className='movies-container'>
          {movieCards}
        </div>
      )
}

export default Movies;