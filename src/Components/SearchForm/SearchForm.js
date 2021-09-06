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

    sendRequest = eventClick => {
        eventClick.preventDefault();
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
            placeholder='Movie Title'
            name='title'
            value={this.state.title}
            onChange={event => this.handleChange(event)}
          />
          <Link to={`/search/${this.state.title}`}>
            {/* <button onClick={event => this.sendRequest(event)}>Search</button> */}
            <button>Search</button>
          </Link>
        </form>
      )
    }
  }
  
  export default SearchForm;