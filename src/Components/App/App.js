import './App.css';
import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Movies from '../Movies/Movies';
import MovieDetails from '../MovieDetails/MovieDetails';
import Header from '../Header/Header'
import Error from '../Error/Error';
import apiCalls from '../../apiCalls';

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
        <Header />
        <main className="main-section">
        {this.state.err && <p>{this.state.err}</p>}
        {!this.state.movies.length && <p className='loading'>Loading Movies...🍿</p>}
        <Switch>
          <Route exact path="/" render={ () =>  <Movies movies={this.state.movies} getMovieInfo={this.getMovieInfo} getMovieTrailer={this.getMovieTrailer}/>}/>
          <Route path="/:id" render={({ match }) => <MovieDetails id={parseInt(match.params.id)} />}/>
          <Route component={Error}/>
        </Switch>
        </main>
      </div>
    )
  }
}

{/* {this.state.movieInfo && !this.state.movies.length ? <MovieDetails movie={this.state.movieInfo} goToMainView={this.goToMainView} trailer={this.state.video}/> : <Movies movies={this.state.movies} getMovieInfo={this.getMovieInfo} getMovieTrailer={this.getMovieTrailer}/>} */}
export default App;
