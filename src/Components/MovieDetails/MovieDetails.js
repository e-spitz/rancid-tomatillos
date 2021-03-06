import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { getMovieInfo, getMovieTrailer } from '../../apiCalls'
import './MovieDetails.css'

class MovieDetails extends Component {
    constructor(props) {
      super(props);
      this.state = {
          movieInfo: {},
          movieTrailers: [],
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
    const {title, release_date, backdrop_path, genres,
      budget, revenue, tagline, average_rating, runtime} = this.state.movieInfo;

    if (title) {
      const allGenres = genres.map(genre => genre + ' ');
      const videoLink = this.state.movieTrailers && `https://www.youtube.com/embed/${this.state.movieTrailers.key}`
      const backDrop = this.state.movieInfo && `url(${backdrop_path})`
      return (
        <section className='movie-details' style={{ backgroundImage: backDrop }}>
          <article className='movie-details-info'>
            <h2>{title.toUpperCase()}</h2>
            <h3 style={{display: !tagline && "none"}}>{tagline}</h3>
            <p className='details'>Avg Rating: {average_rating.toFixed(1)}</p>
            <p className='details'>Release Date: {this.formatDate(release_date)}</p>
            <p className='details'>Genre: {!allGenres.length ? "Unavailable" : allGenres}</p>
            <p className='details'>Budget: {!budget ? "Unavailable" :`$${this.convertNumber(budget)}`}</p>
            <p className='details'>Revenue: {!revenue ? "Unavailable" :`$${this.convertNumber(revenue)}`}</p>
            <p className='details'>Runtime: {runtime ? runtime + " minutes" : "Unavailable"}</p>
            <div className='trailer-video'>
              <iframe
              style={{display: !videoLink && "none"}}
              title='Embedded youtube'
              className='video'
              width='450'
              height='300'
              src={videoLink}
              frameBorder='0'
              allowFullScreen
              ></iframe>
            </div>
            <a href={videoLink} className="trailer-link hidden">Click here for trailer</a>
            <NavLink className='go-back' to="/rancid-tomatillos/">Main View</NavLink>
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
