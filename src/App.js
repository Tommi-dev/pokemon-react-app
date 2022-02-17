/**
 * Module dependencies
 */
import React, { useEffect, useState } from 'react';
import pokemonService from './services/pokemon-api';
import Pokemons from './components/pokemons/pokemons';
import Pokemon from './components/pokemon/pokemon';
import Header from './components/header/header';
import {
  Route, Routes
} from 'react-router-dom';

/**
 * Main component
 */
const App = () => {

  /**
   * Component states
   */
  const [allPokemons, setAllPokemons] = useState([]);

  /**
   * Retrieving data from API and initializing pokemons
   */
  useEffect(() => {
    getAllPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createPokemonObject = async (result) => {

    result.forEach((pokemon) => {

      pokemonService
        .getPokemon(pokemon)
        .then(returnedPokemon => {
          setAllPokemons((currentList) => [...currentList, returnedPokemon]);
        })
        .catch(error => {
          console.log('Error in createPokemonObject: ', error);
        });
    });

  };

  const getAllPokemons = async () => {

    let data = await pokemonService
      .getAllPokemons()
      .then(initialData => {
        return initialData.results;
      })
      .catch(error => {
        console.log('Error in getAllPokemons: ', error);
      });

    createPokemonObject(data);
  };

  /**
   * Updating list of pokemons
   */
  const shufflePokemons = (pokemons) => {
    const newPokemons = [...pokemons];
    setAllPokemons(newPokemons.sort(() => Math.random() - 0.5));
  };

  //console.log('pokemons length: ', allPokemons);

  return (
    <>
      <Header allPokemons={allPokemons} />
      <Routes>

        <Route
          path='/:id'
          element={
            <Pokemon
              allPokemons={allPokemons}
              shufflePokemons={shufflePokemons}
            />
          }
        />

        <Route
          path='/'
          element={
            <Pokemons
              allPokemons={allPokemons.slice(0, 20)}
            />
          }
        />

      </Routes>
    </>
  );
};

export default App;