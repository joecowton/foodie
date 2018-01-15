import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Products from './components/Products/Products';
import SearchFilter from './components/Products/search-filter/SearchFilter';
// import ArangeBy from './components/Products/Arangement/ArangeBy';
import ToggleDisplay from 'react-toggle-display';
import { connect } from 'react-redux';
import * as actions from './actions';


const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

 // var productRange = '/api/products'

class App extends Component {


constructor(props){
  super(props);
  this.state = {
    selection: [],
    productsData: null,
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

  componentDidMount(){ // pass in arangement api
      fetch(this.state.productAPI)
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

  filter = string => {
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

  sortingArrangement(){

  }

  render() {
    if (!this.state.productsData) {
      return <p> Loading Products...</p>
    } else {

      const productsList = <Products products={this.state.productsData} />
      const selectionList = <Products products={this.state.selection} />

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
          {navBar}
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
      );
    }
  }
}

export default connect(null, actions)(App);
