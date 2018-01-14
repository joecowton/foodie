import React, { Component } from 'react';
import { connect } from 'react-redux';

class Products extends Component {
  render(){
    if(this.props.data){
      return (
        <div>

          {this.props.data.map((product) => (
              <Products
                image={product.image}
                name={product.title}
                quantity={product.quantity}
                price={product.price}
                date={product.expiryDate}
                key={product.id}
              />
            ))
          }
        </div>
      );
    }
      else {
        return null;
      }
    }
  }

  function mapStateToProps({data}) {
    return { data }
  }

  export default connect(mapStateToProps) (Products);
