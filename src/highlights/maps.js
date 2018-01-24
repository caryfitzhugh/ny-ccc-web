import React from 'react';
import Collection from '../layouts/collection';

import map_img from '../images/highlights/interactive_map.jpeg';

import './maps.css';

const Maps = (props) => (
  <section>
    <div className="container maps">
      <div className="row">
        <div className="col-12">
          <div className="highlights-collection">
            <div className="row">
              <div className="col-sm-5">
                <a href="/not-yet-implemented/maps">
                  <img src={map_img} className="img-responsive" alt=""/> 
                </a>
              </div>
              <div className="col-sm-7">
                <h1>Interactive Map and GIS Viewer</h1>
                <a href="/not-yet-implemented/maps" className="btn btn-sm btn-primary">INTERACTIVE MAP</a>
                <br/><br/>
                <p>An interactive map of climate change and related data for New York State. Users can select data layers to display from a menu, filter layers by sector, vary parameters within certain layers, and select from a variety of base layers and regional boundaries.  For each layer, links are available to metadata and the original source.</p>
                <p>A video tutorial on how to use the Interactive Map and GIS Viewer can be found here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
 
export default Maps;
