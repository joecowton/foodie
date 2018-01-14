import React from 'react';
import { connect } from 'react-redux';

import './Product.css';

const Product = (props) => {
  console.log(props)  
  return (
    <div className='Product'>
      <img style={{width: 100, height: 100}} src={props.image} alt={"product"}></img>
      <p>Product name: {props.name}</p>
      <p>Quantity: {props.quantity}</p>
      <p>Price: {props.price}</p>
      <p>Date: {props.date}</p>
    </div>
  )
};

function mapStateToProps({data}) {
  return { data }
}

export default connect(mapStateToProps) (Product);
