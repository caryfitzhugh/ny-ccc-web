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
          {title: "Identify Potential Solutions",
           id: "identify",
           content: <div>
           <p>the walls rumble closed, the room gets smaller and smaller. Chewie is whining and trying to hold a wall back with his giant paws.</p>
           <p>Han is leaning back against the other wall. Garbage is snapping and popping. Luke is trying to reach Threepio.</p>
          </div>,
          subsections: [
            {name: "Mitigation",
             id:"identify_mitigation",
             content: <p>
               Mitigation is action taken to reduce the severity of climate change, by reducing greenhouse gas emissions. Early mitigation will make it easier to adapt to climate change later on. (search mitigation)
             </p>
            },
            {name: "Adaptation",
             id:"identify_adaptation",
             content: <p>
               Adaptation is action taken to prepare for climate change, helping to reduce adverse impacts or take advantage of beneficial ones. Adaptation can be thought of as better planning, incorporating the most current information about climate into a variety of decisions.( search adaptation)
             </p>
            }
          ]
          },
          {title: "Evaluate & Prioritize Solutions",
            id: "evaluate",
            subsections: [],
            content: <div>
              <p>
                Consider timing relative to expected impacts; feasibility from perspectives such as engineering, policy, legal, and insurance; efficacy at reducing risks; robustness and opportunities for flexible adaptation pathways; and co-benefits. For each potential solution, assess the anticipated costs and risks, as well as the anticipated benefits from implementing it.
              </p>
              <Collection show_images={true} collection_name='MA/actions/implementation/evaluate_prioritize'/>
              <p>
                The final step in building resilience is to take action. Put your plan into place, establish benchmarks, and track progress. Revise at regular intervals as necessary. Understanding how to communicate your plan with stakeholders can help build and maintain support.
              </p>
            </div>
          },
          { title: "Find Funding?",
            id:"funding",
            subsections: [],
            content: <div>
              <p>Successful implementation may depend on finding funding opportunities to support your project. Below are resources to help you.</p>
              <p>
                <SearchLink params={{}} query='Massachusetts funding'>Find More...</SearchLink>
              </p>
              <Collection show_images={true} collection_name='MA/actions/implementation/find_funding' />
            </div>
          }
        ]} >
          <p>
            After having identified problems, your next step in building resiliency is to investigate and evaluate potential solutions. Responding to climate change can involve adaptation, mitigation, or both.
          </p>
        </ActionsLayout>
    );
  }
}

export default ImplementationActionsPage;
