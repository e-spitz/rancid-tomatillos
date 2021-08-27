import './App.css';
import React, { Component } from "react";
import Movies from '../Movies/Movies'
import movieData from '../../movieData';
import apiCalls from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies,
      movieInfo: '',
      err: ''
    }
  }

  getMovieInfo = (id) => {
    // const url = `https://rancid-tomatillos.herokuapp.com/api/v2${id}`
    // apiCalls.getSingleMovieData(url)
    // .then(data => this.setState({ movieInfo: data }))
    // // .then(data => console.log(data))
    // .catch((err) => this.setState({error: err}))

    console.log(id)
  }

  render() {
    // console.log(this.state)
    return (
      <div className="app">
        <nav className="nav-bar">
          <header className="header">
            <h1>rancid tomatillos 🎬</h1>
          </header>
        </nav>
        <main className="main-section">
           <Movies movies={this.state.movies} getMovieInfo={this.getMovieInfo}/>
        </main>
      </div>
    )
  }
}

export default App;
