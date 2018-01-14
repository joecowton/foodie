import React from 'react';
import './NavBar.css';

const NavBar = (props) => {
  return (
    <nav className="NavBar">
      <div className="navbar navbar-expand-sm navbar-dark bg-secondary mb-5">
          <a className="navbar-brand" href="/">Foodie</a>
          <a className="navbar-brand" href="/"> Products </a>
          <a className="navbar-brand" href="/api/current_user"> Profile </a>
          <a className="navbar-brand" href="/auth/google"> Sign In With Google </a>
          <a className="navbar-brand" href="/api/logout"> Logout </a>
      </div>
    </nav>
  )
}

export default NavBar;
