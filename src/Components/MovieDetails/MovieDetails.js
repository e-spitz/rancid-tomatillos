import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { getMovieInfo, getMovieTrailer } from '../../apiCalls'
import './MovieDetails.css'
const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/'


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

    getMovieInfo(id)
        .then(movie => this.setState({ movieInfo: movie.movie }))
        .catch(() => this.setState({ movieError: 'Having trouble finding movie information right now...please try again.'} ));

    getMovieTrailer(id)
        .then(video => {this.setState({ movieTrailers: video.videos.find(video => video.type === "Trailer") })})
        .catch(() => this.setState({ videoError: 'Sorry, this video is currently unavailable.'}))
  }

  formatDate(date) {
    const splitDate = date.split('-');
    const newDate = splitDate[1] + '-' + splitDate[2] + '-' + splitDate[0];
    return newDate;
  }

  convertNumber(number) {
   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 }

  render() {

    const {title, release_date, backdrop_path, poster_path, overview, genres,
      budget, revenue, tagline, average_rating, runtime} = this.state.movieInfo;

    const videoLink = `https://www.youtube.com/embed/${this.state.movieTrailers.key}`

    if (title) {
      const allGenres = genres.map(genre => genre + ' ');
      return (
        <section className='movie-details' style={{ backgroundImage: `url(${backdrop_path})` }}>
          <article className='movie-details-info'>
            <h2>{title}</h2>
            <h3 style={{display: !tagline && "none"}}>{tagline}</h3>
            <p>Avg Rating: {average_rating.toFixed(1)}</p>
            <p>Release Date: {this.formatDate(release_date)}</p>
            <p>Genre: {allGenres}</p>
            <p>Budget: {!budget ? "Unavailable" :`$${this.convertNumber(budget)}`}</p>
            <p>Revenue: {!revenue ? "Unavailable" :`$${this.convertNumber(revenue)}`}</p>
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
            <NavLink className='go-back' to="/">Main View</NavLink>
          </article>
        </section>
      )
    }
    return null
  }
}

MovieDetails.propTypes = {
   movieInfo: PropTypes.object,
}

export default MovieDetails;
