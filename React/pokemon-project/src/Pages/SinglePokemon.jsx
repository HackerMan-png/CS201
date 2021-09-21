import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../util/useFetch';

const SinglePokemon = () => {
  const { id } = useParams();
  const { loading, pokemon } = useFetch(`pokemon/${id}`);
  console.log(pokemon);
  if (loading) {
    return <div className='loading'></div>;
  }
  // const {
  //   abilities,
  //   base_experience,
  //   forms,
  //   height,
  //   held_items,
  //   id: pokeId,
  //   moves,
  //   name,
  // } = pokemon;
  return (
    <div className='pokemon-info'>
      <h1>{pokemon.name}</h1>
    </div>
  );
};

export default SinglePokemon;
