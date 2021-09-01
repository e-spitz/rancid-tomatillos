import './App.css';
import React, { Component } from "react";
import { Route } from 'react-router-dom';
import Movies from '../Movies/Movies'
import MovieDetails from '../MovieDetails/MovieDetails';
import apiCalls from '../../apiCalls'
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
    apiCalls.getMovieData()
    .then(data => this.setState({ movies: data.movies }))
    .catch(err => this.setState({error: err}))
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1>rancid tomatillos 🎬</h1>
        </header>
        <main className="main-section">
          <Route exact path="/" render={ () =>  <Movies movies={this.state.movies} getMovieInfo={this.getMovieInfo} getMovieTrailer={this.getMovieTrailer}/>}/>
          <Route path="/:id" render={({ match }) => <MovieDetails id={parseInt(match.params.id)} />}/>
          

          {/* {this.state.err && <loader /> */}
          {/* {this.state.movieInfo && !this.state.movies.length ? <MovieDetails movie={this.state.movieInfo} goToMainView={this.goToMainView} trailer={this.state.video}/> : <Movies movies={this.state.movies} getMovieInfo={this.getMovieInfo} getMovieTrailer={this.getMovieTrailer}/>} */}
        </main>
      </div>
    )
  }
}

export default App;





