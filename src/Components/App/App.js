import './App.css';
import React from "react";
import { Route, Switch } from 'react-router-dom';
import Movies from '../Movies/Movies';
import MovieDetails from '../MovieDetails/MovieDetails';
import FilteredMovies from '../FilteredMovies/FilteredMovies';
import Header from '../Header/Header';
import Error from '../Error/Error';

const App = () => {
  return (
      <div className="app">
          <Header />
          <main className="main-section">
            <Switch>
              <Route exact path="/rancid-tomatillos" render={ () =>  <Movies />}/>
              <Route exact path="/rancid-tomatillos/search/:title" render={ ({ match }) => <FilteredMovies title={match.params.title}/>}/>
              <Route exact path="/rancid-tomatillos/search/" render={ () => <Movies />}/>
              <Route exact path="/rancid-tomatillos/movie/:id" render={({ match }) => <MovieDetails id={parseInt(match.params.id)} />}/>
              <Route path="*" render={() => <Error />}/>
            </Switch>
          </main>
        </div>
  )
}

export default App;
