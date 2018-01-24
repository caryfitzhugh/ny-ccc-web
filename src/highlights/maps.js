import React from 'react';
import Collection from '../layouts/collection';
import DataTabs from './data_tabs';

import map_img from '../images/highlights/interactive_map.jpeg';

import './maps.css';

let mapsTabs = [
  {
    title: "All Featured",
    collection: "NY/highlights/maps/all_featured",
    id: "all-featured"
  },
  {
    title: "Adaptation",
    collection: "NY/highlights/maps/adaptation",
    id: "adaptation-maps"
  },
  {
    title: "Climate & Weather",
    collection: "NY/highlights/maps/climate_weather",
    id: "climateandweather-maps"
  },
  {
    title: "Energy",
    collection: "NY/highlights/maps/energy",
    id: "energy-maps"
  },
  {
    title: "Flooding",
    collection: "NY/highlights/maps/flooding",
    id: "flooding-maps"
  },
  {
    title: "Lakes, Rivers & Streams",
    collection: "NY/highlights/maps/lakes_rivers_streams",
    id: "lakeriverstream-maps"
  },
  {
    title: "Plants & Animals",
    collection: "NY/highlights/maps/plants_animals",
    id: "plantanimals-maps"
  },
  {
    title: "Sea Level",
    collection: "NY/highlights/maps/sea_level",
    id: "sealevel-maps"
  },
  {
    title: "Social & Economic",
    collection: "NY/highlights/maps/social_economic",
    id: "socialandeconomic-maps"
  }
]

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
                <a href="/not-yet-implemented/maps" className="btn btn-sm btn-primary">Interactive Map</a>
                <br/><br/>
                <p>An interactive map of climate change and related data for New York State. Users can select data layers to display from a menu, filter layers by sector, vary parameters within certain layers, and select from a variety of base layers and regional boundaries.  For each layer, links are available to metadata and the original source.</p>
                <p>A video tutorial on how to use the Interactive Map and GIS Viewer can be found here.</p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="row">
        <DataTabs tabs={mapsTabs} title="Featured Maps" btnTitle="Search All Maps" />
      </div>
    </div>
  </section>
)
 
export default Maps;
