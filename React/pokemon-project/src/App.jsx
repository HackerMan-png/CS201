import React, { useState } from 'react';
import { useAppContext } from './util/context';
import { useFetch } from './util/useFetch';
import { Switch, Route } from 'react-router';
import SearchBar from './Components/SearchBar';
import Pokemon from './Components/Pokemon';
import { pages } from './util/consts';
import Home from './Pages/Home';

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

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        {pages
          .filter((page) => page.text !== 'home')
          .map((page) => {
            const { url, component } = page;
            return <Route path={url}>{component}</Route>;
          })}
      </Switch>
      {/* <Pokemon /> */}
    </>
  );
}

export default App;
