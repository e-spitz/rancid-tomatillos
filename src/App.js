import logo from './logo.svg';
import './App.css';
import movieData from './movieData.js';
import React, { Component } from "react";

class App extends Component {
  // console.log(movieData.movies);
  constructor() {
    super() 
    this.state = {
      movies: movieData.movies
    }
  }
  render() {
    console.log(this.state)
    return (
      <main className="main-view">
        <header className="header-view">
          <h1>Rancid Tomatillos 🎬</h1>
        </header>
      </main>
    )
  }
}

export default App;
