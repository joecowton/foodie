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
    return(
      <div className="Product">
        <img style={{width: 165, height: 165}} src={this.props.image} alt={"product"}></img>
        <br />
        {this.props.name}<br />
        £{this.props.price} for {this.props.quantity}<br />
        {this.props.description}, {this.props.date}<br />
        <button onClick={() => this.addToWishlist(this.props)}>Add to shopping list</button>
      </div>
    )
  }
};


export default Product;
