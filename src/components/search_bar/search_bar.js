/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

/**
 * Module dependencies
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({ allPokemons }) => {

  /**
   * Component states
   */
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const names = Object.assign([], allPokemons.map(obj => obj.name));

  /**
   * Handler
   */
  const handleButton = () => {

    if (!(names.includes(name))) {
      setErrorMessage(`There's no pokemon named "${name}"!`);
    }

    setTimeout(() => {
      setErrorMessage('');
    }, 5000);

    setName('');
  };

  return (
    <div className='searchbar-container' >

      <h4> {errorMessage} </h4>
      <p>Search pokemon</p>
      <input
        value={name}
        onChange={({ target }) => setName(target.value)}
      />

      <Link onClick={handleButton} to={names.includes(name) ? `/${name}` : '/'}>
        <button> Search </button>
      </Link>
    </div>
  );

};

export default SearchBar;