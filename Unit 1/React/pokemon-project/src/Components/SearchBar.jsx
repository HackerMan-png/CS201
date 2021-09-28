import React, { useState } from 'react';
import Pokemon from '../Components/Pokemon';
import { useAppContext } from '../util/context';

const SearchBar = () => {
  const { query, setQuery, error, setShowPokemon } = useAppContext();

  return (
    <div className='searchbar'>
      <form onSubmit={(e) => e.preventDefault()} className='search-form'>
        <input
          type='text'
          className='form-input'
          value={query}
          onFocus={() => setShowPokemon(true)}
          onBlur={() =>
            setTimeout(() => {
              setShowPokemon(false);
            }, 500)
          }
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        {error.show && <div className='error'>{error.msg}</div>}
        <Pokemon />
      </form>
    </div>
  );
};

export default SearchBar;
