import './App.css';
import React, { Component } from "react";
import { Route } from 'react-router-dom';
import Movies from '../Movies/Movies'
import MovieDetails from '../MovieDetails/MovieDetails';
import Loader from '../Loader/Loader';
import apiCalls from '../../apiCalls';
const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/';


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      movieInfo: null,
      video: null,
      err: ''
    }
  }

  componentDidMount = () => {
    apiCalls.getMovieData(url)
    .then(data => this.setState({ movies: data.movies }))
    .catch(err => this.setState({error: err}))
  }

  getMovieInfo = (id) => {
    this.setState( { movies: [] })
    apiCalls.getMovieData(url + id)
    .then(data => this.setState({ movieInfo: data.movie }))
    .catch(err => this.setState({error: err}))
  }

  getMovieTrailer = (id) => {
    apiCalls.getMovieData(url + id + '/videos')
    .then(data => this.setState({ video: data.videos.find(video => video.type === "Trailer") }))
    .catch(err => this.setState({ error: err }))
  }

  goToMainView = () => {
    this.setState( { movieInfo: null })
    apiCalls.getMovieData(url)
    .then(data => this.setState({ movies: data.movies }))
  }

  getSelectedMovie = (id) => {
    const result = this.state.movies.find(movie => movie.id === id)
    console.log(result)
    return result;
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1>rancid tomatillos 🎬</h1>
        </header>
        <main className="main-section">
          <Route exact path="/"
            render={() =>  <Movies movies={this.state.movies} getMovieInfo={this.getMovieInfo} getMovieTrailer={this.getMovieTrailer}/>} />
          <Route path="/movies/:id"  render={ ({ match }) => {
            const findMovie = this.getMovieInfo(parseInt(match.params.id))
            return <MovieDetails movie={findMovie} />
          }}/>
        </main>
      </div>
    )
  }
}
// <Route exact path="/:id"
//   render={({ match }) => {
  //     const matchID = parseInt(match.params.id)
  //     const renderMovie = this.getSelectedMovie(matchID)
  //     return <MovieDetails movie={renderMovie} key={matchID} id={matchID} goToMainView={this.goToMainView} trailer={this.state.video}/>
  // }}/>
// <Route exact path="/movies/:id"
//   render={({ match }) => {
  //   const renderMovie = this.
  //   return <MovieDetails {...renderMovie} />
  // }}/>
// const renderMovie = movies.find(movie => movie.id === parseInt(match.params.id));
// return <MovieDetails {...renderMovie}/>
// {!this.state.movieInfo && !this.state.movies.length && <Loader />}
// {this.state.movieInfo && !this.state.movies.length ? <MovieDetails movie={this.state.movieInfo} goToMainView={this.goToMainView} trailer={this.state.video}/> : <Movies movies={this.state.movies} getMovieInfo={this.getMovieInfo} getMovieTrailer={this.getMovieTrailer}/>}

// <Route exact path="/" component={ Movies }/>
export default App;
