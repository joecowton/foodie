import React, { Component } from 'react';
import { connect } from 'react-redux';

class Prod extends Component {
  render(){
    if(this.props.data){
        return (
          this.props.data.map((product) => {
            <div className="product">
              <img  style={{width: 100, height: 100}} src={product.image} alt={"product"}></img>
              <p> {product.title}</p>
              <p> {product.quantity}</p>
              <p> {product.price}</p>
              <p> {product.expiryDate}</p>
            </div>
          })
        )
      }
      else {
          return null;
      }

  }

}

function mapStateToProps({data}) {
  return { data }
}

export default connect(mapStateToProps) (Prod);
