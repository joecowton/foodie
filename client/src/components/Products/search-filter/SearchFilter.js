import React from 'react';
import './SearchFilter.css';

const SearchFilter = (props) => {

  return (
    <div className="SearchFilter">
      <div >
        <form>
        <h6>Filter Products</h6>
          <div className="form-group">
            <label htmlFor="type">  Type  </label>
            <input type="text" className="form-control-3" name="type" />
            <label htmlFor="price">  Price  </label>
            <input type="text" className="form-control-3" name="price" /><br />
            <button type="submit" className="btn btn-secondary">Submit</button>
          </div>
        </form>
      </div>
      <br />
    </div>
  )
}



export default SearchFilter;
