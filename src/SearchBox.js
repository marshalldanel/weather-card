import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
  constructor(props) {
    super();
    this.state = { value: '' };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    console.log(this.state.value);
    this.setState({ value: '' });
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type='text'
              name='search'
              placeholder='Search for a city...'
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type='submit' value='submit' />
        </form>
      </div>
    );
  }
}

export default SearchBox;
