import React from 'react';
import AM from '../src/AM.jpg'

const InformacionPagina = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="mb-4">About AMSOFTWARELAB</h2>
            <p className="lead">AMSOFTWARELAB is a leading software development company that specializes in providing innovative and cutting-edge technology solutions to meet the needs of its customers. <br/> Our goal is to promote digital transformation in all industries, offering high-quality products and services that increase the efficiency, productivity and competitiveness of our clients.

            <br/>Our vision is to be recognized as a benchmark in the field of software development, standing out for our excellence in the design of personalized solutions adapted to the specific needs of each client.
                We are committed to working closely with our clients, understanding their objectives and needs to offer solutions that exceed their expectations.</p>
          </div>
          <div className="col-lg-6">
          <img src={AM} alt="AM" className="navbar-logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformacionPagina;
