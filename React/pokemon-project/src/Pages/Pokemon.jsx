<div>
  <form onSubmit={(e) => e.preventDefault()} className="search-form">
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
</div>;
