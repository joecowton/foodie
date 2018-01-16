import React from 'react';
import List from './List';
import axios from 'axios';


const ShopList =  (props) => props.products.map( (product) => {

  return (
    <div>
    <List
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
export default ShopList
