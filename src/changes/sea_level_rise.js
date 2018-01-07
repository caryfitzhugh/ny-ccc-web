import React, { Component } from 'react';
import ChangesLayout from './layout';
import SearchLink from '../utils/search_link';
import sea_level_rise_img from '../images/changes/sea_level_rise.jpg';
import slr_graph from '../images/changes/slr_graph.jpg';
import slr_image from '../images/changes/slr_image.jpg';
import slr_storm_surge_image from '../images/changes/slr_storm_surge_image.jpg';

import './sea_level_rise.css';
const ChangeLink = (props) => {
  return <SearchLink {...props} params={{facets: { climate_changes: ["ma::sea level rise::"+props.change.toLowerCase()]}}}>
    {props.children}
  </SearchLink>
};

class SeaLevelRiseChangesPage extends Component {
  render() {
    let showcased_resources = null;
    // title: "Highlighted Resources",
    // collection_name: "MA/agriculture/highlighted_resources",

    return (<ChangesLayout
        title="Sea Level Rise"
        active_layers="noaa_slr"
        image={sea_level_rise_img}
        showcased_resources={showcased_resources}
        datagrapher_file='Temp/state/avgt/ANN/MA/'
        sections={[
          {title:"BLOCKADE RUNNER - CORRIDOR",
           id: "from_global_to_local",
           content: <div>
            <p>The evil Darth Vader stands amid the broken and twisted bodies of his foes. He grabs a wounded Rebel Officer by the neck as an Imperial Officer rushes up to the Dark Lord.</p>
           </div>,
           subsections: []
          },
          {title: <SearchLink params={{query:"sea level rise"}}>IMPERIAL OFFICER </SearchLink>,
           id: "sea_level_rise_projected_changes",
           content: <div>
           The Death Star plans are not in the main computer.
            <div style={{width: '80%', margin: '5% 10%'}} >
              <img style={{width: "100%"}} src={slr_graph}></img>
              <h6>Vader squeezes the neck of the Rebel Officer, who struggles in vain.</h6>
            </div>

            <p>Where are those transmissions you intercepted? </p>
            <img className='col-md-6 col-sm-12' style={{float: 'right'}} src={slr_image}></img>
            <p> Vader lifts the Rebel off his feet by his throat.</p>

   
           </div>,
           subsections: []
          },
          {title: "Learn more about Sea Level Impacts",
           id: "learn_more",
           content: <div>
            <ul>
              <li>
                <h5><ChangeLink change='coastal flooding' query='erosion'>What have you done with those plans? </ChangeLink></h5>
                <p>We intercepted no transmissions. Aaah...</p>
              </li>
            </ul>
          </div>,
          subsections: []
          }
        ]} >


        <p>This is a consular ship. Were on a diplomatic mission.</p>

      </ChangesLayout>
    );
  }
}

export default SeaLevelRiseChangesPage;
