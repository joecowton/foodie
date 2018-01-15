import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import User from './components/User/User'
import Alerts from './components/alerts/Alerts'
import Products from './components/Products/Products'
import SearchFilter from './components/Products/search-filter/SearchFilter'
import ToggleDisplay from 'react-toggle-display';
import Tesco from './components/tesco/tesco';
import { connect } from 'react-redux';
import * as actions from './actions';


 // var productRange = '/api/products'

class App extends Component {


constructor(props){
  super(props);
  this.state = {
    selection: [],
    productsData: null,
    tescoData: null,
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
    fetch('/api/products/default')
      .then(data => data.json())
      .then(tescoData => {
        this.setState({ tescoData })
      })
    fetch('/api/products')
      .then(data => data.json())
      .then(productsData => {
        this.setState({ productsData })
      })
    this.props.fetchUser();
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


// refactoring category links: dynamic creation
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

  tescoFilter = searchFilter => {
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

      const productsList = <Products products={this.state.productsData} />
      const selectionList = <Products products={this.state.selection} />

      const alerts = <Alerts/>
      const navBar = <NavBar />
      const searchFilter = <SearchFilter />
      const user = () => <User wishList={this.state.productsData}/>

    const tescoApi = () => <div>
      <label className="searchLabel" >What cha want?</label>
        <input id="searchFilter" type="text" className="text-center form-control" name="type" onChange={this.searchText}/><br />

        <div>
          <button className="btn btn-success quickSearch" onClick={() => this.tescoFilter('vegan')}>Vegan</button>
          <button className="btn btn-success quickSearch" onClick={() => this.tescoFilter('vegetarian')}>Vegetarian</button>
          <button className="btn btn-success quickSearch" onClick={() => this.tescoFilter('dairy free')}>Dairy Free</button>
          <button className="btn btn-success quickSearch" onClick={() => this.tescoFilter('gluten free')}>Gluten Free</button>
          <button className="btn btn-success quickSearch" onClick={() => this.tescoFilter('low fat')}>Low Fat</button> <br />
        </div>
      <Tesco tescoprods={this.state.tescoData} />
    </div>

    const productsAndFilters = () => <div>
    <h6>
      <div>
      Arange By:
        <button onClick={ () => this.remountComponent('/api/products') }> expiry date </button>
        <button onClick={ () => this.remountComponent('/api/products/price/decending') }> price decending </button>
        <button onClick={ () => this.remountComponent('/api/products/price/ascending') }> price ascending </button>
      </div>
    </h6>
    <div>
      {this.categoryArrangement()}
    </div>
    <br />
      {selectionList}
    <ToggleDisplay show={this.state.hideList}>
      {productsList}
    </ToggleDisplay>
    </div>



      return (
        <div className="App">
          <div className ="container">
            <BrowserRouter>
              <div>
                {navBar}
                <Route exact path="/" component={productsAndFilters}/>
                <Route exact path="/tesco" component={tescoApi}/>
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
