import React, { useEffect, useState } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
// COMPONENTES
import Footer from './footer';
import Price from './price';
import Navbar from './Navbar'; 

//ESTILO DE APP CON CSS PARA EL REPRODUCTOR DEL TRAILER
import'./App.css';
import './price.css'

function App() {
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = 'b586aeeb6751dae9b4be864b17537cc0';
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

  // variables de estado 
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: 'Loading Movie' });
  const [playing, setPlaying] = useState(false);

  // funcion para realizar la peticion por get a la api
  const fetchMovies = async (searchKey) => {
    const type =  searchKey ? 'search' : 'discover';
    const { data: { results } } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });

    setMovies(results);
    setMovie(results[0]);


    if(results.length) {
      await fetchMovie(results[0].id)
    }
  }

  //funcion de un solo objewto y mostrar el trailer con el reproductor de video
  const fetchMovie = async(id)=>{
    const {data} = await axios.get(`${API_URL}/movie/${id}`,{
      params:{
      api_key: API_KEY,
      append_to_response: "videos"
      }
    })

    if(data.videos && data.videos.results){
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0])
    }
    setMovie(data)
  }

  //funcion para visdualizar el trailer
  const selectMovie = async(movie) => {
    fetchMovie(movie.id)
    setMovie(movie)
    window.scrollTo(0,0)
  }

  //funcion para buscar peliculas
  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="bg-dark text-white">
      <Navbar />
      <h2 className='text-center mt-2 mb-1'>Trailer Movies</h2>
      {/* BUCADOR */}
      <form className='container mb-4 d-flex' onSubmit={searchMovies}>
         <input type="text" placeholder='Search' className="form-control mr-2" onChange={(e) => setSearchKey(e.target.value)} /> 
         <button className='btn btn-secondary'>Search</button>
      </form>

      {/*aqui va el contenedor de todo el banner y del reproductor de video*/}
            {/* esto es por prueba */}
            <div>
        <main>
          {movie ? (
            <div
              className="viewtrailer"
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
              }}
            >
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer.key}
                    className="reproductor container"
                    containerClassName={"youtube-container amru"}
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button onClick={() => setPlaying(false)} className="boton">
                    Close
                  </button>
                </>
              ) : (
                <div className="container">
                  <div className="">
                    {trailer ? (
                      <button
                        className="boton"
                        onClick={() => setPlaying(true)}
                        type="button"
                      >
                        Play Trailer
                      </button>
                    ) : (
                      "Sorry, no trailer available"
                    )}
                    <h1 className="text-white">{movie.title}</h1>
                    <p className="text-white">{movie.overview}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </main>
      </div>
      {/*contenedor de los posters de las peliculas*/}
      <div className='container mt-3'>
        <div className='row'>
          {movies.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-3" onClick={()=> selectMovie(movie)}>
              <img src={`${URL_IMAGE + movie.poster_path}`}  alt="" className="img-fluid" />
              <h4 className='text-center mt-2'>{movie.title}</h4>
            </div>
          ))}
        </div>
        <Price />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
