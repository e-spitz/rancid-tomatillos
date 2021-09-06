import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import { getMovieData }  from '../../apiCalls';
import { NavLink } from 'react-router-dom';
import './FilteredMovies.css'

class FilteredMovies extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      movieInfo: null,
      video: null,
      filteredMovies: [],
      error: ''
    }
  }

  componentDidMount = () => {
    getMovieData()
    .then(data => this.setState({ movies: data.movies }))
    .then(() => this.searchMovie())
    .catch(err => this.setState({error: err}))
  }

  renderFilteredMovies = () => {
    const searchedMovies = this.state.filteredMovies.map(movie => {
      const splitDate = movie.release_date.split('-')
      const newDate = splitDate[1] + '-' + splitDate[2] + '-' + splitDate[0]
        return (
            <Movie
                poster={movie.poster_path}
                background={movie.backdrop_path}
                title={movie.title}
                avgRating={movie.average_rating.toFixed(1)}
                releaseDate={newDate}
                id={movie.id}
                key={movie.id}
            />
        )
    })
    return (
        <div className='movies-container'>
          {searchedMovies}
          <NavLink className='go-back' to="/">Main View</NavLink>
        </div>
      )
  }

  searchMovie = () => {
  const searchedMov = this.state.movies.filter(movie => movie.title.toLowerCase().includes(this.props.title))
  this.setState({ filteredMovies: searchedMov})
  }
  
  render() {
    const searchedMovies = this.state.filteredMovies.map(movie => {
      const splitDate = movie.release_date.split('-')
      const newDate = splitDate[1] + '-' + splitDate[2] + '-' + splitDate[0]
        return (
            <Movie
                poster={movie.poster_path}
                background={movie.backdrop_path}
                title={movie.title}
                avgRating={movie.average_rating.toFixed(1)}
                releaseDate={newDate}
                id={movie.id}
                key={movie.id}
            />
        )
    })
    return (
      <section>
          <NavLink className='go-back' to="/">Main View</NavLink>
        <div className='filtered-movies-container'>
          {searchedMovies}
        </div>
      </section>
      )
  }
}

export default FilteredMovies;