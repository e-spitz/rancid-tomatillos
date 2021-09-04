import React, { Component } from "react";
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
          <button onClick={evenet => this.props.searchMovie(this.state.title)}>Search</button>
        </form>
      )
    }
  }
  
  export default SearchForm;