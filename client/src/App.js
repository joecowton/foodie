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
    fetch('/api/products/default')
      .then(data => data.json())
      .then(data => {
        this.setState({
          productsData: data
        })
      })
    this.props.fetchUser();
  }

  searchText = e => {
    e.preventDefault();

    var searchFilter = e.target.value;

    // dont search unless 3 characters have been entered
    if(searchFilter.length < 3){
      return;
    }

    //console.log( e.target.value );

    fetch('/api/products/' + searchFilter)
      .then(data => data.json())
      .then(data => {
        this.setState({
          productsData: data
        })
      })
  }

  filter = searchFilter => {
    fetch('/api/products/' + searchFilter)
      .then(data => data.json())
      .then(data => {

        this.setState({
          productsData: data
        })
      })
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

      const alerts = <Alerts/>
      const navBar = <NavBar />
      const searchFilter = <SearchFilter />
      const user = () => <User wishList={this.state.productsData}/>

      const searchInput = <div>
        <label className="searchLabel" >What cha want?</label>
        <input id="searchFilter" type="text" className="text-center form-control" name="type" onChange={this.searchText}/><br />
      </div>
      const tescoApi = () => <div>
          <div>
            <button className="btn btn-success quickSearch" onClick={() => this.filter('vegan')}>Vegan</button>
            <button className="btn btn-success quickSearch" onClick={() => this.filter('vegetarian')}>Vegetarian</button>
            <button className="btn btn-success quickSearch" onClick={() => this.filter('dairy free')}>Dairy Free</button>
            <button className="btn btn-success quickSearch" onClick={() => this.filter('gluten free')}>Gluten Free</button>
            <button className="btn btn-success quickSearch" onClick={() => this.filter('low fat')}>Low Fat</button> <br />
          </div>
          {selectionList}
          <ToggleDisplay show={this.state.hideList}>
            {productsList}
          </ToggleDisplay>
        </div>

    const productsAndFilters = () => <div><h2>FUCK YOU</h2></div>


      return (
        <div className="App">
          <div className ="container">
            <BrowserRouter>
              <div>
                {navBar}
                {searchInput}
                <Route exact path="/" component={productsAndFilters}/>
                <Route exact path="/tesco" component={tescoApi} />
                <Route exact path="/user" component={user} />
              </div>
            </BrowserRouter>
          </div>
        </div>
      )
       }
  }
}


export default connect(null, actions)(App);
