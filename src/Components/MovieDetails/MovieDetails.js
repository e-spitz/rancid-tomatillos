import React from 'react';
import './MovieDetails.css'

const MovieDetails = ({ movie, goToMainView, trailer }) => {
    const splitDate = movie.release_date.split('-')
    const newDate = splitDate[1] + '-' + splitDate[2] + '-' + splitDate[0]
    console.log(trailer.key)
    const videoLink = `https://www.youtube.com/embed/${trailer.key}`
    console.log(videoLink)
    return  (
      <section className='movie-details' style={{ backgroundImage: `url(${movie.backdrop_path})` }}>
      <button onClick={() => goToMainView()}>&times;</button>
        <article className='movie-details-info'>
            <h2>{movie.title}</h2>
            <p>Rating: {movie.average_rating.toFixed(1)}</p>
            <p>Release Date: {newDate}</p>
            <div className='trailer-video'>
            <iframe
            title='Embedded youtube'
            className='video'
            width='250'
            height='200'
            src={videoLink}
            frameBorder='0'
            allowFullScreen
            ></iframe>
            </div>
        </article>
      </section>
    )
}

export default MovieDetails;
