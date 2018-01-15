import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Products from './components/Products/Products'
import SearchFilter from './components/Products/search-filter/SearchFilter'
import ToggleDisplay from 'react-toggle-display';
import { connect } from 'react-redux';
import * as actions from './actions';


const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>


class App extends Component {

constructor(props){
  super(props);
  this.state = {
    selection: [],
    productsData: null
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

      const navBar = <NavBar />
      const searchFilter = <SearchFilter />

      return (
        <div className="App">
          <div className ="container">
            <BrowserRouter>
              <div>
                <Header />
                <Route exact={true} path="/" component={Landing} />
                <Route exact={true} path="/surveys" component={Dashboard} />
                <Route path="/surveys/new" component={SurveyNew} />
              </div>
            </BrowserRouter>
            </div>


          <p>Hello</p>
          {navBar}
          {/* {searchFilter} */}

          <div className="container">
         
          <label className="searchLabel" >What are you looking for ?</label>
            <input id="searchFilter" type="text" className="text-center form-control" name="type" onChange={this.searchText}/><br />
            
            <div>
              <button className="btn btn-success quickSearch" onClick={() => this.filter('vegan')}>Vegan</button>
              <button className="btn btn-success quickSearch" onClick={() => this.filter('vegetarian')}>Vegetarian</button>
              <button className="btn btn-success quickSearch" onClick={() => this.filter('dairy free')}>Dairy Free</button>
              <button className="btn btn-success quickSearch" onClick={() => this.filter('gluten free')}>Gluten Free</button>
              <button className="btn btn-success quickSearch" onClick={() => this.filter('low fat')}>Low Fat</button> <br />
            </div> 
         
            {productsList}
          
          </div>
        </div>
      )
       }
  }
}

export default connect(null, actions)(App);
