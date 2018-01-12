import React, { Component } from 'react';

class CategoryFilter extends Component  {

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
    return(
      <div>
        <button onClick={() => this.filter('all')}>All</button>
        <button onClick={() => this.filter('dairy')}>Dairy</button>
        <button onClick={() => this.filter('protein')}>Protein</button> <br />
      </div>
    )}

}
export default CategoryFilter;
