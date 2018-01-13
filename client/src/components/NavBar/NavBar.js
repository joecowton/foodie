import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NavBar.css';

class NavBar extends Component {
  renderContent() {
    switch(this.props.auth){
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google">Login With Google</a></li>
        )
      default:
        return <li><a href="/api/logout">Logout</a></li>

    }
  }

  render() {
    console.log(this.props.auth);

    return (
      <nav className="NavBar">
        <div className="navbar navbar-expand-sm navbar-dark bg-secondary mb-5">
            <a className="navbar-brand" href="/">Foodie</a>
            <a className="navbar-brand" href="/"> Products </a>
            <a className="navbar-brand" href="/api/current_user"> Profile </a>
            <a className="navbar-brand" href="/auth/google"> Sign In With Google </a>
            <a className="navbar-brand" href="/api/logout"> Logout </a>
            <ul className="right">
              {this.renderContent()}
            </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({auth}) {
  return { auth }
}

export default connect(mapStateToProps) (NavBar);
