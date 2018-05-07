import React, { Component } from 'react';
import Collection from '../layouts/collection';
import DataTabs from './data_tabs';
import DatagrapherLink from '../utils/datagrapher_link';

import datagrapher_img from '../images/data/datagrapher.png';

import './data_products.css';

let dataTabs = [
  {
    title: "All Featured",
    collection: "NY/highlights/data_products/all_featured",
    id: "all-featured"
  },

  {
    title: "Climate & Weather",
    collection: "NY/highlights/data_products/climate_weather",
    id: "climateandweather-maps"
  },
  {
    title: "Drought",
    collection: "NY/highlights/data_products/drought",
    id: "drought-maps"
  },
  {
    title: "Energy",
    collection: "NY/highlights/data_products/energy",
    id: "energy-maps"
  },
  {
    title: "Flooding",
    collection: "NY/highlights/data_products/flooding",
    id: "flooding-maps"
  },
  {
    title: "Great Lakes",
    collection: "NY/highlights/data_products/great_lakes",
    id: "lakes-maps"
  },
  {
    title: "Greenhouse Gases",
    collection: "NY/highlights/data_products/greenhouse_gases",
    id: "greenhouse-maps"
  },
  {
    title: "Plants & Animals",
    collection: "NY/highlights/data_products/plants_animals",
    id: "plantanimals-maps"
  },
  {
    title: "Sea Level",
    collection: "NY/highlights/data_products/sea_level",
    id: "sealevel-maps"
  },
]

