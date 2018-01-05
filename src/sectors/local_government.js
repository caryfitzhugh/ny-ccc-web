import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import {Footnote} from '../utils/footnotes';
import sector_image from '../images/sectors/local_government.jpg';
import SearchLink from '../utils/search_link';

const LGSearchLink = (props) => {
  return <SearchLink params={{facets: {sectors: ["ma::local government"], climate_changes: props.changes, actions: props.actions}, query: props.q}}>
      {props.children}
    </SearchLink>

}

class LocalGovernmentSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: "MA/local_government/highlighted_resources"
    };

    return (
      <SectorDetailLayout
        title="Local Government"
        image={sector_image}
        image_credit="John Phelan"
        showcased_resources={showcased_resources}
        footnotes={[
          <span>The Death Star slowly moves behind the massive yellow surface of Yavin in the foreground, as many X-wing fighters flying in formation zoom toward us and out of the frame.</span>
        ]}
        sections={[
          {title: "Impacts",
            id: 'impacts',
            content: <p> </p>,
            subsections: [
              {name: <LGSearchLink changes={["ma::rising temperatures::"]}>Headline</LGSearchLink>,
                id: 'impacts_rising_temperatures',
                content: <div>
                <p>Light from a distant sun creates an eerie atmospheric glow around a huge planet, Yavin. Rebel fighters flying in formation settle ominously in the foreground and very slowly pull away.</p>
                </div>
              },
              {name: <LGSearchLink changes={["ma::changes in precipitation::"]}>Headline</LGSearchLink>,
                id: 'impacts_changes_in_precipitation',
                content: <div>
                  <p>Red Leader looks around at his wingmen; the Death Star looming in from behind. Two Y-wing fighters bob back and forth in the background. He moves his computer targeting device into position.</p>
                </div>
              }
            ]},
            {title:"Actions",
              id:'actions',
              content: <p></p>,
              subsections: [
              {name: <LGSearchLink actions={["ma::planning::"]}>Headline</LGSearchLink>,
                id: 'actions_planning',
                content: <ul>
                  <li>The group of X-wing fighters move in formation toward the </li>
                  <li>Death Star, unfolding the wings and locking them in the "X" </li>
                  <li>position.</li>
               </ul>
              },
              {name: <LGSearchLink q="management practices">Headline</LGSearchLink>,
                id: 'actions_management_practices',
                content: <ul>
                   <li>Two squads of Rebel fighters peel off. The X-wings dive </li>
                   <li>towards the Death Star surface. A thousand lights glow across </li>
                   <li>the dark grey expanse of the huge station.</li>
                </ul>
              }

              ]},
          {title: "Looking for help?",
            id: 'looking_for_help',
            content: <ul>
              <li>
                <SearchLink params={{query:""}}>
                   INT. LUKE'S X-WING FIGHTER - COCKPIT
                </SearchLink>
              </li>

            </ul>,
            subsections: []
          }

        ]}
      >

        <p>The fighters, now X-shaped darts, move in formation. The Death Star now appears to be a small moon growing rapidly in size as the Rebel fighters approach. Complex patterns on the metallic surface begin to become visible. A large dish antenna is built into the surface on one side.</p>

     </SectorDetailLayout>
    );
  }
}

export default LocalGovernmentSectorPage;
