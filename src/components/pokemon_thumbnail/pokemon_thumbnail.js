/* eslint-disable react/prop-types */

/**
 * Module dependencies
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './pokemon_thumbnail.css';

// eslint-disable-next-line no-unused-vars
const PokemonThumbnail = ({ id, name, images }) => {

  /**
   * Select an image to display
   */
  let listOfImages = [
    images.other.dream_world.front_default,
    images.other.home.front_default,
    images.front_default,
    images.front_shiny
  ];

  let imageToUse = listOfImages.find(image => image !== null);

  return (
    <Link to={`/${name}`} className='pokemon-thumbnail-container' >
      <div>
        <h3> {name} </h3>
        <img src={imageToUse} width={150} height={150} />
      </div>
    </Link >
  );
};

export default PokemonThumbnail;