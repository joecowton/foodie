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
    <img style={{width: 150, height: 150}} src={props.image} alt={"product"}></img>
    <ul>
    {props.name}<br />
    £{props.price} / {props.quantity}<br />
    {props.description}<br />
    {props.date}<br />
    </ul>
    <button onClick={() => addToWishlist(props)}>Add to shopping list</button>
    </div>
  )
};

export default Product;
