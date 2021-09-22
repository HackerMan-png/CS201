import React, { useState, useContext } from 'react';
import { useFetch } from './useFetch';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [pokemonName, setPokemonName] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(0);
  const [reload, setReload] = useState(null);
  const [showPokemon, setShowPokemon] = useState(false);
  const { loading, error, pokemonList, pokemon, setPokemon } = useFetch(
    `pokemon/${pokemonName}`
  );
  // {console.log(`${movies} #4`)}

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        loading,
        pokemonList,
        error,
        showPokemon,
        setShowPokemon,
        pokemon,
        setPokemon,
        reload,
        setReload,
        pokemonName,
        setPokemonName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
