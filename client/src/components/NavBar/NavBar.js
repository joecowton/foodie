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
          <a href="/auth/google">Login With Google</a>
        )
      default:
        return <a href="/api/logout">Logout</a>
    }
  }

  user(){
    return this.props.auth ? 'Logged in as ' + this.props.auth.name : ''
  }

  render() {
    return (
      <nav className="NavBar">
        <div className="navbar navbar-expand-sm navbar-dark bg-secondary mb-5">
            <li className="navbar-brand" href="/">Foodie</li>
            <li className="navbar-brand" href="/"> Products </li>
            <li className="navbar-brand" href="/user"> Profile </li>
            <li className="navbar-brand">{this.renderContent()}</li>
            <li className="navbar-brand">  {this.user()}</li>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({auth}) {
  return { auth }
}

export default connect(mapStateToProps) (NavBar);
