import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Products from './components/Products/Products'
import Map from './components/Map/Map.js'
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

componentDidMount() {
  let map = new window.google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13,
    mapTypeId: 'roadmap',
  });
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
  return (
    <div id='root'>
      <div id='map' />
    </div>
  );
}
};


export default connect(null, actions)(App);
