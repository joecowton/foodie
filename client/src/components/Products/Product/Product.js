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

    <div className="Product">
      <img style={{width: 165, height: 165}} src={props.image} alt={"product"}></img>
      <br />
      {props.name}<br />
      £{props.price} for {props.quantity}<br />
      {props.description} before {props.date}<br />
      <button onClick={() => addToWishlist(props)}>Add to shopping list</button>
    </div>
  )
};


export default Product;
