import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions';
// import './List.css';

class List extends Component {
  constructor(props){
    super(props);

    }



    removeFromlist = (product) => {
      // <ShoppingList  prod={product.id}/>
      axios.post('/api/deleteitem', {
          id: `${product.id}`
      })
      .then(function(response) {
        console.log("DELETE RESPONSE",response);
      })
      .catch(function(error) {
      });
    }

  render(){
    return(
      <div className='Product'>
      <img style={{width: 175, height: 175}} src={this.props.image} alt={"product"}></img>
      <br/>
      {this.props.name}
      £{this.props.price} for {this.props.quantity}
      <br/>
      {this.props.description}
      {/* <p>Date: {props.date}</p> */}
      <br/>
      <button onClick={() => this.removeFromlist(this.props)}>Remove from shopping list</button>
      </div>
    )
  }

  }

  function mapStateToProps({auth}) {
    return { auth }
  }

  export default connect(mapStateToProps, actions) (List);
