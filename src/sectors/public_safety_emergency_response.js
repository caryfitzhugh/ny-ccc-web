import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/public_safety.jpg';
import SearchLink from '../utils/search_link';
import MapLink from '../utils/map_link';
import DatagrapherLink from '../utils/datagrapher_link';

const PSERSearchLink = (props) => {
  return <SearchLink params={{facets: {sectors: ["ma::public safety / emergency response"], climate_changes: props.changes, actions: props.actions}, query: props.q}}>
      {props.children}
    </SearchLink>

}

class PublicSafetyEmergencyResponse extends Component {
  render() {
    let showcased_resources = {
      title: "Highlighted Resources",
      collection_name: "MA/public_safety_emergency_response/highlighted_resources",
      content: <div>
        <p>Luke is sitting next to Wedge Antilles</p>
      </div>
    };


    return (
      <SectorDetailLayout
        title="Public Safety / Emergency Response"
        sector_name="Public Safety/Emergency Response"
        image={sector_image}
        image_credit=""
        showcased_resources={showcased_resources}
        sections={[
          {title: "Impacts",
           id: "impacts",
           content: <div>
           </div>,
              subsections: [
                {name: <PSERSearchLink changes={["ma::rising temperatures::"]}>Headline</PSERSearchLink>,
                 id: 'impacts_rising_temperatures',
                 content: <div>Pardon me for asking, sir, but what good are snub fighters going to be against that?</div>
                },
              {name: <PSERSearchLink changes={["ma::changes in precipitation::"]}>Headline</PSERSearchLink>,
               id: "impacts_changes_in_precipitation",
               content: <div>
                 <p> Gold Leader, a rough looking man in his early thirties, stands and addresses Dodonna.</p>
               </div>,
              }
            ]
          },
          {title: "Actions",
           id: "actions",
           subsections: [
            {name: <PSERSearchLink actions={["ma::planning::"]}>Headline</PSERSearchLink>,
              id: 'actions_planning',
              content: <ul>
                <li>and carries a firepower greater than </li>
                <li>half the star fleet. It's defenses </li>
                <li>are designed around a direct large-</li>
                <li>scale assault.</li>
              </ul>
            },
            {name: <PSERSearchLink q="management practices">Headline</PSERSearchLink>,
             id: "actions_management_practices",
             content: <ul>
               <li>Dodonna stands before a large electronic wall display. Leia </li>
               <li>and several other senators are to one side of the giant </li>
               <li>readout.</li>
              </ul>
            }
           ]
          },
          {title: "Looking for help?",
           id:"look4help",
           subsections: [],
           content: <ul>
          </ul>
          }]}
        >
          <p>The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. It's a small thermal exhaust port, right below the main port. The shaft leads directly to the reactor system. A precise hit will start a chain reaction which should destroy the station.</p>

        </SectorDetailLayout>
    );
  }
}

export default PublicSafetyEmergencyResponse;
