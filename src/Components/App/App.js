import './App.css';
import React, { Component } from "react";
import { Redirect, Route, Switch, Router } from 'react-router-dom';
import Movies from '../Movies/Movies';
import MovieDetails from '../MovieDetails/MovieDetails';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Error from '../Error/Error';
import { getMovieData }  from '../../apiCalls';

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
    getMovieData()
    .then(data => this.setState({ movies: data.movies }))
    .catch(err => this.setState({error: err}))
  }

  searchMovie= (title) => {
    console.log(title)
    console.log(this.state.movies)
    console.log(this.state.movies.filter(movie => console.log(movie.title)))
    console.log(this.state.movies.filter(movie => movie.title === "mulan"))

    const test = this.state.movies.filter(movie => movie.title === title)
    console.log('test:', test)
  }

  render() {
    return (
      <div className="app">
          <Header />
          <SearchForm searchMovie={this.searchMovie}/>
          {/* <Error /> */}
          <main className="main-section">
          {this.state.err && <p>{this.state.err}</p>}
          {!this.state.movies.length && <p className='loading'>Loading...🍿</p>}
            <Switch>
              <Route exact path="/" render={ () =>  <Movies movies={this.state.movies} getMovieInfo={this.getMovieInfo} getMovieTrailer={this.getMovieTrailer}/>}/>
              <Route exact path="/:id" render={({ match }) => <MovieDetails id={parseInt(match.params.id)} />}/>
              <Route exact path="/ss" render={() => <p>test</p>}/>
            </Switch>
          </main>
        </div>
    )
  }
}

export default App;
