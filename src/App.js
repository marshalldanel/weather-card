import React from 'react';
import Card from './Card';
import SearchBox from './SearchBox';
import './App.css';

function App() {
  return (
    <div className='container'>
      <SearchBox />
      <Card />
    </div>
  );
}

export default App;
