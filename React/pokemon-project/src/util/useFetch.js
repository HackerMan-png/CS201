import { useState, useEffect } from 'react';
import { pokemonListConst } from './consts';
// import { useAppContext } from './context';
const API_ENDPOINT = `https://pokeapi.co/api/v2/`;

// searchQuery will be something like &s=batman
export const useFetch = (searchQuery) => {
  // const { pokemonName } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [pokemonList, setPokemonList] = useState(pokemonListConst);
  const [error, setError] = useState('');

  // url is always the API_ENDPOINT + the searchQuery
  const fetchPokemon = async (url) => {
    setLoading(true);
    console.log(url);
    try {
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      setPokemon(data || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(`${API_ENDPOINT}${searchQuery.toLowerCase()}`);
    fetchPokemon(`${API_ENDPOINT}${searchQuery.toLowerCase()}`);
  }, [searchQuery]);

  return {
    loading,
    error,
    pokemonList,
    pokemon,
    setPokemon,
  };
};
