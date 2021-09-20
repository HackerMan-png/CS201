import React from 'react';
import { useAppContext } from '../util/context';
import pokeball from '../assets/pokeball.png';

const Pokemon = () => {
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
      {showPokemon && (
        <div className='pokemon-list'>
          {pokemonList
            .filter((pokemon) => pokemon.name.includes(query.toLowerCase()))
            .map((pokemon, i) => {
              return (
                <div className='pokemon'>
                  <p className='pokeName'>
                    {pokemon.name
                      .split('-')
                      .map(
                        (section) =>
                          `${section[0].toUpperCase()}${section.slice(1)}`
                      )
                      .join(' ')}{' '}
                  </p>
                  <p className='id'>{pokemonList.indexOf(pokemon) + 1}</p>
                  <img src={pokeball} alt='' />
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Pokemon;
