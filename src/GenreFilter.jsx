import React from 'react';


function GenreFilter({ selectedGenre, setSelectedGenre }) {
  const handleChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <div className="genre-filter">
      <select value={selectedGenre} onChange={handleChange}>
        <option value="">All Genres</option>
        <option value="Action">Action</option>
        <option value="Romance">Romance</option>
        <option value="Crime">Crime</option>
        {/* Add more genre options as needed */}
      </select>
    </div>
  );
}

export default GenreFilter;
