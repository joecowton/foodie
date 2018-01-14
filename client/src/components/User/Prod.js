import React, { Component } from 'react';
import { connect } from 'react-redux';

class Prod extends Component {
  render(){
    console.log(this.props.data);
    if(this.props.data){
    return (
     <ul>
         {this.props.data.map((product) => (
            <div key={product.id}>
              <img  style={{width: 100, height: 100}} src={product.image} alt={"product"}></img>
              <p> {product.name}</p>
              <p> {product.quantity}</p>
              <p> {product.price}</p>
              <p> {product.description}</p>
            </div>
           ))
         }
     </ul>
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

export default connect(mapStateToProps) (Prod);
