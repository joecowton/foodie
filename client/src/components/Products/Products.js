import React from 'react';
import Product from './Product/Product';


const Products =  (props) => props.products.map( (product) => {
  console.log(props)
  return (
    <Product
    image={product.image}
    name={product.title}
    quantity={product.quantity}
    price={product.price}
    date={product.expiryDate}
    key={product.id}
    />
  )
})
export default Products;
