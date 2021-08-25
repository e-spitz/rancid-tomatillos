// import logo from './logo.svg';
import './App.css';
import movieData from './movieData.js';
import React, { Component } from "react";
import Movies from './Movies'

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
