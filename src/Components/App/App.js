// import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Movies from '../Movies/Movies'
import movieData from '../../movieData';
import apiCalls from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies
    }
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
           <Movies movies={this.state.movies}/>
        </main>
      </div>
    )
  }
}

export default App;
