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
import Landing from './Landing'



const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


class App extends Component {

constructor(props){
  super(props);
  this.state = {
    selection: [],
    productsData: null,
    user: this.props.auth || null
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


  filter1 = string => {
    if (this.state.productsData) {
      this.state.selection = [];
      this.state.productsData.map( product => {
        if(product.category === string || string === 'all'){
          this.state.selection.push(product);
        };
        this.setState({filterSel: this.state.selection, hideList: false});
      });
    } else {
      return <p> No Dairy Products available</p>
    }
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
      console.log(this.state);

      const productsList = <Products
        products={this.state.productsData}
      />
      const selectionList = <Products
      products={this.state.selection}
      />


      const alerts = <Alerts/>
      const navBar = <NavBar />
      const searchFilter = <SearchFilter />
      const user = <User />


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
            {user}


          {searchFilter}

        {alerts}
          <button
            onClick={() => this.filter1('all')}>All
          </button>
          <button onClick={() => this.filter1('dairy')}>Dairy</button>
          <button onClick={() => this.filter1('protein')}>Protein</button> <br />
          {selectionList}
          <ToggleDisplay show={this.state.hideList}>
          {productsList}
          </ToggleDisplay>
          </div>
        </div>
      )
       }
  }
}

function mapStateToProps({auth}) {
  return { auth }
}

export default connect(null, actions)(App);
