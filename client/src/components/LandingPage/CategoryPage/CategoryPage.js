import React from 'react';
import Products from '../../Products/Products';

const CategoryPage = (props) => {
  return (
    <div>
    <Products products={props.products} />
    </div>
  )
}

export default CategoryPage
