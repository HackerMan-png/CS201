import React, { useState } from 'react'
import { useAppContext } from "../util/context";

const SearchBar = () => {
  const {query, setQuery, error, setShowPokemon} = useAppContext()
  
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="search-form">
        <input
          type="text"
          className="form-input"
          value={query}
          onFocus={() => setShowPokemon(true)}
          onBlur={() => setShowPokemon(false)}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        {error.show && <div className="error">{error.msg}</div>}
      </form>
    </div>
  );
};

export default SearchBar;
