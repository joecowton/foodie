import React from 'react';
import './Product.css';

const Product = (props) => {

  return (
    <div className='Product'>
    <img style={{width: 100, height: 100}} src={props.image}></img>
    <p>Product name: {props.name}</p>
    <p>Quantity: {props.quantity}</p>
    <p>Price: {props.price}</p>
    <p>Date: {props.date}</p>
    </div>
  )
};

export default Product;
