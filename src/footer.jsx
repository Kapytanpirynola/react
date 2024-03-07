import React from 'react';

function Footer() {
  return (
    <footer className="bs-dark-bg-subtle text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Trailer Movies</h5>
            <p>Discover the latest movie trailers and stay up to date with the latest releases.</p>
          </div>
          <div className="col-md-4">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Movies</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>Email: info@trailermovies.com</p>
            <p>Phone: +52-614-496-64-33</p>
          </div>
        </div>
        <hr/>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 Trailer Movies. All rights reserved.</p>
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
