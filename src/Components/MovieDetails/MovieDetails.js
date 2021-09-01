import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieDetails.css'

const MovieDetails = ({ movie, goToMainView, trailer }) => {
    const splitDate = movie.release_date.split('-')
    const newDate = splitDate[1] + '-' + splitDate[2] + '-' + splitDate[0]
    const videoLink = `https://www.youtube.com/embed/${trailer.key}`

    return  (
      <section className='movie-details' style={{ backgroundImage: `url(${movie.backdrop_path})` }}>
        <article className='movie-details-info'>
            <h2>{movie.title}</h2>
            <h3>"{movie.tagline}"</h3>
            <p>Avg Rating: {movie.average_rating.toFixed(1)}</p>
            <p>Release Date: {newDate}</p>
            <p>Genre: {movie.genres}</p>
            <p>Budget: {movie.budget}</p>
            <p>Revenue: {movie.revenue}</p>
            <p>Runtime: {movie.runtime} minutes</p>
            <div className='trailer-video'>
              <iframe
              title='Embedded youtube'
              className='video'
              width='450'
              height='200'
              src={videoLink}
              frameBorder='0'
              allowFullScreen
              ></iframe>
            </div>
            <Link to="/">Main View</Link>
            {/* <button onClick={() => goToMainView()}>&times;</button> */}
        </article>
      </section>
    )
}

// MovieDetails.propTypes = {
//     movie: PropTypes.object.isRequired,
//     goToMainView: PropTypes.func.isRequired,
//     // trailer: PropTypes.object.isRequired
// }

export default MovieDetails;
