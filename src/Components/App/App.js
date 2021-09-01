import './App.css';
import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import Movies from '../Movies/Movies'
// import movieData from '../../movieData';
import MovieDetails from '../MovieDetails/MovieDetails';
// import Loader from '../Loader/Loader';
import apiCalls from '../../apiCalls'
const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/'
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
    // this.setState( { movies: [] })
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

  render() {
    // console.log(this.state.movieInfo)
    // console.log(this.state.video)
    return (
      <div className="app">
        <header className="header">
          {/* <Link to="/">Main View</Link> */}
          <h1>rancid tomatillos 🎬</h1>
        </header>
        <main className="main-section">
          <Route exact path="/" render={ () =>  <Movies movies={this.state.movies} getMovieInfo={this.getMovieInfo} getMovieTrailer={this.getMovieTrailer}/>}/>

          <Route path="/:id" render={({ match }) => <MovieDetails id={parseInt(match.params.id)} />}/>
          
          {/* <Route path="/:id" render={({ match }) => {
            const movieId = parseInt(match.params.id);
            console.log(movieId )
            <MovieDetails id={movieId}/>
          }} /> */}

          {/* <Route path={`/${test}`} render={ () => { <MovieDetails movie={this.state.movieInfo} goToMainView={this.goToMainView} trailer={this.state.video}/> }}/> */}
        </main>
      </div>
    )
  }
}

export default App;






{/* {!this.state.movieInfo && !this.state.movies.length && <Loader />}
{this.state.movieInfo && !this.state.movies.length ? <MovieDetails movie={this.state.movieInfo} goToMainView={this.goToMainView} trailer={this.state.video}/> : <Movies movies={this.state.movies} getMovieInfo={this.getMovieInfo} getMovieTrailer={this.getMovieTrailer}/>} */}