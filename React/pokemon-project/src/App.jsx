import React, { useState } from 'react';
import { useAppContext } from './util/context';
import { useFetch } from './util/useFetch';
import SearchBar from './Components/SearchBar';
import Pokemon from './Pages/Pokemon';

function App() {
  const {
    query,
    setQuery,
    loading,
    pokemonList,
    setPokemonList,
    error,
    showPokemon,
  } = useAppContext();

  return (
    <>
      <SearchBar />
      <Pokemon />
    </>
  );
}

export default App;
