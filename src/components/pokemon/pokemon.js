/* eslint-disable react/prop-types */

/**
 * Module dependencies
 */
import React from 'react';
import {
  useParams, Link
} from 'react-router-dom';
import './pokemon.css';

// eslint-disable-next-line no-unused-vars
const Pokemon = ({ allPokemons, shufflePokemons }) => {

  /**
   * Find the pokemon to display
   */
  const name = useParams().id;
  const pokemon = JSON.parse(JSON.stringify(allPokemons.find(pokemon => pokemon.name === name)));

  /**
   * Select an image to display
   */
  const listOfImages = [
    JSON.parse(JSON.stringify(pokemon.sprites.other.dream_world.front_default)),
    JSON.parse(JSON.stringify(pokemon.sprites.other.home.front_default)),
    JSON.parse(JSON.stringify(pokemon.sprites.front_default)),
    JSON.parse(JSON.stringify(pokemon.sprites.front_shiny))
  ];

  let imageToUse = listOfImages.find(image => image !== null);

  /**
   * Handler
   */
  const handleClick = () => {

    shufflePokemons(allPokemons);

  };

  return (
    <div className='pokemon-container' >

      <img src={imageToUse} width={350} height={350} />
      <h1> {pokemon.name} </h1>
      <p> {pokemon.stats[0].stat.name} {pokemon.stats[0].base_stat} </p>

      <Link to={'/'} >
        <button onClick={() => handleClick()} >Return</button>
      </Link>
    </div>
  );
};

export default Pokemon;