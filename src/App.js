import React, { Component } from 'react';
import Axios from 'axios';
import Card from './Card';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
  getWeather = (lat, lon) => {
    const endPoint = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${
      process.env.REACT_APP_OPEN_WEATHER_API_KEY
    }`;
    Axios.get(endPoint)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className='container'>
        <SearchBox getWeather={this.getWeather} />
        <Card />
      </div>
    );
  }
}

export default App;
