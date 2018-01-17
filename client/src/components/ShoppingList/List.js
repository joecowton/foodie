import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ToggleDisplay from 'react-toggle-display';

// import './List.css';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      hide: true

    }

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
      this.setState({hide: false});

    }

  render(){
    return(

      <div className='Product'>
      <ToggleDisplay show={this.state.hide}>
      <br/>
      <img style={{width: 200, height: 200}} src={this.props.image} alt={"product"}></img>
      <p>{this.props.name}</p>
      <p>£{this.props.price} / {this.props.quantity}</p>
      <p>{this.props.description}</p>
      {/* <p>Date: {props.date}</p> */}
      <button onClick={() => this.removeFromlist(this.props)}>Remove from shopping list</button>
      <br/>
      </ToggleDisplay>
      </div>

    )
  }

  }

  function mapStateToProps({auth}) {
    return { auth }
  }

  export default connect(mapStateToProps, actions) (List);
