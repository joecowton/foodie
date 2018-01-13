import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import User from './components/User/User'
import Alerts from './components/alerts/Alerts'
import Products from './components/Products/Products'
import SearchFilter from './components/Products/search-filter/SearchFilter'
import ToggleDisplay from 'react-toggle-display';
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    selection: [],
    productsData: null,
  }
}

  componentDidMount(){
    fetch('/api/products')
      .then(data => data.json())
      .then(data => {
        this.setState({
          productsData: data
        })
      })
    this.props.fetchUser();
  }

  filter = string => {
    if (this.state.productsData) {
      this.state.selection = [];
      this.state.productsData.map( (product) => {
        if(product.category === string || string === 'all'){
          this.state.selection.push(product);
        };
        this.setState({filterSel: this.state.selection, hideList: false});
      });
    } else {
      return <p> No Dairy Products available</p>
  }
}
  render() {
    if (!this.state.productsData) {
      return <p> Loading Products...</p>
    } else {

      const productsList = <Products
        products={this.state.productsData}
      />
      const selectionList = <Products
      products={this.state.selection}
      />
      console.log(this.props);
      const alerts = <Alerts/>
      const navBar = <NavBar />
      const searchFilter = <SearchFilter />
      const user = <User />

      return (
        <div className="App">
          <div className ="container">
            <BrowserRouter>
              <div>
                {user}
                {navBar}
              </div>
            </BrowserRouter>
          </div>
          {searchFilter}
          {alerts}
          <button onClick={() => this.filter('all')}>All</button>
          <button onClick={() => this.filter('dairy')}>Dairy</button>
          <button onClick={() => this.filter('protein')}>Protein</button> <br />
          {selectionList}
          <ToggleDisplay show={this.state.hideList}>
            {productsList}
          </ToggleDisplay>
        </div>
      );
    }
  }
}


export default connect(null, actions)(App);
