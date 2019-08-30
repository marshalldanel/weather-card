import React from 'react';
import './Card.css';

const renderWeatherIcon = weather => {
  switch (weather) {
    case 'Thunderstorm':
      return <i className='fas fa-poo-storm' />;
    case 'Drizzle':
      return <i className='fas fa-cloud-rai' />;
    case 'Rain':
      return <i className='fas fa-cloud-showers-heavy' />;
    case 'Snow':
      return <i className='fas fa-snowflake' />;
    case 'Clear':
      return <i className='far fa-sun' />;
    case 'Clouds':
      return <i className='fas fa-cloud' />;
    default:
      return <i className='fas fa-meteor' />;
  }
};

const Card = ({ city, temp, weather, humidity, wind }) => {
  return (
    <div className='card'>
      <h1>{city}</h1>
      <span className='main'>
        <h2>{temp} &#176; F</h2>
        {weather ? renderWeatherIcon(weather) : ''}
      </span>
      <span className='details'>
        <p>Humidity: {humidity} %</p>
        <p>Wind: {wind} mph</p>
      </span>
    </div>
  );
};

export default Card;
