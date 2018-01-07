import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/economy.jpg';
import SearchLink from '../utils/search_link';
import {Footnote} from '../utils/footnotes';

const ActionLink = (props) => {
  return <li>
    <SearchLink params={{facets: {sectors: ["ma::economy"]}, query: props.q}}>
      {props.children}
    </SearchLink>
  </li>
}
class EconomySectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: "MA/economy/highlighted_resources"
    };

    return (
      <SectorDetailLayout
        title="Economy"
        image={sector_image}
        image_credit="John Phelan"
        showcased_resources={showcased_resources}
        footnotes={[
          <span>A stormtrooper comes down the ramp of the pirateship and waves to the gantry officer, pointing to his ear indicating his comlink is not working. The gantry officer shakes his head in disgust and heads for the door, giving his aide an annoyed look. </span>,
        ]}
        sections={[
          {title: "Headline",
            id: 'impacts',
            content: <p> </p>,
            subsections: [
              { name:<SearchLink params={{query:"economy rising temperatures"}}>Headline</SearchLink>,
                id: "impacts_rising_temperatures",
                content: <div>
                  <p> Take over. We've got a bad transmitter. I'll see what I can do.</p>
                </div>
              },
              { name: <SearchLink params={{query:"economy changes in precipitation"}}>Headline</SearchLink>,
                id: 'impacts_changes_in_precipitation',
                content: <div>
                  <p> You know, between his howling and your blasting everything in sight, it's a wonder the whole station doesn't know we're here.</p>
                </div>
              }
            ]},
            {title:"Headline",
              id:'actions',
              content: <p></p>,
              subsections: [{
                name: <SearchLink params={{query:"economy planning"}}>Headline</SearchLink>,
                id: 'actions_planning',
                content: <ul>
                  <li> Bring them on! I prefer a straight fight to all this sneaking around.</li>
                </ul>
              }]},
          {title: "Looking for help?",
            id: 'looking_for_help',
            content: <ul>
              <li> </li>
            </ul>,
            subsections: []
          }

        ]}
        >
          <div>
            <p>As the officer approaches the door, it slides open revealing the towering Chewbacca. The gantry officer, in a momentary state of shock, stumbles backward. With a bone- chilling howl, the giant Wookiee flattens the officer with one blow. The aide immediately reaches for his pistol, but is blasted by Han, dressed as an Imperial stormtrooper. Ben and the robots enter the room quickly followed by Luke, also dressed as a stormtrooper. Luke quickly removes his helmet.  </p>
          </div>
        </SectorDetailLayout>
    );
  }
}

export default EconomySectorPage;
