/**
 * Module dependencies
 */
import React, { Suspense, useEffect, useState } from 'react';
import pokemonService from './services/pokemon-api';
const Pokemons = React.lazy(() => import('./components/pokemons/pokemons'));
const Pokemon = React.lazy(() => import('./components/pokemon/pokemon'));
const Header = React.lazy(() => import('./components/header/header'));
import Loader from './components/loader/loader';
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


  return (
    <>
      <Suspense fallback={<Loader />} >
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
      </Suspense>
    </>
  );
};

export default App;