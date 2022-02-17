/* eslint-disable react/prop-types */

/**
 * Module dependencies
 */
import React from 'react';
import PokemonThumbnail from '../pokemon_thumbnail/pokemon_thumbnail';
import './pokemons.css';

const Pokemons = (props) => {

  return (
    <div className='pokemongrid-container' >
      {props.allPokemons.map((pokemon, i) => (
        <PokemonThumbnail
          key={i}
          id={pokemon.id}
          name={pokemon.name}
          images={pokemon.sprites}
        />
      ))}
    </div>
  );
};

export default Pokemons;