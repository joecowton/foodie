import React, { Component } from 'react';
import Products from '../Products/Products'

class Tesco extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Products products={this.props.tescoprods}/>
      </div>
    )
  }
}

export default Tesco;
