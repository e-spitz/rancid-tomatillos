import React, { Component } from "react";
import './SearchForm.css';

class SearchForm extends Component {
    constructor() {
      super();
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
          <button>Search</button>
        </form>
      )
    }
  }
  
  export default SearchForm;