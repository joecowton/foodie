import React, { Component } from 'react';
import Products from '../Products/Products'

class LandingPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      productsData: null,
      selection: [],
      productAPI: '/api/products'
    }
  this.searchByText = this.searchByText.bind(this);
  }

  componentDidMount(){
    fetch(this.state.productAPI)
      .then(data => data.json())
      .then(productsData => {
        this.setState({ productsData })
        this.setState({
          selection: productsData
        })
      })
  }

  remountComponent(api){
    fetch(api)
    .then(data => data.json())
    .then(data => {
      this.setState({
        selection: data
      })
    })
  }

  filter = query => {
    let selectionList = [];
    this.state.productsData.map( product => {
      if(product.category === query || query === 'all'){
        selectionList.push(product);
      };
      return this.setState({selection: selectionList});
    });
  }

  categoryArrangement(){
    const categories = ['all', 'dairy', 'meat', 'vegetables', 'fruits', 'desserts', 'snacks'];
    const categoryLinks = categories.map( category => {
      return (
        <button key={category} className="btn btn-success quickSearch" onClick={() => {
            this.filter(category)
          }}>
          {category}
        </button>
      )
    });
    return <div>{categoryLinks}</div>
  }

  searchByText(event){
    event.preventDefault();
    var searchPhrase = event.target.value;
    var selectedList = [];
    this.state.productsData.forEach(element => {
      var keys = Object.keys(element)
      keys.forEach(function(key) {
        if(typeof element[key] === "string"){
          if(element[key].includes(searchPhrase) && element !== selectedList[selectedList.length-1]){
            selectedList.push(element)
          }
        }
      });
    });
    this.setState({
      selection: selectedList
    })
  }

  render() {
    const products = <Products products={this.state.selection}/>
    const quickSerachButtons = <div>
        <button key="expiry-key" className="btn quickSearch" onClick={ () => this.remountComponent(this.state.productAPI) }> expiry date </button>
        <button key="price-desc-key" className="btn quickSearch" onClick={ () => this.remountComponent('/api/products/price/decending') }> price descending </button>
        <button key="price-asc-key" className="btn quickSearch" onClick={ () => this.remountComponent('/api/products/price/ascending') }> price ascending </button>
      </div>

    if(!this.state.productsData){
      return <h3>Loading products...</h3>
    } else {
      return (
        <div className="Landing-Page">
            <input id="search-filter" type="text" placeholder=" search for product ... " onChange={this.searchByText} /><br />
          <br />
            {quickSerachButtons}
            <div>
              {this.categoryArrangement()}
            </div>
          <br />
          {products}
        </div>
      )
    }
  }
}

export default LandingPage;
