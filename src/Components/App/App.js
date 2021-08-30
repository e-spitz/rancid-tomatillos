import './App.css';
import React, { Component } from "react";
import Movies from '../Movies/Movies'
import movieData from '../../movieData';
import MovieDetails from '../MovieDetails/MovieDetails';
import Loader from '../Loader/Loader';
import apiCalls from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      movieInfo: null,
      video: [],
      err: ''
    }
  }

  componentDidMount = () => {
    const url = `https://rancid-tomatillos.herokuapp.com/api/v2/movies`
    apiCalls.getMovieData(url)
    .then(data => this.setState({ movies: data.movies }))
    .catch(err => this.setState({error: err}))
  }

  getMovieInfo = (id) => {
    this.setState( { movies: [] })
    const url = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
    apiCalls.getMovieData(url)
    .then(data => this.setState({ movieInfo: data.movie }))
    .catch(err => this.setState({error: err}))
  }

  getMovieTrailer = (id) => {
    const video = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`
    apiCalls.getMovieData(video)
    .then(data => this.setState({ video: data.videos.find(video => video.type === "Trailer") }))
    .catch(err => this.setState({ error: err }))
  }

  goToMainView = () => {
    this.setState( { movieInfo: null })
    const url = `https://rancid-tomatillos.herokuapp.com/api/v2/movies`
    apiCalls.getMovieData(url)
    .then(data => this.setState({ movies: data.movies }))
  }

  render() {
    return (
      <div className="app">
        <nav className="nav-bar">
          <header className="header">
            <h1>rancid tomatillos 🎬</h1>
          </header>
        </nav>
        <main className="main-section">
          {/* <Loader /> */}
          {!this.state.movies.length ? <Loader /> : <Movies movies={this.state.movies} getMovieInfo={this.getMovieInfo} getMovieTrailer={this.getMovieTrailer}/>}
          {this.state.movieInfo && <MovieDetails movie={this.state.movieInfo} goToMainView={this.goToMainView} trailer={this.state.video}/>}
          {/* {this.state.movieInfo ? <MovieDetails movie={this.state.movieInfo} goToMainView={this.goToMainView}/> : <Movies movies={this.state.movies} getMovieInfo={this.getMovieInfo}/>} */}
        </main>
      </div>
    )
  }
}

export default App;
