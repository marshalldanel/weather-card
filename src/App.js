import React, { Component } from 'react';
import Axios from 'axios';
import Card from './Card';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
  state = {
    city: '',
    temp: '',
    tempHigh: '',
    tempLow: '',
    weather: '',
    humidity: '',
    wind: ''
  };

  getWeather = (lat, lon) => {
    const endPoint = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&APPID=${
      process.env.REACT_APP_OPEN_WEATHER_API_KEY
    }`;
    Axios.get(endPoint)
      .then(({ data }) => {
        this.setState({
          city: data.name,
          temp: data.main.temp,
          tempHigh: data.main.temp_max,
          tempLow: data.main.temp_min,
          weather: data.weather[0].main,
          humidity: data.main.humidity,
          wind: data.wind.speed
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className='container'>
        <SearchBox getWeather={this.getWeather} />
        <Card {...this.state} />
      </div>
    );
  }
}

export default App;
