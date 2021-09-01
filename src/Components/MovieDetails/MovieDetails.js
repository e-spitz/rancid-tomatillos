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

      apiCalls.getMovieData(url + this.props.id + "/videos")
        .then(video => {this.setState({ movieTrailers: video.videos.find(video => video.type === "Trailer") })})
        .catch(() => this.setState({ videoError: 'Sorry, this video is currently unavailable.'}))
  }



    render() {
      console.log(this.state.movieInfo)
      console.log(this.state.movieTrailers)
      return (
      <section className='movie-details' style={{ backgroundImage: `url(${this.state.movieInfo.backdrop_path})` }}>
        <article className='movie-details-info'>
            <h2>{this.state.movieInfo.title}</h2>
            <h3>"{this.state.movieInfo.tagline}"</h3>
            <p>Avg Rating: {this.state.movieInfo.average_rating}</p>
            <p>Release Date: {this.state.movieInfo.release_date}</p>
            <p>Genre: {this.state.movieInfo.genres}</p>
            <p>Budget: {this.state.movieInfo.budget}</p>
            <p>Revenue: {this.state.movieInfo.revenue}</p>
            <p>Runtime: {this.state.movieInfo.runtime} minutes</p>
            <div className='trailer-video'>
              <iframe
              title='Embedded youtube'
              className='video'
              width='450'
              height='200'
              src={`https://www.youtube.com/embed/${this.state.movieTrailers.key}`}
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

// MovieDetails.propTypes = {
//     movie: PropTypes.object.isRequired,
//     goToMainView: PropTypes.func.isRequired,
//     // trailer: PropTypes.object.isRequired
// }

export default MovieDetails;
