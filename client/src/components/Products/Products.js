import React from 'react';
import Product from './Product/Product';
import './Productss.css';


const Products =  (props) => props.products.map( (product) => {
  return (
      <div className = "wrapper">
        <Product
        image={product.image}
        name={product.title}
        quantity={product.quantity}
        price={product.price}
        date={product.expiryDate}
        key={product.id}
        />
      </div>

  )
})
export default Products
