import React from 'react';
import './NavBar.css';

const pages = ['Search', 'Sign in with Google', 'Logout'];

const NavBar = (props) => {

  const navLinks = pages.map(page => {
    return (
      <div>
        <a className="navbar-brand" href={'/' + page}>{page}</ a>
      </div>
    )
  });
  return (

    <nav className="NavBar">
      <div className="navbar navbar-expand-sm navbar-dark bg-secondary mb-5">
          <a className="navbar-brand" href="/">Foodie</a>
          {navLinks}
      </div>
    </nav>
  )
}

export default NavBar;
