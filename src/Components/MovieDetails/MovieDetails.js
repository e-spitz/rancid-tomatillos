import React from 'react';
import './MovieDetails.css'
import PropTypes from 'prop-types';

const MovieDetails = ({movie, goToMainView, trailer}) => {
    const splitDate = movie.release_date.split('-')
    const newDate = splitDate[1] + '-' + splitDate[2] + '-' + splitDate[0]
    const videoLink = `https://www.youtube.com/embed/${trailer.key}`

    return  (
        <div className="movie-card-info" >
            <button onClick={() => goToMainView()}>Go Back!</button>
            <img src={movie.poster_path}></img>
            <img src={movie.backdrop_path}></img>
            <h2>{movie.title}</h2>
            <p>Rating: {movie.average_rating.toFixed(1)}</p>
            <p>Release Date: {newDate}</p>
            <iframe
              title='Embedded youtube'
              className='video'
              width='650'
              height='380'
              src={videoLink}
              frameBorder='0'
              allowFullScreen
            ></iframe>
        </div>
    )
}

MovieDetails.propTypes = {
    movie: PropTypes.object,
    goToMainView: PropTypes.func,
    trailer: PropTypes.object
}

export default MovieDetails;
