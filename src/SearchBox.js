import React, { Component } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import './SearchBox.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { city: '' };
  }

  handleChange = city => {
    this.setState({ city });
  };

  handleSelect = city => {
    this.setState({ city });
    geocodeByAddress(city)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => this.props.getWeather(lat, lng))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.city}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input'
              })}
            />
            <div className='autocomplete-dropdown-container'>
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default SearchBox;