class DataProductPage extends Component {
	constructor () {
	    super()
	    this.state = {showMore: false, };
	  }
	render() {
		return (
			<section aria-label="Climate Data Grapher" className="container">
			    <div className="products">
			      <div className="row">
			        <div className="col-12">
			          <div className="highlights-collection">
			            <div className="row">
			              <div className="col-sm-5">
			              	<DatagrapherLink file="Temp/state/maxt/ANN/NY/">
			              		<img src={datagrapher_img} className="img-responsive" alt="Climate Data Grapher"/>
			             	</DatagrapherLink>
			              </div>
			              <div className="col-sm-7">
			             	<h1>Climate Data Grapher</h1>
			             	<DatagrapherLink file="Temp/state/maxt/ANN/NY/" className="btn btn-sm btn-primary">Interactive Chart</DatagrapherLink>
  	                <br/><br/>
			            	<p>
			            		User-generated time series graphs of climate data, both observed and projected (future and historical.)
                    </p>
                    <h5>Observed data: </h5>
                    <p>
                      The user can select data from New York State stations in the U.S. Historical Climatology Network or from PRISM data spatially aggregated by New York counties and river basins or by state (for states neighboring New York.) Points are observed data values; the solid line shows a running mean. Users can select different time periods for the running mean. For the station data the length of the data records vary by station, with the oldest data going back to 1869. The spatially aggregated data go back to 1950.
			            	</p>


			            	{(this.state.showMore) ?
				            <div className="toggle">
                      <h5>Projected data:</h5>
                      <p>Global climate model projections from the North American Regional Climate Change Assessment Program (NARCCAP) for state, county and river basin areas. The NARCCAP dataset provides daily values of maximum and minimum temperature and precipitation on a 50 km grid. All future projections cover the period 2041-2070 and are based on the relatively high SRES A2 emissions scenario. Simulations are also generated for the 1971-2000 historical period. Future and historical simulations are based on four regional climate models (RCMs) nested within at least one of three atmosphere-ocean general circulation models (AOGCMs), yielding a set of seven RCM-AOGCM combinations.</p>

                      <p>Simulations from these model combinations form the red-blue shaded areas on each graph for the historical and future period. The top of the red area corresponds to the highest of the seven combinations. The bottom of the blue area corresponds to the lowest of the seven combinations. The mean of the seven combinations is reflected by the boundary between the blue and red areas. A 5-year running mean is used.</p>

                      <p>The user can select monthly, seasonal, and annual records of the following variables:</p>
                      <ul>
                        <li>Daily maximum temperature (F)</li>
                        <li>Daily minimum temperature (F)</li>
                        <li>Daily average temperature (F)</li>
                        <li>Growing degree day accumulation, base 50 F</li>
                        <li>Heating degree day accumulation, base 65 F</li>
                        <li>Cooling degree day accumulation, base 65 F</li>
                        <li>Counts of days with maximum temperature above 90 F</li>
                        <li>Counts of days with maximum temperature above 95 F</li>
                        <li>Counts of days with maximum temperature above 100 F</li>
                        <li>Counts of days with minimum temperature below 0 F</li>
                        <li>Counts of days with minimum temperature below 32 F</li>
                        <li>Total precipitation (inches)</li>
                        <li>Total snowfall (inches; station data only)</li>
                        <li>Maximum daily snow depth (inches; station data only)</li>
                        <li>Counts of days with precipitation greater than 1 inch</li>
                        <li>Counts of days with precipitation greater than 2 inches</li>
                        <li>Counts of days with precipitation greater than 4 inches</li>
                        <li>Counts of days with snow depth greater than 1 inch (station data only)</li>
                        <li>Growing season length (station data only)</li>
                      </ul>

                      <h5>Definitions:</h5>
                      <p>Daily average temperature is calculated as Tavg = (Tmax + Tmin)/2 where Tmax and Tmin are the maximum and minimum temperatures in a 24 hour period.</p>

                        <p>Growing degree day accumulation is the sum of growing degree days (GDD) over the selected time period (annual, season, or month). A GDD for a day is defined as Tavg – 50.</p>

                        <p>Heating degree day accumulation is the sum of heating degree days (HDD) over the selected time period (annual, season, or month). A HDD for a day is defined as 65 - Tavg for days with average temperatures below 65° F.</p>

                        <p>Cooling degree day accumulation is the sum of cooling degree days (CDD) over the selected time period (annual, season, or month). A CDD for a day is defined as Tavg – 65 for days with average temperatures above 65° F.</p>

                        <p>Total precipitation is the total vertical depth of rainfall and/or liquid water equivalent (melted frozen precipitation) of new snow and ice in a specified time period (inches).</p>

                        <p>Total snowfall is the accumulation of daily snowfall over a specified time period, where daily snowfall is the accumulation of new snow and ice in a 24-hour period prior to melting or settling (inches).</p>

                        <p>Daily snow depth is total depth of new snow and old snow and ice on the ground, measured once daily (inches).</p>

                        <p>Daily precipitation is the total vertical depth, in inches, of rainfall and/or liquid water equivalent (melted frozen precipitation) of new snow and ice in a 24 hour period.</p>

                        <p>Growing season length is the number of consecutive days with minimum temperature above 32° F, from the last spring frost to the first fall frost.</p>
			              	</div> :
			              	null
			              	}
			              	<button className="btn btn-sm btn-primary" onClick={() => {(this.setState({showMore: !this.state.showMore}))}}>{(this.state.showMore) ? "Less" : "More"}</button>
			              </div>
			            </div>
			          </div>
			          <hr />
			          <div className="row">
					      <div className="col-sm-7 col-6">
					        <h3>Spatial Data Products <small>Climate Data Grapher - County, State, Basin</small></h3>
					        <br />
					        <Collection collection_name="NY/highlights/data_products/spatial_products" />
					      </div>
					      <div className="col-sm-5 col-6">
					        <h3>Station Data Products <small>Climate Data Grapher</small></h3>
					        <br />
					        <Collection collection_name="NY/highlights/data_products/station_products" />
					      </div>
					    </div>
			          <hr />
			        </div>
			      </div>
			      <div className="row">
			        <DataTabs tabs={dataTabs} query="Data::Data Product" title="Featured Data Products" btnTitle="Search All Data Products" />
			      </div>
			    </div>
			  </section>
		)
	}

}


export default DataProductPage;
