import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

import './Map.css'

class Maps extends Component {
  static defaultProps = {
    center: {lat: 51.509865, lng: -0.118092},
    zoom: 11
  };

  render() {
    return (
      <div className="mapWrapper">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

        </GoogleMapReact>
      </div>
    );
  }
};

export default Maps;
