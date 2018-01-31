import React, { Component } from 'react';
import List from './List/List';

class ShopList extends Component {

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
      return <div>{list}</div>
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
