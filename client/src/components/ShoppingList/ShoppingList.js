import React, { Component } from 'react';
import Products from '../Products/Products';
import { connect } from 'react-redux';


class ShoppingList extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: null,
      list: []
    }
    this.favorites = this.favorites.bind(this)
  }

  componentDidMount(){
    console.log("HEREEEEEEEEEEEE")
    fetch('/api/products')
      .then(data => data.json())
      .then(products => {
        console.log("sdgsdg",products)
        this.setState({products})
      });
    }

  favorites = () => {
    const list = [];
    return (
      this.props.auth.product_id.forEach( id => {
      this.state.products.forEach( product => {
        if(product.id === id) {
          this.state.list.push(product);
        }
      })
    })
    )
  }

  render(){
    console.log("YESSSSSSSS", this.props.prod)
    const products = <Products products={this.state.list} />
    if(this.state.products && this.props.auth){
      return (
        <div>
        {this.favorites()}
        {products}
        </div>
      )
    } return <h3>Loading products...</h3>
    }
}

function mapStateToProps({auth}) {
  return { auth }
}


export default connect(mapStateToProps) (ShoppingList);
