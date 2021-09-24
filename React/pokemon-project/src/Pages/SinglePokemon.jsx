import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../util/useFetch';
import { useAppContext } from '../util/context';

const SinglePokemon = () => {
  const { loading, pokemonName } = useAppContext();
  console.log(pokemonName);

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
  // console.log(pokemon);
  return (
    <div className='pokemon-info'>
      <h1 className='pokemon-name'>{name}</h1>
      <div className='sprite'>
        <img src={sprites?.front_default} alt='' />
      </div>
      <div className='types'>
        {types?.map((type) => {
          return (
            <div className={`${type.type.name} type`}>
              {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
            </div>
          );
        })}
      </div>
      <div className='abilities'>
        <h4>Abilities</h4>
        {abilities?.map((ability) => {
          if (ability.is_hidden) {
            return (
              <div className='ability'>
                <p>
                  Hidden Ability: <br />
                  {ability.ability.name
                    .split('-')
                    .map((word) => word[0].toUpperCase() + word.slice(1))
                    .join(' ')}
                </p>
              </div>
            );
          } else {
            return (
              <div className='ability'>
                <p>
                  {' '}
                  Ability: <br />
                  {ability.ability.name
                    .split('-')
                    .map((word) => word[0].toUpperCase() + word.slice(1))
                    .join(' ')}
                </p>
              </div>
            );
          }
        })}
      </div>

      <div className='physical-info'>
        <h4>Physical Information</h4>
        <div className='height'>
          <p className='height-text'>{`${Math.floor(
            ((+height / 10) * 39.37) / 12
          )}'${Math.round(((+height / 10) * 39.37) % 12)}" ${
            +height / 10
          }m`}</p>
          <h4>Height</h4>
        </div>

        <div className='weight'>
          <p className='weight-text'>{`${((+weight / 10) * 2.205).toFixed(
            1
          )}lbs  ${+weight / 10}kg`}</p>
          <h4>Weight</h4>
        </div>
      </div>
      <hr />
      <div className='moves'>
        <h3>Moves</h3>
        {moves?.map((move) => {
          return (
            <div className='move'>
              {move.move.name
                .split('-')
                .map((word) => word[0].toUpperCase() + word.slice(1))
                .join(' ')}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SinglePokemon;
