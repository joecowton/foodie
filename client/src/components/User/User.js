import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
  render(){
    console.log(this.props.auth)
    if(this.props.auth){
    return (
      <User
        name={this.props.auth.name}
      />
    )
      }
      else {
        return null;
      }
  
  }
}

function mapStateToProps({auth}) {
  return { auth }
}

export default connect(mapStateToProps) (User);
