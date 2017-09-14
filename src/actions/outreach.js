import React, { Component } from 'react';
import ActionsLayout from './layout';

class OutreachActionsPage extends Component {
  render() {
    let showcased_resources = null;

    return (<ActionsLayout
        title="Outreach"
        active_layers=""
        showcased_resources={showcased_resources}
        datagrapher_file='Temp/state/pcpn_2/ANN/MA/'
        sections={[
          {title: "Changes",
           id: "changes",
           content: <div>
            <ul>
            </ul>
          </div>,
          subsections: []
          }
        ]} >

          <em>Content Waiting </em>
        </ActionsLayout>
    );
  }
}

export default OutreachActionsPage;
