import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

import './map_page.css';

class MapPage extends Component {
  render() {
    return (
      <div className='map-page'>
        <Header />
          <div className='container'>
              <iframe src="http://i0.kym-cdn.com/photos/images/original/000/969/743/037.jpg" className="map"></iframe>
          </div>
        <Footer />
      </div>
    );
  }
}

export default MapPage;
