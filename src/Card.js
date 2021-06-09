import React from 'react';
import './Card.css';
import SVG from './SVG';

const renderWeatherIcon = (weather, icon) => {
  if (weather == 'Clouds' && icon == '04n') {
    return <SVG name="thunderstorm" width={100} />;
  } else if (weather == 'Clouds' && icon == '04d') {
    return <SVG name="cloudy-night" width={100} />;
  } else {
    return <div />;
  }
};

// switch (true) {
//   case 'Thunderstorm':
//     return <SVG name='thunderstorm' width={100} />;
//   case 'Drizzle':
//     return <i className='fas fa-cloud-rai' />;
//   case 'Rain':
//     return <SVG name='rainy-night' width={100} />;
//   case 'Snow':
//     return <SVG name='snowflake' width={100} />;
//   case 'Clear':
//     return <i className='far fa-sun' />;
//   case 'Clouds' && '04n':
//       return <SVG name='thunderstorm' width={100} />
//   case 'Clouds' && '04d':
//     return <SVG name='cloudy-night' width={100} />
//   default:
//     return <i className='fas fa-meteor' />;
// }

const Card = ({ city, temp, weather, humidity, wind }) => {
  return (
    <div className="card">
      <h1>{city}</h1>
      <span className="main">
        <h2>{temp} &#176; F</h2>
        {weather ? renderWeatherIcon(weather) : ''}
      </span>
      <span className="details">
        <p>Humidity: {humidity} %</p>
        <p>Wind: {wind} mph</p>
      </span>
    </div>
  );
};

export default Card;
