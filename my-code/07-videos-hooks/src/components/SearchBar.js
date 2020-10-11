import React, { useState } from 'react';

const SearchBar = ({onSearchBarSubmit}) => {
  const [ term, setTerm ] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchBarSubmit(term);
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label htmlFor="search">Video Search</label>
          <input 
            id="search"
            name="search" 
            type="search" 
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;