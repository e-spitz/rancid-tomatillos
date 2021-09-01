import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import apiCalls from '../../apiCalls'
import './MovieDetails.css'
const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/'

// const MovieDetails = ({ movie, goToMainView, trailer }) => {
    class MovieDetails extends Component {

    // const splitDate = movie.release_date.split('-')
    // const newDate = splitDate[1] + '-' + splitDate[2] + '-' + splitDate[0]
    // const videoLink = `https://www.youtube.com/embed/${trailer.key}`

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
    apiCalls.getMovieData(url + this.props.id)
        .then(movie => this.setState({ movieInfo: movie.movie }))
        .catch(() => this.setState({ movieError: 'Having trouble finding movie information right now...please try again.'} ));

    // fetchVideo(this.props.id)
    //     .then(video => {this.setState({movieTrailers: video.videos})})
    //     .catch(() => this.setState({ videoError: 'Sorry, this video is currently unavailable.'}))
  }



    render() {
      console.log(this.state.movieInfo)
      return (
      // <section className='movie-details' style={{ backgroundImage: `url(${movie.backdrop_path})` }}>
        <article className='movie-details-info'>
            <h2>TEST</h2>
            {/* <h3>"{movie.tagline}"</h3>
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
            <Link to="/">Main View</Link> */}
        </article>
      // </section>
      )
    }
}

// MovieDetails.propTypes = {
//     movie: PropTypes.object.isRequired,
//     goToMainView: PropTypes.func.isRequired,
//     // trailer: PropTypes.object.isRequired
// }

export default MovieDetails;
