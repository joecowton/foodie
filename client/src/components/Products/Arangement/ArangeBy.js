import React from 'react';
import './ArangeBy.css';

const ArangeBy = (props) => {


  return (
    <div className="ArangeBy">
        <h6>
          <div>
          Arange By:
            <button htmlFor="expiry" value={App.state.search='expiry'}> expiry date </button>
            <button htmlFor="price-decending" value={App.state.search = 'price-decending'}> price decending </button>
            <button htmlFor="price-ascending" value={App.state.search = 'prce-ascending'}> price ascending </button>
          </div>
        </h6>
        <br />
    </div>
  )
}

export default ArangeBy
