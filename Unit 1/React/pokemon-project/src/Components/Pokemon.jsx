import React, { useState, useEffect } from 'react';
import { useAppContext } from '../util/context';
import pokeball from '../assets/pokeball.png';
import { useFetch } from '../util/useFetch';
import { Link, useParams } from 'react-router-dom';

const Pokemon = () => {
  const [curPokemon, setCurPokemon] = useState('');

  const {
    query,
    pokemonList,
    setShowPokemon,
    showPokemon,
    setPokemonName,
    setLoading,
  } = useAppContext();

  return (
    <>
      {showPokemon && (
        <div className='pokemon-list'>
          {pokemonList
            .filter((pokemon) => pokemon.name.includes(query.toLowerCase()))
            .map((pokemon, i) => {
              return (
                <Link
                  to={`/pokemon/${pokemon.name}`}
                  onClick={() => {
                    setPokemonName(pokemon.name);
                    setLoading(true);
                    setShowPokemon(false);
                  }}
                >
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
                </Link>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Pokemon;
