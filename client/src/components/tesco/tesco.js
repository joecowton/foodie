import React, { Component } from 'react';
import Products from '../Products/Products'

class Tesco extends Component {
  constructor(props){
    super(props);
    this.state = {
      tescoData: null
    }
  }

  componentDidMount(){
    fetch('/api/products/default')
      .then(data => data.json())
      .then(tescoData => {
        this.setState({ tescoData })
      })
  }

  searchText = e => {
    e.preventDefault();

    var searchFilter = e.target.value;

    // dont search unless 3 characters have been entered
    if(searchFilter.length < 3){
      return;
    }
    fetch('/api/products/' + searchFilter)
      .then(data => data.json())
      .then(data => {
        this.setState({
          tescoData: data
        })
      })
  }
  tescoFilter = searchFilter => {
    fetch('/api/products/' + searchFilter)
      .then(data => data.json())
      .then(data => {

        this.setState({
          tescoData: data
        })
      })
    }

  render(){
    if(!this.state.tescoData){
      return <h4>TescoProducts Loading...</h4>
    } else{
      return(
        <div>
        <label className="searchLabel" >what would you like to search for?</label>
        <input id="searchFilter" type="text" className="text-center form-control" name="type" onChange={this.searchText}/><br />
          <div>
            <button className="btn btn-success quickSearch" onClick={() => this.tescoFilter('vegan')}>Vegan</button>
            <button className="btn btn-success quickSearch" onClick={() => this.tescoFilter('vegetarian')}>Vegetarian</button>
            <button className="btn btn-success quickSearch" onClick={() => this.tescoFilter('dairy free')}>Dairy Free</button>
            <button className="btn btn-success quickSearch" onClick={() => this.tescoFilter('gluten free')}>Gluten Free</button>
            <button className="btn btn-success quickSearch" onClick={() => this.tescoFilter('low fat')}>Low Fat</button> <br />
          </div>
          <Products products={this.state.tescoData}/>
        </div>
      )
    }
  }
}

export default Tesco;
