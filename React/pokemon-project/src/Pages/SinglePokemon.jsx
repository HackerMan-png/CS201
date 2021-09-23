import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../util/useFetch';
import { useAppContext } from '../util/context';

const SinglePokemon = () => {
  const { loading, pokemonName } = useAppContext();
  console.log(pokemonName);
  // console.log(pokemon);

  const { id } = useParams();
  const { pokemon } = useFetch(`pokemon/${id}`);

  if (loading) {
    return <div className='loading'></div>;
  }
  const {
    abilities,
    base_experience,
    height,
    held_items,
    id: pokeId,
    moves,
    name,
    sprites,
    stats,
    types,
    weight,
  } = pokemon;
  return (
    <div className='pokemon-info'>
      <h1 className='pokemon-name'>{name}</h1>
      <div className='side-info'>
        {/* <div className='types'>
          {types.map((type) => {
            <div className={type.name}>{type.name}</div>;
          })}
        </div> */}
        <p>{`${Math.floor(((+height / 10) * 39.37) / 12)}'${
          Math.round((+height / 10) * 39.37) % 12
        }" ${+height / 10}m`}</p>

        <p>{`${((+weight / 10) * 2.205).toFixed(1)}lbs  ${+weight / 10}kg`}</p>
      </div>
    </div>
  );
};

export default SinglePokemon;
