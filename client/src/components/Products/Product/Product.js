import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './Product.css';
// import ShoppingList from './../../ShoppingList/ShoppingList';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


class Product extends Component {
  constructor(props){
    super(props);
    }

  createNotification(){
<<<<<<< HEAD
      NotificationManager.success('Successfully added to list');
=======
    NotificationManager.success('Successfully added to list','', 500, this.addToWishlist(this.props));
>>>>>>> notifications-2
  };

  addToWishlist = (product) => {
    axios.post('/api/addwishlist', {
      id: this.props.id
    })
    .then(function(response) {
    })
    .catch(function(error) {
    });
  }

  render(){
    return(
      <div className="Product">
        <img style={{width: 165, height: 165}} src={this.props.image} alt={"product"}></img>
        <br />
        {this.props.name}
        <br />
        £{this.props.price} for {this.props.quantity}
        <br />
        {this.props.description}, {this.props.date}
        <br />
        <button className='btn btn-danger'
<<<<<<< HEAD
          onClick={() => {this.createNotification()
          this.addToWishlist(this.props)}}>Add to Shopping List
=======
          onClick={() => {this.createNotification()}}>Add to Shopping List
>>>>>>> notifications-2
        </button>
      <NotificationContainer/>
      </div>
    )
  }
};


export default Product;
