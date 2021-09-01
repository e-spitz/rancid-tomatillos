import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import apiCalls from '../../apiCalls'
import './MovieDetails.css'
const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/'

// const MovieDetails = ({ movie, goToMainView, trailer }) => {
class MovieDetails extends Component {
    constructor(props) {
      super(props);
      this.state = {
          movieInfo: {},
          movieTrailers: '',
          movieError: '',
          videoError: '',
      }
  }

  componentDidMount() {
    const { id } = this.props

    apiCalls.getMovieInfo(id)
        .then(movie => this.setState({ movieInfo: movie.movie }))
        .catch(() => this.setState({ movieError: 'Having trouble finding movie information right now...please try again.'} ));

      apiCalls.getMovieTrailer(id)
        .then(video => {this.setState({ movieTrailers: video.videos.find(video => video.type === "Trailer") })})
        .catch(() => this.setState({ videoError: 'Sorry, this video is currently unavailable.'}))
  }

    render() {
      // console.log(this.state.movieInfo)
      // console.log(this.state.movieTrailers)

      const {title, release_date, backdrop_path, poster_path, overview, genres, 
        budget, revenue, tagline, average_rating, runtime} = this.state.movieInfo;
        
        // console.log(release_date.split())
      // const splitDate = release_date.split('-')
      // const newDate = splitDate[1] + '-' + splitDate[2] + '-' + splitDate[0]
      const videoLink = `https://www.youtube.com/embed/${this.state.movieTrailers.key}`

      return (
      <section className='movie-details' style={{ backgroundImage: `url(${backdrop_path})` }}>
        <article className='movie-details-info'>
            <h2>{title}</h2>
            <h3>"{tagline}"</h3>
            <p>Avg Rating: {average_rating}</p>
            <p>Release Date: {release_date}</p>
            <p>Genre: {genres}</p>
            <p>Budget: {budget}</p>
            <p>Revenue: {revenue}</p>
            <p>Runtime: {runtime} minutes</p>
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
        </article>
      </section>
      )
    }
}

MovieDetails.propTypes = {
   movieInfo: PropTypes.object,
}

export default MovieDetails;
