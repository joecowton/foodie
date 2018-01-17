import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class User extends Component {
  constructor(props){
    super(props);
    this.state = {
       diet: "none"
    }
  }

  addToDiet(diet){
    var self = this
    axios.put('/api/user/updateDiet/',{
        diet: diet
    }).then(function(response){
      console.log(response);
       self.setState({diet: response.data})
    })
  }

  render(){
    if(this.props.auth){
      return (
        <div className='User'>
            <p><img style={{width: 100, height: 100}} src={this.props.auth.image}alt="avatar"></img></p>
            <p>Name: {this.props.auth.name}</p>
            <p>Email: {this.props.auth.email}</p>
            <p>Diet: {this.state.diet}</p>
            <button className="vegan" onClick={()=> {this.addToDiet("vegan")}}>Vegan</button>
            <button className="vegetarian" onClick={()=> {this.addToDiet("vegeterian")}}>Vegetarian</button>
            <button className="gluten-free" onClick={()=> {this.addToDiet("gluten-free")}}>Gluten Free</button>
        </div>
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
