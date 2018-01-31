import React, { Component } from 'react';

import Product from './Product/Product';

class Products extends Component {

    products(){
      const list = this.props.products.map( product => {
        return (
        <div>
          <Product
            id={product._id}
            image={product.image}
            name={product.name}
            quantity={product.UnitQuantity}
            price={product.price}
            description={product.PromotionDescription}
            date={product.expiryDate}
            key={product._id}
          />
        </div>
        )
      });
      return <div>{list}</div>
    };

    render() {
      return(
        <div>
        {this.products()}
        </div>
      )

  }
}
  export default Products
