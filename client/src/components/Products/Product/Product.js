import React, { Component } from 'react';
import axios from 'axios';
import './Product.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


class Product extends Component {
  createNotification(){
    NotificationManager.success('Successfully added to list','', 500, this.addToWishlist(this.props));
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
  reduceTextLength(name) {
    return name.substring(0,38)
  }
  removeComma(name) {
    return name.replace(/,/g, "");
  }


  render(){
    return(
      <div className="Product">
        <img style={{width: 165, height: 165}} src={this.props.image} alt={"product"}></img>
        <br />
        {this.reduceTextLength(this.props.name)}
        <br />
        £{this.props.price} for {this.props.quantity}
        <br />
        {this.removeComma(this.props.description)}, {this.props.date}
        <br />
        <button className='btn btn-danger' onClick={() => {this.createNotification()}}>Add to Shopping List
        </button>
      <NotificationContainer/>
      </div>
    )
  }
};


export default Product;
