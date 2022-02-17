/* eslint-disable react/prop-types */

/**
 * Module dependencies
 */
import React from 'react';
import SearchBar from '../search_bar/search_bar';
import './header.css';

const Header = ({ allPokemons }) => {

  return (
    <div className='header-container' >
      <h1>Pokemon App</h1>
      <SearchBar
        allPokemons={allPokemons}
      />
    </div>
  );

};

export default Header;