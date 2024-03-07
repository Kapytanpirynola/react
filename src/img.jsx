import React from 'react';
import logo from '../src/logo.png'
import { NavLink } from 'react-router-dom';

const ImageComponent = () => {
  return (
    <div className='image-container'>
      <a class="navbar-brand" href="#"><img src={logo}/></a>
    </div>
  );
}

export default ImageComponent;
