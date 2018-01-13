import React from 'react';
import Product from './Product/Product';
import axios from 'axios';


const Products =  (props) => props.products.map( (product) => {

  function addToWishlist(product){
    axios.post('/api/addwishlist', {
        id: `${product.id}`
    })
    .then(function(response) {
    })
    .catch(function(error) {
    });
  }

  return (
    <div>
    <Product
    image={product.image}
    name={product.title}
    quantity={product.quantity}
    price={product.price}
    date={product.expiryDate}
    key={product.id}
    />
    <button onClick={() => addToWishlist(product)}>LOVE IT</button>
    </div>
  )
})
export default Products
