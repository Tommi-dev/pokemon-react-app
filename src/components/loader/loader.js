/**
 * Module dependencies
 */
import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div className='loader-container' >
      <h1>Downloading pokemons</h1>
      <div className='loader' ></div>
    </div>
  );
};

export default Loader;