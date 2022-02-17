/* eslint-disable no-undef */
const url = 'https://pokeapi.co/api/v2/pokemon';

const getAllPokemons = async () => {

  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    mode: 'cors'
  });

  if (response.status !== 200) {
    let data = response.json();
    throw new Error('Error: ', data.error);
  }

  let data = await response.json();

  response = await fetch(`${url}/?limit=${data.count}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    mode: 'cors'
  });

  if (response.status !== 200) {
    let data = response.json();
    throw new Error('Error: ', data.error);
  }

  return await response.json();

};

const getPokemon = async (pokemon) => {

  let response = await fetch(`${url}/${pokemon.name}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    mode: 'cors'
  });

  if (response.status !== 200) {
    let data = response.json();
    throw new Error('Error: ', data.error);
  }

  return await response.json();

};

export default { getAllPokemons, getPokemon };

