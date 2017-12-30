import React, { Component } from 'react';
import ActionsLayout from './layout';

class PlanningActionsPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: "MA/actions/planning/highlighted_resources"
    };

    return (<ActionsLayout
        title="Planning"
        active_layers=""
        showcased_resources={showcased_resources}
        datagrapher_file='Temp/state/pcpn_2/ANN/MA/'
        sections={[
          {title: " INT. DEATH STAR - HALLWAY",
           id: "impacts_and_risks",
           content: <div>
            <p>
              Luke, Han, Chewbacca, and Leia run down an empty hallway and 
               stop before a bay window overlooking the pirateship. Troopers 
               are milling about the ship. Luke takes out his pocket comlink.
            </p>
            <p>
               HAN looking at his ship There she is.
            <p>
               LUKE See-Threepio, do you copy?
            </p>
          </div>,
          subsections: []
          },
          {title: " THREEPIO LINES",
           id: "vulnerability",
           content: <div>
            <p>
              For the moment. Uh, we're in the main hangar across from the ship.
            </p>
            <p>
              Han is watching the dozen or so troops moving in and out of the pirateship. Leia moves towards Han, touches his arm and points out the window to the ship.
            </p>
          </div>,
          subsections: []
          }
        ]} >
          <p>
           You came in that thing? You're braver that I thought.
          </p>
          <p>
            Han gives her a dirty look, and they start off down the hallway. They round a corner and run right into twenty Imperial stormtroopers heading toward them. Both groups are taken by surprise and stop in their tracks.
          </p>
          <ol>
            <li>It's them! Blast them!</li>
            <li>Get back to the ship!</li>
            <li>Han has already rounded a corner and does not hear.</li>
            <li>He certainly has courage.</li>
            <li>What good will it do us if he gets himself killed? Come on!</li>
            <li> Luke is furious but doesn't have time to think about it</li>
          </ol>
          <p>
            Luke and Leia start off toward the starship hangar.
          </p>

        </ActionsLayout>
    );
  }
}

export default PlanningActionsPage;
