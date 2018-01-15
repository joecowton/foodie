import React, { Component } from 'react';
import Products from '../Products/Products'
import ToggleDisplay from 'react-toggle-display';

class LandingPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      productsData: null,
      selection: [],
      productAPI: '/api/products'
    }
  this.setAPI = this.setAPI.bind(this);

  }
  setAPI(string) {
    this.setState({productAPI: string});
  }

  getAPI(){
    return this.state.productAPI
  }

  componentDidMount(){
    fetch('/api/products')
      .then(data => data.json())
      .then(productsData => {
        this.setState({ productsData })
      })
  }

  filter = query => {
    this.state.selection = [];
    this.state.productsData.map( product => {
      if(product.category === query || query === 'all'){
        this.state.selection.push(product);
      };
      this.setState({filterSel: this.state.selection, hideList: false});
    });
  }

  remountComponent(api){
    fetch(api)
    .then(data => data.json())
    .then(data => {
      this.setState({
        productsData: data
      })
    })
  }

  categoryArrangement(){
    const categories = ['all', 'dairy', 'protein', 'vegetables', 'fruits', 'desserts', 'snacks'];
    const categoryLinks = categories.map( category => {
      return (
        <button onClick={() => this.filter(category)}>
        {category}
        </button>
      )
    });
    return <div>{categoryLinks}</div>
  }

  render() {
    const productsList = <Products products={this.state.productsData} />
    const selectionList = <Products products={this.state.selection} />

    if(!this.state.productsData){
      return <h3>Loading products...</h3>
    } else {
      return (
        <div>
          <div>
          Arrange By:
            <button onClick={ () => this.remountComponent('/api/products') }> expiry date </button>
            <button onClick={ () => this.remountComponent('/api/products/price/decending') }> price decending </button>
            <button onClick={ () => this.remountComponent('/api/products/price/ascending') }> price ascending </button>
          </div>
        <div>
          {this.categoryArrangement()}
        </div>
        <br />
          {selectionList}
        <ToggleDisplay show={this.state.hideList}>
          {productsList}
        </ToggleDisplay>
        </div>
      )
    }
  }
}

export default LandingPage;
