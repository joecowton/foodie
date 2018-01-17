import React, { Component } from 'react';
import List from './List';
import axios from 'axios';


class ShopList extends Component {
  constructor(props){
    super(props);
    this.products = this.products.bind(this);
  }

    products(){
      const list = this.props.products.map( product => {
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
      });
      const remount= this.props.remount;
      return <div>{list}{remount}</div>
    };

    render() {
      return(
        <div>
        <br/>
        {this.products()}
        </div>
      )

  }
}

export default ShopList
