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
          {searchFilter}
          <button onClick={() => this.filter('all')}>All</button>
          <button onClick={() => this.filter('dairy')}>Dairy</button>
          <button onClick={() => this.filter('protein')}>Protein</button> <br />
          <a href="/auth/google">Sign In With Google</a>
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
