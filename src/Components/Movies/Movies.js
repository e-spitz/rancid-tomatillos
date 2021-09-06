import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import { getMovieData }  from '../../apiCalls';
import { NavLink } from 'react-router-dom';
import './Movies.css'

class Movies extends Component {
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
    .catch(err => this.setState({error: err}))
  }

  renderAllMovies = () => {
    const  movieCards = this.state.movies.map(movie => {
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
          {movieCards}
          <NavLink className='go-back' to="/">Main View</NavLink>
        </div>
      )
  }

  // renderFilteredMovies = () => {
  //   const searchedMovies = this.state.filteredMovies.map(movie => {
  //     const splitDate = movie.release_date.split('-')
  //     const newDate = splitDate[1] + '-' + splitDate[2] + '-' + splitDate[0]
  //       return (
  //           <Movie
  //               poster={movie.poster_path}
  //               background={movie.backdrop_path}
  //               title={movie.title}
  //               avgRating={movie.average_rating.toFixed(1)}
  //               releaseDate={newDate}
  //               id={movie.id}
  //               key={movie.id}
  //           />
  //       )
  //   })
  //   return (
  //       <div className='movies-container'>
  //         {searchedMovies}
  //         <NavLink className='go-back' to="/">Main View</NavLink>
  //       </div>
  //     )
  // }

  // searchMovie= (title) => {
  //   // console.log(title)
  //   // console.log(this.state.movies)
  //   // console.log(this.state.movies.filter(movie => console.log(movie.title)))
  //   // console.log(this.state.movies.filter(movie => movie.title === "mulan"))
  //   const searchedMov = this.state.movies.filter(movie => movie.title.includes(title))
  //   console.log('test:', searchedMov)
  //   this.setState({ filteredMovies: searchedMov})
  // }

  render() {
    // if (!this.state.movies.length && !this.state.error) {
    //   return(
    //     <p className='loading'>Loading...🍿</p>
    //   )
    // }


    return (
      <section>
        <SearchForm /> 
        {!this.state.movies.length && this.state.error && <h2>500 Error!</h2>}
        {!this.state.movies.length && !this.state.error && <Loader />}
        {!this.state.error && this.state.movies.length &&
          <section>
            {this.renderAllMovies()}
          </section>
        }
      </section>
    )
  }
  
}

// Movies.propTypes = {
  //   movieCards: PropTypes.array,
  //   splitDate: PropTypes.string,
  //   newDate: PropTypes.string,
  // }
  
  export default Movies;
  
  // {this.state.movies && this.state.filteredMovies &&
  //   <section>
  //     {this.renderFilteredMovies()}
  //     {/* {Un componenete para hacer el render de las peliculas filtradas:
  //     Se puede pasasr this.state.movies como prop 
  //     Pasar el metodo renderFilteredMovies()
  //     } */}
  //   </section>
  //   }