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
<<<<<<< HEAD
    <br/>
    <img style={{width: 200, height: 200}} src={props.image} alt={"product"}></img>
    <p>{props.name}</p>
    <p>£{props.price} / {props.quantity}</p>
    <p>{props.description}</p>
    <button onClick={() => addToShoppinglist(props)}>Add to shopping list</button>
    <br/>
=======
    <img style={{width: 150, height: 150}} src={props.image} alt={"product"}></img>
    <ul>
    {props.name}<br />
    £{props.price} / {props.quantity}<br />
    {props.description}<br />
    {props.date}<br />
    </ul>
    <button onClick={() => addToWishlist(props)}>Add to shopping list</button>
>>>>>>> master
    </div>
  )
};

export default Product;
