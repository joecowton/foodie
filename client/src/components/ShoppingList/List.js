import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ToggleDisplay from 'react-toggle-display';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

// import './List.css';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      hide: true
    }
  }

  removeFromlist = (product) => {
    // <ShoppingList  prod={product.id}/>
    axios.post('/api/deleteitem', {
        id: `${product.id}`
    })
    .then(function(response) {
      console.log("DELETE RESPONSE",response);
    })
    .catch(function(error) {
    });
    this.setState({hide: false});
  }

  createNotification(){
      NotificationManager.error('Item removed from list');
  };


  render(){
    return(
       <div>
        <ToggleDisplay show={this.state.hide}>
          <div className='Product'>
          <br/>
          <img style={{width: 175, height: 175}} src={this.props.image} alt={"product"}></img>
          <br />
          {this.props.name}
          £{this.props.price} for {this.props.quantity}
          <br />
          {this.props.description}
          <button className='btn btn-danger'
            onClick={() => {this.createNotification()
            this.removeFromlist(this.props)}}>Remove From List
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
