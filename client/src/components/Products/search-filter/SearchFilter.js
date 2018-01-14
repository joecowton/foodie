import React from 'react';
import './SearchFilter.css';

const SearchFilter = (props) => {

  return (
    <div className="SearchFilter">
      <div className="card card-body-3">
        <h5>Filter Products</h5>
        <form>
        <h6>
          <div className="form-group-2">
            <label htmlFor="type"> Type </label>
            <input type="text" className="form-control-3" name="type" />
            <label htmlFor="price"> Price </label>
            <input type="text" className="form-control-3" name="price" />
            <button type="submit" className="btn-3 btn-secondary-2">Submit</button>
          </div>
          </h6>
        </form>
      </div>
    </div>
  )
}



export default SearchFilter;
