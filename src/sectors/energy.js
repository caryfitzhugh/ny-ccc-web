import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import energy_image from '../images/sectors/energy.jpg';
import SearchLink from '../utils/search_link';
import {Footnote} from '../utils/footnotes';

const ActionLink = (props) => {
  return <li>
    <SearchLink params={{facets:{sectors: ["ma::energy"]}, query: props.q}}>
      {props.children}
    </SearchLink>
  </li>
}

class EnergySectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: "MA/energy/highlighted_resources"
    };

    return (
      <SectorDetailLayout
        title="Energy"
        image={energy_image}
        image_credit="FEMA/Jocelyn Augustino"
        showcased_resources={showcased_resources}
        footnotes={[

        ]}
        sections={ [
          {title: "Impacts",
            id: 'impacts',
            content: <p>
              </p>,
            subsections: [
              { name:"Sea Level Rise",
                id: "impacts_slr",
                content: <ul>
                </ul>
              },
              { name: "Changes in Precipitation",
                id: 'impacts_changes_in_precipitation',
                content: <ul>
                </ul>
              },
              { name: "Extreme Weather",
                id: "impacts_extreme_weather",
                content: <ul>
                </ul>
              },
              { name: "Rising Temperatures",
                id: "impacts_rising_temperatures",
                content: <ul>
                </ul>
              }
            ]},
          {title: "Actions",
            id: 'actions',
            content: <p>
              </p>,
            subsections: [
              { name:"Planning",
                id: "actions_planning",
                content: <ul>
                </ul>
              },
              { name: "Management Practices",
                id: 'actions_management_practices',
                content: <ul>
                </ul>
              },
              { name: "Outreach / Education",
                id: "actions_outreach",
                content: <ul>
                </ul>
              },
              { name: "Technology",
                id: "actions_tech",
                content: <ul>
                <li>
                  <ul>
                  </ul>
                </li>
                </ul>
              },
              { name: "Policies / Laws",
                id: "actions_policies_laws",
                content: <ul>
                </ul>
              },
              { name: "Research / Monitoring",
                id: "actions_research",
                content: <ul>
                </ul>
              },
              { name: "Funding",
                id: "actions_funding",
                content: <ul>
                </ul>
              }
            ]},
          {title: "Looking for help?",
            id: 'looking_for_help',
            subsections: [],
            content: <ul>
            </ul>
          }
        ]}
        >

        </SectorDetailLayout>
    );
  }
}

export default EnergySectorPage;
