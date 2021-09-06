import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import { getMovieData }  from '../../apiCalls';
import { NavLink } from 'react-router-dom';
import './FilteredMovies.css'

class FilteredMovies extends Component {
  //  = (props) => {
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
    // console.log(title)
    // console.log(this.state.movies)
    // console.log(this.state.movies.filter(movie => console.log(movie.title)))
    // console.log(this.state.movies.filter(movie => movie.title === "mulan"))
    const searchedMov = this.state.movies.filter(movie => movie.title.toLowerCase().includes(this.props.title))
    // console.log('test:', searchedMov)
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
    // return (

    //     <section>
    //         {this.renderFilteredMovies()}
    //         {/* {Un componenete para hacer el render de las peliculas filtradas:
    //         Se puede pasasr this.state.movies como prop 
    //         Pasar el metodo renderFilteredMovies()
    //         } */}
    //       </section>
    // )
  }


}

export default FilteredMovies;