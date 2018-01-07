import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/forestry.jpg';
import SearchLink from '../utils/search_link';
import {Footnote} from '../utils/footnotes';

const ForestLink = (props) => {
  return <SearchLink params={{facets: {sectors: ["ma::forestry"], climate_changes: props.changes, actions: props.actions}, query: props.q}}>
      {props.children}
    </SearchLink>
}

class ForestrySectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Higlighted Resources",
      collection_name: "MA/forestry/highlighted_resources",
    };

    return (
      <SectorDetailLayout
        title="Forestry"
        image={sector_image}
        image_credit=""
        showcased_resources={showcased_resources}
        footnotes={[
          <span> The pirateship is pulled in through port doors of the Death Star, coming to rest in a huge hangar. Thirty stormtroopers stand at attention in a central assembly area.     </span>,
        ]}
        sections={[
          {title: "Headline",
           id: "impacts",
           content: <p>
           A line of stormtroopers march toward the pirateship in readiness to board it, while other troopers stand with weapons ready to fire.
           </p>,
           subsections: [
            {name: <ForestLink changes={['ma::rising temperatures::']}>Headline</ForestLink>,
             id:"impacts_rising_temps",
             content: <div>
                <p>Tarkin pushes a button and responds to the intercom buzz.</p>
                <p>Close all outboard shields! Close all outboard shields!</p>
              </div>
            }
            ]
          },
          {title: "Headline",
           id: "actions",
           content: <p>
           </p>,
           subsections: [
            {name: <ForestLink actions={["ma::planning::"]}>Headline</ForestLink>,
             id:"impacts_planning",
             content: <ul>
                <li>Vader and a commander approach the troops as an Officer and </li>
                <li>several heavily armed troops exit the spacecraft.</li>
             </ul>
            },
            {name: <ForestLink q="">Headline</ForestLink>,
             id: 'impacts_management',
             content: <ul>
                <li>Boy, it's lucky you had these compartments.</li>
                <li>Han shakes his head, muttering to himself. Chewbacca agrees</li>
             </ul>
            }
           ]
          },
          {title: "Looking for help?",
           id: 'looking_for_help',
           subsections: [],
           content: <ul>
             <li><SearchLink params={{query:''}}>Headline </SearchLink></li>
             
           </ul>
          }
        ]}
        >
        <p>TX-four-one-two. Why aren't you at your post? TX-four-one-two, do you copy?</p>

        </SectorDetailLayout>
    );
  }
}

export default ForestrySectorPage;
