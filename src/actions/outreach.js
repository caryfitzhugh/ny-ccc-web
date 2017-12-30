import React, { Component } from 'react';
import ActionsLayout from './layout';
import SearchLink from '../utils/search_link';

class OutreachActionsPage extends Component {
  render() {
    let showcased_resources = {
      title: "Highlighted Resources",
      collection_name: "MA/actions/outreach/highlighted"
    };

    return (<ActionsLayout
        title="Outreach"
        active_layers=""
        showcased_resources={showcased_resources}
        datagrapher_file='Temp/state/pcpn_2/ANN/MA/'
        sections={[]} >
        <p>
          The Dia Nogu bangs against the hatch and a long, slimy tentacle works its way out of the doorway searching for a victim. Han aims his pistol.
        </p>
        <p>
          <SearchLink params={{facets:{actions:["ma::outreach/education::"]}}} query="">Search to find more in the repository</SearchLink>
        </p>
        </ActionsLayout>
    );
  }
}

export default OutreachActionsPage;
