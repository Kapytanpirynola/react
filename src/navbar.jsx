import React from 'react';


class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="list.jsx" className="nav-link" target='_blank'>
              Chek-list
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
