import React, { Component } from 'react';
import Products from '../Products/Products';
import { ToastContainer, toast } from 'react-toastify';
import './tesco.css';


class Tesco extends Component {
  notify = () => toast("Nice choice !");
  constructor(props){
    super(props);
    this.state = {
      tescoData: null
    }
  }

// all products included :

  // componentDidMount(){
  //   fetch('/api/products/default')
  //     .then(data => data.json())
  //     .then(tescoData => {
  //       this.setState({ tescoData })
  //     })
  // }

  componentDidMount(){
    var that = [];
    fetch('/api/products/default')
      .then(data => data.json())
      .then(tescoData => {
         tescoData.forEach( data => {
          if(data.PromotionDescription){
            that.push(data)
          }
        this.setState({tescoData : that})
        })
      })
  }

  searchText = e => {
    var that = [];
    e.preventDefault();
    var searchFilter = e.target.value;
    // dont search unless 3 characters have been entered
    if(searchFilter.length < 3){
      return;
    }
    fetch('/api/products/' + searchFilter)
      .then(data => data.json())
      .then(tescoData => {
        tescoData.forEach( data => {
         if(data.PromotionDescription){
           that.push(data)
         }
        this.setState({
          tescoData: that})
        })
      })
  }

  tescoFilter = searchFilter => {
    var that = [];
    fetch('/api/products/' + searchFilter)
      .then(data => data.json())
      .then(tescoData => {
        tescoData.forEach( data => {
         if(data.PromotionDescription){
           that.push(data)
         }
        this.setState({
          tescoData: that})
        })
      })
  }

  tescoFilterArrangement(){
    const tescoCategories = ['vegan', 'vegetarian', 'dairy free', 'gluten free', 'low fat' ]
    const tescoCategoryLinks = tescoCategories.map( category => {
      return (

        <div>
        <button className="btn btn-success quickSearch" onClick={this.notify}>{category}</button>
          <ToastContainer />
        </div>
        

        // <button className="btn btn-success quickSearch" onClick={() => this.tescoFilter(category)}>  {category}
        // </button>
      )
    })
    return <div>{tescoCategoryLinks}</div>
  }

 
  render(){

    if(!this.state.tescoData){
      return <h4>TescoProducts Loading...</h4>
    } else{
      return(
        <div>
          <label className="searchLabel" >what would you like to search for?</label>
          <input id="searchFilter" type="text" className="text-center form-control" name="type" onChange={this.searchText}/><br />
          {this.tescoFilterArrangement()}
          <Products products={this.state.tescoData}/>
        </div>
      )
    }
  }
}

export default Tesco;
