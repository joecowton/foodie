import React from 'react';
import './Product.css';

const Product = (props) => {
  return (

    <div className='Product'>
    <img style={{width: 90, height: 90}} src={props.image} alt={"product"}></img>
    <p>{props.name}</p>
    <p>Quantity: {props.quantity}</p>
    <p>Price: £{props.price}</p>
    <p>Description: {props.description}</p>
    {/* <p>Date: {props.date}</p> */}
    </div>
  )
};

export default Product;
