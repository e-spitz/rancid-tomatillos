import React, { Component } from "react";
import './SearchForm.css';

class SearchForm extends Component {
    constructor() {
      super();
      this.state = {
        title: '',
      }
    }
  
    render() {
      return (
        <form>
          <input
            type='text'
            placeholder='Movie Title'
            name='title'
            value={this.state.title}
          />
          <button>Search</button>
        </form>
      )
    }
  }
  
  export default SearchForm;