import React from 'react';
import Product from './Product/Product';


const Products =  (props) => props.products.map( (product) => {

  return (
    <Product
    image={product.image}
    name={product.name}
    quantity={product.UnitQuantity}
    price={product.price}
    description={product.description ? product.description[0] : "Sorry! No Description Available"}
    // date={product.expiryDate}
    key={product.id}
    />
  )
})
export default Products
