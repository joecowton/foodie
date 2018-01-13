import React, { Component } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { connect } from 'react-redux';

import 'react-notifications/lib/notifications.css';


class Alerts extends Component {
  createNotification = (type) => {
  return () => {
    switch (type) {
      default:
        break;
      case 'info':
        NotificationManager.info('Filter by all!');
        break;
      case 'success':
        NotificationManager.success('Success message', 'Title here');
        break;
      case 'warning':
        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        break;
      case 'error':
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
          alert('callback');
        });
        break;
      }
    };
  };
  render() {
    console.log(this.props.auth);

    return(
      <div className="App">
        <div>
          <button className='btn btn-info'
            onClick={this.createNotification('info')}>Info
          </button>
          <hr/>
          <button className='btn btn-success'
            onClick={this.createNotification('success')}>Success
          </button>
          <hr/>
          <button className='btn btn-warning'
            onClick={this.createNotification('warning')}>Warning
          </button>
          <hr/>
          <button className='btn btn-danger'
            onClick={this.createNotification('error')}>Error
          </button>
          <NotificationContainer/>
        </div>
      </div>
    )
  }
}
export default Alerts;
