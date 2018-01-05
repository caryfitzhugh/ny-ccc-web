import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/public_health.jpg';
import SearchLink from '../utils/search_link';
import {Footnote} from '../utils/footnotes';

const ActionLink = (props) => {
  return <li>
    <SearchLink params={{facets: {sectors: ["ma::public health"]}, query: props.q}}>
      {props.children}
    </SearchLink>
  </li>
}

const PHSearchLink = (props) => {
  return <SearchLink params={{facets: {sectors: ["ma::natural resources / habitats"], climate_changes: props.changes, actions: props.actions}, query: props.q}}>
      {props.children}
    </SearchLink>

}


class PublicHealthSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: "MA/public_health/highlighted_resources"
    };

    return (
      <SectorDetailLayout
        title="Public Health"
        image={sector_image}
        showcased_resources={showcased_resources}
        footnotes={[
          <span><a href=''></a></span>
        ]}
        sections={[
          { title: "Impacts",
            id: "impacts",
            content: <p>
            </p>,
            subsections: [
              {name: <PHSearchLink changes={["ma::rising temperatures::"]}>Headline</PHSearchLink>,
                id: "impacts_rising_temperatures",
                content: <div>
                  <p>That's impossible, even for a computer.</p>
                </div>
              },
              {name: <PHSearchLink changes={["ma::changes in precipitation::"]}>Headline</PHSearchLink>,
                id: "impacts_changes_in_precipitation",
                content: <div>
                  <p>The Death Star begins to move around the planet toward the tiny green moon.</p>
                </div>
              }
            ]
        },
        { title: "Actions",
          id: "actions",
          content: <p>
            INT. DEATH STAR
          </p>,
          subsections: [
          { name: <PHSearchLink q="research monitoring">Headline/Headline</PHSearchLink>,
            id: 'actions_research',
            content: <ul>
              <li>Tarkin and Vader watch the computer projected screen with </li>
              <li>interest, as a circle of lights intertwines around one another </li>
              <li>on the screen showing it's position in relation to Yavin and </li>
              <li>the forth moon.</li>
            </ul>
          },
          { name: <PHSearchLink actions={["ma::implementation action/direct action on target::financing"]}>Headline</PHSearchLink>,
            id: "actions_funding",
            content: <ul>
            <li><a href=''> DEATH STAR INTERCOM VOICE  </a></li>
            <li><a href=''> INT. MASSASSI OUTPOST - MAIN HANGAR DECK </a></li>
            <li><a href=''> All flight trooper, man your stations. </a></li>
            </ul>
          }
          ]
        },
        { title: "Looking for help?",
          id: "looking_for_help",
          content: <div>
            <ul>
              <li><SearchLink params={{query: ""}}>Headline</SearchLink></li>
  
            </ul>
          </div>,
          subsections: []
        }
        ]}
        >
          <p>Han is deliberately ignoring the activity of the fighter pilots' preparation. Luke is quite saddened at the sight of his friend's departure.</p>

        </SectorDetailLayout>
    );
  }
}

export default PublicHealthSectorPage;
