import React from "react";
import { useStoryContext } from "../util/context";

const SearchBar = () => {
  const {query, setQuery, error} = useStoryContext()
  
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="search-form">
        <h2>Search Stories</h2>
        <input
          type="text"
          className="form-input"
          value={query}
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
