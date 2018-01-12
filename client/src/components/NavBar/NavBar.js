import React from 'react';
import './NavBar.css';

const pages = ['Foodie', 'Search', 'Google Login', 'Logout'];

const NavBar = (props) => {

  const navLinks = pages.map(page => {
    return (
      <div>
        <a href={'/' + page}>
          {page}
        </ a>
      </div>
    )
  });
  return (

    <nav classNameName="NavBar">
      <div classNameName="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
          <a classNameName="navbar-brand" href="/">Foodie</a>
          {navLinks}
      </div>
    </nav>
  )
}

export default NavBar;
