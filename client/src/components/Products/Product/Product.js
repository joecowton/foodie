import React from 'react';
import axios from 'axios';
import './Product.css';

const Product = (props) => {

  function addToShoppinglist(product){
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
    <br/>
    <img style={{width: 200, height: 200}} src={props.image} alt={"product"}></img>
    <p>{props.name}</p>
    <p>£{props.price} / {props.quantity}</p>
    <p>{props.description}</p>
    <button onClick={() => addToShoppinglist(props)}>Add to shopping list</button>
    <br/>
    </div>
  )
};

export default Product;
