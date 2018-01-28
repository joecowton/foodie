import React, { Component } from 'react';

import Product from './Product/Product';

class Products extends Component {
  constructor(props){
    super(props);
    this.products = this.products.bind(this);
    }

    products(){
      const list = this.props.products.map( product => {
        return (
        <div>
          <Product
            id={product.id}
            image={product.image}
            name={product.name}
            quantity={product.UnitQuantity}
            price={product.price}
            description={product.PromotionDescription}
            date={product.expiryDate}
            key={product.id}
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
