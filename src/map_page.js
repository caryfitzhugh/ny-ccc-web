import React, { Component } from 'react';
import Header from './header';

import './map_page.css';

class MapPage extends Component {
  render() {
    return (
      <div className='map-page'>
        <Header short_header={true}/>
            <iframe title='MA CCC Map' src={"https://s3.amazonaws.com/ny-map-nescaum-ccsc-dataservices/index.html" + this.props.location.search} className="map"></iframe>
      </div>
    );
  }
}

export default MapPage;
