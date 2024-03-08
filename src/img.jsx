import React from 'react';
import logo from '../src/logo.png'

const ImageComponent = () => {
  return (
    
    <div className='navbar-container'>
      <a className="navbar-brand" href="/App">
      <img src={logo} alt="Logo" className="navbar-logo" style={{ width: '100px', height: 'auto', marginLeft: '5px', marginTop:'5px'}} />

      </a>
    </div>
  );
}

export default ImageComponent;
