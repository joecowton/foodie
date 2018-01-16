import React, { Component } from 'react';
import Products from '../Products/Products'

class LandingPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      productsData: null,
      selection: [],
      currentCategory: "all",
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
        this.setState({
          selection: productsData
        })
      })
  }

  filter = query => {
    this.state.selection = [];
    this.state.productsData.map( product => {
      if(product.category === query || query === 'all'){
        this.state.selection.push(product);
      };
      this.setState({filterSel: this.state.selection});
    });
  }

  remountComponent(api, category){
    fetch(api)
    .then(data => data.json())
    .then(data => {
      this.setState({
        selection: data,
        currentCategory: category
      })
    })
  }

  setCategory(category){
    this.setState({
      currentCategory: category
    })
  }

  categoryArrangement(){
    const categories = ['all', 'dairy', 'meat', 'vegetables', 'fruits', 'desserts', 'snacks'];
    const categoryLinks = categories.map( category => {
      return (
        <button className="btn btn-success quickSearch" onClick={() => {
            this.filter(category)
            this.setCategory(category)
          } }>
        {category}
        </button>
      )
    });
    return <div>{categoryLinks}</div>
  }
  render() {

    if(!this.state.productsData){
      return <h3>Loading products...</h3>
    } else {
      console.log(this.state.currentCategory)
      return (
        <div class="Landing-Page">
          Sort by:
          <button className="btn quickSearch" onClick={ () => {
              this.remountComponent('/api/products', this.state.currentCategory)
            } }> expiry date </button>
          <button className="btn quickSearch" onClick={ () => {
              this.remountComponent('/api/products/price/decending', this.state.currentCategory)
            } }> price decending </button>
          <button className="btn quickSearch" onClick={ () => this.remountComponent('/api/products/price/ascending', this.state.currentCategory) }> price ascending </button>
          <br/>
        <div>
          <br/>
          {this.categoryArrangement()}
        </div>
          <br/>
          <Products products={this.state.selection}/>
        </div>
      )
    }
  }
}

export default LandingPage;
