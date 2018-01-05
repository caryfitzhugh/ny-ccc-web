import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/recreation.jpg';
import SearchLink from '../utils/search_link';
import {Footnote, Footnotes} from '../utils/footnotes';

const ActionLink = (props) => {
  return <li>
    <SearchLink params={{facets:{sectors: ["ma::recreation"]}, query: props.q}}>
      {props.children}
    </SearchLink>
  </li>
}

class RecreationSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: "MA/recreation/highlighted_resources"
    };

    return (
      <SectorDetailLayout
        title="Recreation"
        image={sector_image}
        image_credit="FEMA/Mike Moore"
        showcased_resources={showcased_resources}
        footnotes={[
            <span>Darth Vader strides into the control room, where Tarkin is watching the huge view screen. A sea of stars is before him.</span>,


        ]}

        sections={[
        { title: "Impacts",
          id: 'impacts',
          content: <div>
          </div>,
          subsections: [
            { name: <SearchLink params={{query: ""}}>Headline</SearchLink>,
              id: "impacts_rising_temperatures",
              content: <div>
                <p>Solo swivels behind his cannon, his aim describing the arc of the TIE fighter. The fighter comes closer, firing at the pirateship, but a well-aimed blast from Solo's laser cannon hits the attacker</p>
              </div>
            },
            { name: <SearchLink params={{query: ""}}>Headline</SearchLink>,
              id:"impacts_changes_in_precipitation",
              content: <p>
                Han, removes his gloves and smiling, is at the controls of the ship. Chewie moves into the aft section to check the damage. Leia is seated near Han.
              </p>
            }
          ]
        },
        { title: "Actions",
          id: 'actions',
          content: <div>
          </div>,
          subsections: [
            { name: <SearchLink params={{query:""}}>Headline</SearchLink>,
              id: "actions_planning",
              content: <ul>
                <li>Willard, the commander of the Rebel forces, rushes up to the group and gives Leia a big hug.</li>
              </ul>
            },
            { name: <SearchLink params={{query:""}}>Headline</SearchLink>,
              id: "actions_management_practices",
              content: <ul>
                <li>The military speeder stops in a huge spaceship hangar, set up in the interior of the crumbling temple.</li>
              </ul>
            }
          ]},
          {title: "Looking for Help?",
            id: "looking_for_help",
            subsections: [],
            content: <ul>
              <li><a href=''> INT. DEATH STAR - CONTROL ROOM </a></li>
            </ul>
          }
        ]}
        >

          <p>The battered pirateship drifts into orbit around the planet Yavin and proceeds to one of its tiny green moons.</p>

        </SectorDetailLayout> 
    );
  }
}

export default RecreationSectorPage;
