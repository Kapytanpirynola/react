import React from 'react';
import logo from '../src/logo.png'

const ImageComponent = () => {
  return (
    
    <div className='navbar-container'>
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </a>
    </div>
  );
}

export default ImageComponent;
