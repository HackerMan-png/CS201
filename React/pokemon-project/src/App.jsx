import React, { useState } from "react";
import { useAppContext } from "./util/context";
import { useFetch } from "./util/useFetch";
import SearchBar from "./Components/SearchBar";

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
      <div className="App">
        {showPokemon && <div className="pokemon-list">
          {pokemonList
            .filter((pokemon) => pokemon.name.includes(query.toLowerCase()))
            .map((pokemon) => {
              return (
                <div className="pokemon">
                  {pokemon.name
                    .split("-")
                    .map(
                      (section) =>
                        `${section[0].toUpperCase()}${section.slice(1)}`
                    )
                    .join(" ")}
                </div>
              );
            })}
        </div>}
      </div>
    </>
  );
}

export default App;
