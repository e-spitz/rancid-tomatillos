import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './SearchForm.css';

class SearchForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
      }
    }

    handleChange = event => {
        this.setState({ title: event.target.value });
    }

    sendRequest = event => {
        event.preventDefault();
        this.props.searchMovie(this.state.title);
        this.clearInputs();
    }

    clearInputs = () => {
        this.setState({ title: '' });
    }

    render() {
      return (
        <form>
          <input
            type='text'
            placeholder='Search Movie Title'
            name='title'
            value={this.state.title}
            onChange={event => this.handleChange(event)}
          />
          <Link to={`/rancid-tomatillos/search/${this.state.title}`}>
            <button>Search</button>
          </Link>
        </form>
      )
    }
  }

  export default SearchForm;
