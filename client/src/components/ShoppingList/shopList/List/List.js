import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';
import ToggleDisplay from 'react-toggle-display';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      hide: true
    }
  }

  removeFromlist = (product) => {
    axios.post('/api/deleteitem', {
        id: `${product.id}`
    })
    .then(function(response) {
    })
    .catch(function(error) {
    });
    this.setState({hide: false});
  }

  createNotification(){
    NotificationManager.error('Item removed from list','','500', this.removeFromlist(this.props));
  };


  render(){
    return(
       <div>
        <ToggleDisplay show={this.state.hide}>
          <div className='Product'>
          <img style={{width: 165, height: 165}} src={this.props.image} alt={"product"}></img>
          <br />
          {this.props.name}
          <br />
          £{this.props.price} for {this.props.quantity}
          <br />
          {this.props.description}, {this.props.date}
          <br />
          <button className='btn btn-danger' onClick={() => this.createNotification()}>Remove From List
          </button>
          <NotificationContainer/>
          </div>
        </ToggleDisplay>
      </div>

    )
    }
  }

  function mapStateToProps({auth}) {
    return { auth }
  }

  export default connect(mapStateToProps, actions) (List);
