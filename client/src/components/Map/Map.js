import React from 'react';

import './map.css';

export default class Map extends React.Component {
  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13,
      mapTypeId: 'roadmap',
    });
  }

  render() {
    return (
      <div id='root'>
      <p>lol</p>
        <div id='map' />
      </div>
    );
  }
};
