import { useState, useEffect } from 'react';
const API_ENDPOINT = `https://pokeapi.co/api/v2/`;

// searchQuery will be something like &s=batman
export const useFetch = (searchQuery) => {
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState('');

  // url is always the API_ENDPOINT + the searchQuery
  const fetchPokemon = async (url) => {
    setLoading(true);
    console.log(url);
    try {
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      setPokemonList(data.results || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(`${API_ENDPOINT}${searchQuery.toLowerCase()}`);
    fetchPokemon(`${API_ENDPOINT}${searchQuery.toLowerCase()}`);
  }, []);

  return { loading, error, pokemonList, setPokemonList };
};
