import React, { Component } from 'react';
import ActionsLayout from './layout';
import Collection from '../layouts/collection';
import SearchLink from '../utils/search_link';

class ImplementationActionsPage extends Component {
  render() {
    let showcased_resources = null;

    return (<ActionsLayout
        title="Implementation"
        active_layers=""
        showcased_resources={showcased_resources}
        datagrapher_file='Temp/state/pcpn_2/ANN/MA/'
        sections={[
          {title: "INT. DEATH STAR - MAIN FORWARD BAY - SERVICE PANEL",
           id: "identify",
           content: <div>
           <p>the walls rumble closed, the room gets smaller and smaller. Chewie is whining and trying to hold a wall back with his giant paws.</p>
           <p>Han is leaning back against the other wall. Garbage is snapping and popping. Luke is trying to reach Threepio.</p>
          </div>,
          subsections: [
            {name: "Mitigation",
             id:"identify_mitigation",
             content: <p>
               Han and Leia try to brace the contracting walls with a pole. Leia begins to sink into the trash.
             </p>
            },
            {name: "Adaptation",
             id:"identify_adaptation",
             content: <p>
               Little Artoo carefully plugs his claw arm into a new wall socket and a complex array of electronic sounds spew from the tiny robot.
             </p>
            }
          ]
          },
          {title: "INT. DEATH STAR - GARBAGE ROOM",
            id: "evaluate",
            subsections: [],
            content: <div>
              <p>
                The walls are only feet apart. Leia and Han are braced against the walls. The princess is frightened. They look at each other. Leia reaches out and takes Han's hand and she holds it tightly. She's terrified and suddenly groans as she feels the first crushing pressure against her body.
              </p>
              <Collection show_images={true} collection_name='MA/actions/implementation/evaluate_prioritize'/>
              <p>
                Meanwhile, Luke is lying on his side, trying to keep his head above the rising ooze. Luke's comlink begins to buzz and he rips it off his belt.
              </p>
            </div>
          },
          { title: " INT. DEATH STAR - MAIN FORWARD BAY - SERVICE PANEL",
            id:"funding",
            subsections: [],
            content: <div>
              <p>
               Muffled sounds of Luke's voice over the comlink can be heard, but not distinctly.</p>
              <p>
                <SearchLink params={{}} query='Massachusetts funding'>Find More...</SearchLink>
              </p>
              <Collection show_images={true} collection_name='MA/actions/implementation/find_funding' />
            </div>
          }
        ]} >
          <p>
               Will you shut up and listen to me? Shut down all garbage mashers on the detention level, will you? Do you  copy? 
          </p>
        </ActionsLayout>
    );
  }
}

export default ImplementationActionsPage;
