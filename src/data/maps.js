import React, { Component } from 'react';
import Layout from './layout';
import BannerData from './banner_data';
import FeaturedData from './featured_data';
import map_image from '../images/data/ny_ccsc_map.png';

class MapsPage extends Component {
  render() {
    return (
    <Layout
      banner={<BannerData
                image={map_image}
                href='/map'
                title='MA CCC Map'
                content={
                 <div>
                  <p>
                      If this is a consular ship... were is the Ambassador?
                  </p>
                  <p>
                      A video tutorial on how to use the Interactive Map and GIS Viewer can be found <a href='https://www.youtube.com/watch?v=jL_YgWO9_1w&list=PL0gskXQ6tF18Mpd9BTuMZrtPM-GdZFjP2&index=3' rel="noopener noreferrer" target='_blank'>here</a>
                  </p>
                 </div>}
                /> }
      featured_data={<FeaturedData
        collections={[
          ["All", 'MA/data/maps/featured/all'],
          ["Agriculture", 'MA/data/maps/featured/agriculture'],
          ["Coastal", 'MA/data/maps/featured/coastal'],
          ["Energy", 'MA/data/maps/featured/energy'],
          ["Natural Resources", 'MA/data/maps/featured/natural-resources'],
          ["Public Health", 'MA/data/maps/featured/public-health'],
          ["Precipitation", 'MA/data/maps/featured/precipitation'],
          ["Temperature", 'MA/data/maps/featured/temperature'],
          ["Flooding", 'MA/data/maps/featured/flooding']
        ]}
        />}
      >
    </Layout>
    );
  }
}

export default MapsPage;
