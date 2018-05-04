import React from 'react';
import DataTabs from './data_tabs';
import MapLink from '../utils/map_link';

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
  <section aria-label="Maps" className="container">
    <div className="maps">
      <div className="row">
        <div className="col-12">
          <div className="highlights-collection">
            <div className="row">
              <div className="col-sm-5">
                <MapLink>
                  <img src={map_img} className="img-responsive" alt="Interactive Map and GIS Viewer"/>
                </MapLink>
              </div>
              <div className="col-sm-7">
                <h1>Interactive Map and GIS Viewer</h1>
                <MapLink className="btn btn-sm btn-primary">Interactive Map</MapLink>
                <br/><br/>
                <p>An interactive map of climate change and related data for New York State. Users can select data layers to display from a menu, filter layers by sector, vary parameters within certain layers, and select from a variety of base layers and regional boundaries.  For each layer, links are available to metadata and the original source.</p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="row">
        <DataTabs tabs={mapsTabs} query="Maps::" title="Featured Maps" btnTitle="Search All Maps" />
      </div>
    </div>
  </section>
)

export default Maps;
