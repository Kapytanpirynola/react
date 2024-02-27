import React, { useEffect, useState } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';

function App() {
  const API_URL = 'https://api.themoviedb.org/3'
  const API_KEY = 'b586aeeb6751dae9b4be864b17537cc0'
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'


  // variables de estado 
  const[movies, setMovies] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movie"});
  const [playing, setPlaying] = useState(false);

  // funcion para realizar la peticion por get a la api
  const fetchMovies = async(searchKey) => {
    const type =  searchKey ? "search" : "discover"
    const {data : { result },
  } = await axios.get(`${API_URL}/${type}/movie`, {
    params: {
      api_key: API_KEY,
      query : searchKey,
    },
  });

  setMovies(result)
  setMovie(result[0])

  }

  useEffect(()=>{
    fetchMovies();
  },[])

  return (
    <div>
      {/*contenedor de los posters de las pelicuals*/}
      <div className='container mt-3'>
        <div className='row'>
          {movies.map((movie) =>(
            <div key={movie.id} className="col-md-4 mb-3">
              <img src={`${URL_IMAGE + movie.poster_path}`}  alt="" height={600} width="100%"/>
              <h4 className='text_center'>{movie.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;


