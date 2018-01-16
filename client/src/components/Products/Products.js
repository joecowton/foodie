import React, { Component } from 'react';

import Product from './Product/Product';
import axios from 'axios';

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
            description={product.description ? product.description[0] : "Sorry! No Description Available"}
            // date={product.expiryDate}
            key={product.id}
            fetch={this.props.fetch}
          />
          </div>
        )
      });
      const fetch = <Product fetch={this.props.fetch} />
      return <div>{list}{fetch}</div>
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
