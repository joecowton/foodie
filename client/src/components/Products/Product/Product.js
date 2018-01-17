import React from 'react';
import axios from 'axios';
import './Product.css';

const Product = (props) => {

  function addToWishlist(product){
    axios.post('/api/addwishlist', {
        id: `${product.id}`
    })
    .then(function(response) {
    })
    .catch(function(error) {
    });
  }

  return (

    <div className='Product'>
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
