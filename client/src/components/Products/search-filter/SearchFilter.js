import React from 'react';
import './SearchFilter.css';

const SearchFilter = (props) => {

  return (
    <div className="SearchFilter">
      <div className="card card-body">
        <h4>Filter Product Search</h4>
        <form>
        <h5>
          <div className="form-group">
            <label htmlFor="category">By Type </label>
            <input type="text" className="form-control" name="category" /><br />
            <label htmlFor="price">By Price </label>
            <input type="text" className="form-control" name="price" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          </h5>
        </form>
      </div>
    </div>
  )
}



export default SearchFilter;
