import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import natural_resources_image from '../images/sectors/natural_resources.jpg';
import SearchLink from '../utils/search_link';

const NRSearchLink = (props) => {
  return <SearchLink params={{facets: {sectors: ["ma::natural resources / habitats"], climate_changes: props.changes, actions: props.actions}, query: props.q}}>
      {props.children}
    </SearchLink>

}

class NaturalResourcesHabitatsSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Highlighted Resources",
      collection_name: "MA/natural_resources/highlighted_resources"
    };

    return (
      <SectorDetailLayout
        title="Natural Resources"
        sector_name='Natural Resources/Habitats'
        image={natural_resources_image}
        image_credit=""
        showcased_resources={showcased_resources}
        sections={[
          {title: "Impacts",
           id: "impacts",
           content: <div>
           </div>,
              subsections: [
                {name: <NRSearchLink changes={["ma::rising temperatures::"]}>Headline</NRSearchLink>,
                 id: 'impacts_rising_temperatures',
                 content: <div>
                  <li>Red Leader, a rugged handsome man in his forties, comes up</li> 
                  <li>behind Luke and Biggs. He has the confident smile of a born </li>
                  <li>leader.</li>
                  </div>
                },
              {name: <NRSearchLink changes={["ma::changes in precipitation::"]}>Headline</NRSearchLink>,
               id: "impacts_changes_in_precipitation",
               content: <div>
                 <p>Red Leader pats Luke on the back as they stop in front of his fighter. </p>
               </div>,
              },
            ]
          },
          {title: "Actions",
           id: "actions",
           subsections: [
            {name: <NRSearchLink actions={["ma::planning::"]}>Headline</NRSearchLink>,
              id: 'actions_planning',
              content: <ul>
                <li>I've got to get aboard. Listen, you'll</li>
                <li>tell me your stories when we come</li>
                <li>back. All right?</li>
              </ul>
            },
            {name: <NRSearchLink q="management practices">Headline</NRSearchLink>,
             id: "actions_management_practices",
             content: <ul>
               <li>Luke laughs and shakes his head in agreement. He heads for </li>
               <li>his ship.</li>
              </ul>
            }
           ]
          },
          {title: "Looking for help?",
           id:"look4help",
           subsections: [],
           content: <ul>
              <li><a href=''>INT. MAIN HANGAR DECK</a></li>
          </ul>
          }]}
        datagrapher_file='Temp/state/maxt/ANN/MA/'>

          <p> As Luke begins to climb up the ladder into his sleek, deadly spaceship, the crew chief, who is working on the craft, points to little Artoo, who is being hoisted into a socket on the back of the fighter.</p>

        </SectorDetailLayout>
    );
  }
}

export default NaturalResourcesHabitatsSectorPage;
