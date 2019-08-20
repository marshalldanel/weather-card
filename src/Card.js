import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className='card'>
      <h1>Location</h1>
      <span className='main'>
        <h2>Temperature</h2>
        <i class='far fa-sun' />
      </span>
      <span className='details'>
        <p>Humidity</p>
        <p>Wind Speed</p>
      </span>
    </div>
  );
};

export default Card;
