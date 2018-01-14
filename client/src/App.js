import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import User from './components/User/User'
import Prod from './components/User/Prod'
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
    productsData: this.props.data,
  }
  console.log(this.props.data);
}

  componentDidMount(){
    this.props.fetchUser(

    );
    this.props.fetchData(
      this.setState(
        {
          productsData: {}
        }
      )
    );
    console.log(this.props);
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
    // if (!this.state.productsData) {
    //   return <p> Loading Products...</p>
    // } else {

      const productsList = <Products
        prod={this.state.productsData}
      />
      const selectionList = <Products
      products={this.state.selection}
      />
      console.log(this.props);
      const alerts = <Alerts/>
      const navBar = <NavBar />
      const searchFilter = <SearchFilter />
      const user = <User />
      const prod = <Prod />

      return (
        <div className="App">
          <div className ="container">
            <BrowserRouter>
              <div>
                {user}
                {navBar}
                {prod}
              </div>
            </BrowserRouter>
          </div>
          {searchFilter}
          {alerts}
          <button onMouseOver={() => this.filter('all')}>All</button>
          <button onMouseOver={() => this.filter('dairy')}>Dairy</button>
          <button onMouseOver={() => this.filter('protein')}>Protein</button> <br />
          {/* {selectionList}
          <ToggleDisplay show={this.state.hideList}>
            {productsList} */}
          {/* </ToggleDisplay> */}
        </div>
      );
    }
  }




export default connect(null, actions)(App);
