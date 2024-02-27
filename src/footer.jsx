import React from 'react';

function Footer() {
  return (
    <footer className="bg-secondary text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Trailer Movies</h5>
            <p>Discover the latest movie trailers and stay up to date with the latest releases.</p>
          </div>
          <div className="col-md-4">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Películas</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p>Correo electrónico: info@trailermovies.com</p>
            <p>Teléfono: +52-614-496-64-33</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 Trailer Movies. Todos los derechos reservados.</p>
          </div>
          <div className="col-md-12 text-center">
            <p> Page created by AMSOFTWARELAB </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
