import React from 'react';
import Product from './Product/Product';
import axios from 'axios';


const Products =  (props) => props.products.map( (product) => {


  return (
    <div>
    <Product
    id={product.id}
    image={product.image}
    name={product.name}
    quantity={product.UnitQuantity}
    price={product.price}
    description={product.description ? product.description[0] : "Sorry! No Description Available"}
    // date={product.expiryDate}
    key={product.id}
    />
    </div>
  )
})
export default Products
