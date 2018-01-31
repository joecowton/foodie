import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './User.css';
import * as actions from '../../actions';



class User extends Component {
  constructor(props){
    super(props);
    this.state = {
       diet: ""
    }
  }

  componentDidMount() {
    axios.get('/api/current_user')
      .then(user => {
        this.setState({ diet: user.data.diet })
      })
  }

  addToDiet(diet) {
    var self = this
    axios.put('/api/user/updateDiet/', {
        diet: diet
    }).then( response => {
       self.setState({ diet: response.data });
    });
  }

  render() {
    let userInfo = <div>

    </div>
    if(this.props.auth) {
      return (
        <div className='User'>
          <br />
          <img className="user-image" style={{width: 250, height: 250}} src= { this.props.auth.image }alt="avatar"></img>
          <p> { this.props.auth.name } </p>
          <p> { this.props.auth.email } </p>
          <p> { this.state.diet } </p>
          <button className="btn btn-danger" onClick={()=> {this.addToDiet("Vegan")}}>Vegan</button>
          <button className="btn btn-danger" style={{margin: 5}} onClick={()=> {this.addToDiet("Vegetarian")}}>Vegetarian</button>
          <button className="btn btn-danger" onClick={()=> {this.addToDiet("Gluten-Free")}}>Gluten Free</button>
        </div>
      )
    } else {
      return null
    }
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}


export default connect(mapStateToProps, actions)(User);
