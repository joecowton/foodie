import React, { Component } from 'react';
import List from './List';

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
