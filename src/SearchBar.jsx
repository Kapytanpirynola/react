// SearchBar.js
import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search by title" value={searchTerm} onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
