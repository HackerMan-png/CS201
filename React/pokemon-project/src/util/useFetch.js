import { useState, useEffect } from "react";
const API_ENDPOINT = `https://pokeapi.co/api/v2/`;

// searchQuery will be something like &s=batman
export const useFetch = (searchQuery) => {
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);

  // url is always the API_ENDPOINT + the searchQuery
  const fetchPokemon = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      setStories(data.hits || []);
      setMaxPages(data.nbPages || 0);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(`${API_ENDPOINT}${searchQuery}`);
    fetchPokemon(`${API_ENDPOINT}${searchQuery}`);
  }, [searchQuery]);

  return { loading, error, pokemonList, setPokemonList, maxPages };
};
