import React, { Component } from 'react';
import Header from './header';

import './map_page.css';

class MapPage extends Component {
  render() {
    return (
      <div className='map-page'>
        <Header />
            <iframe src="https://map.nyclimatescience.org/" className="map"></iframe>
      </div>
    );
  }
}

export default MapPage;
