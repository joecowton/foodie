import React from 'react';
import './ArangeBy.css';

const ArangeBy = (props) => {


  return (
    <div className="ArangeBy">
        <h6>
          <div>
          Arange By:
            <button htmlFor="expiry" arangeBy='expiry'> expiry date </button>
            <button htmlFor="price-decending" arangeBy='price-descending'> price decending </button>
            <button htmlFor="price-ascending" arangeBy='prce-ascending'> price ascending </button>
          </div>
        </h6>
    </div>
  )
}

export default ArangeBy
