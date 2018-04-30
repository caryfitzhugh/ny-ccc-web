import React, { Component } from 'react';
import Header from './header';

import './map_page.css';

class MapPage extends Component {
  render() {
    return (
      <div className='map-page'>
        <Header short_header={true}/>
            <iframe title='MA CCC Map' src="https://d2a5wybk98jh3k.cloudfront.net/" className="map"></iframe>
      </div>
    );
  }
}

export default MapPage;
