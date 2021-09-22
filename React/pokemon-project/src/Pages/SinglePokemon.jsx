import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../util/useFetch';
import { useAppContext } from '../util/context';

const SinglePokemon = () => {
  const { pokemon, loading, pokemonName } = useAppContext();
  console.log(pokemonName);
  console.log(pokemon);
  if (loading) {
    return <div className='loading'></div>;
  }
  const {
    abilities,
    base_experience,
    forms,
    height,
    held_items,
    id: pokeId,
    moves,
    name,
  } = pokemon;
  return (
    <div className='pokemon-info'>
      <h1>{name}</h1>
    </div>
  );
};

export default SinglePokemon;
