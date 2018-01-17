import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './Product.css';
import ShoppingList from './../../ShoppingList/ShoppingList';


class Product extends Component {
  constructor(props){
    super(props);
    }


    addToWishlist = (product) => {
      // <ShoppingList  prod={product.id}/>
      axios.post('/api/addwishlist', {
          id: this.props.id
      })
      .then(function(response) {
      })
      .catch(function(error) {
      });
    }

  render(){
    console.log("PRODUCT PROPS", this.props)
    return(
      <div className='Product'>
      <br/>
      <img style={{width: 200, height: 200}} src={this.props.image} alt={"product"}></img>
      <p>{this.props.name}</p>
      <p>£{this.props.price} / {this.props.quantity}</p>
      <p>{this.props.description}</p>
      {/* <p>Date: {props.date}</p> */}
      <button onClick={() => this.addToWishlist(this.props)}>Add to shopping list</button>
      <br/>
      </div>
    )
  }

  }

export default Product;
