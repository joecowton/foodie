import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
  render(){
    console.log(this.props.auth)
    return (
      <a className="navbar-brand" href="/">Foodie</a>

    )
  }
}

function mapStateToProps({auth}) {
  return { auth }
}

export default connect(mapStateToProps) (User);
