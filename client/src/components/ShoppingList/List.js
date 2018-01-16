import React from 'react';
import axios from 'axios';
// import './List.css';

const List = (props) => {

  function removeFromlist(product){
    axios.post('/api/deleteitem', {
        id: `${product.id}`
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
    });
  }

  return (

    <div className='Product'>
    <br/>
    <img style={{width: 200, height: 200}} src={props.image} alt={"product"}></img>
    <p>{props.name}</p>
    <p>£{props.price} / {props.quantity}</p>
    <p>{props.description}</p>
    <button onClick={() => removeFromlist(props) }>Remove from shopping list</button>
    <br/>
    </div>
  )
};

export default List;
