import React, { useState } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import GenreFilter from './GenreFilter';
import Footer from './footer'
import Navbar from './navbar';
import './navbar.css';
import './footer.css';
import './App.css'; 
import './GenreFilter.css'; 
import './SearchBar.css';


// Define moviesData
const moviesData = [
  { id: 1, title: 'Scarface', description: 'A gripping tale of power, greed, and betrayal in the world of organized crime.', year: 1983, genre: 'Crime/Drama' },
  { id: 2, title: 'Goodfellas', description: 'Follows the rise and fall of a young man\'s journey into the mafia underworld.', year: 1990, genre: 'Crime/Drama' },
  { id: 3, title: 'The Departed', description: 'A tense thriller about undercover agents and double-crosses within the Boston criminal underworld.', year: 2006, genre: 'Crime/Drama' },
  { id: 4, title: 'Pulp Fiction', description: 'A nonlinear narrative intertwining the lives of various characters in the criminal underworld.', year: 1994, genre: 'Crime/Drama' },
  { id: 5, title: 'The Godfather: Part II', description: 'Explores the complexities of power and family within the Italian-American mafia.', year: 1974, genre: 'Crime/Drama' },
  { id: 6, title: 'Heat', description: 'A cat-and-mouse game between a seasoned detective and a skilled thief planning the ultimate heist.', year: 1995, genre: 'Crime/Drama' },
  { id: 7, title: 'Casino', description: 'Chronicles the rise and fall of a Las Vegas casino boss and his tumultuous relationships.', year: 1995, genre: 'Crime/Drama' },
  { id: 8, title: 'The Untouchables', description: 'Eliot Ness and his team\'s pursuit of Al Capone during the Prohibition era.', year: 1987, genre: 'Crime/Drama' },
  { id: 9, title: 'Reservoir Dogs', description: 'A heist gone wrong leads to suspicion and betrayal among a group of criminals.', year: 1992, genre: 'Crime/Drama' },
  { id: 10, title: 'American Gangster', description: 'Based on the true story of a Harlem drug lord and the detective determined to bring him down.', year: 2007, genre: 'Crime/Drama' }
];

function App() {
  const [movies] = useState(moviesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedGenre === '' || movie.genre === selectedGenre)
  );

  return (
    <div>
      <SearchBar/>
      <div>
      <Navbar/>
      </div>
      <GenreFilter/>
      <div>
      </div>
    <br/>
      <h1 className='title'>Movie List</h1>
      <div>
      <MovieList movies={filteredMovies} />

      </div>
      <Footer/>
    </div>
  );
}

export default App;


