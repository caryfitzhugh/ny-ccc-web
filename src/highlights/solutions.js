import React from 'react';
import HeadlineArrow from '../home_page/headline_arrow';
import Collection from '../layouts/collection';
import Strategies from './solutions_strategies.js';
import PotentialSolutions from './potential_solution.js';

import water_treatment_img from '../images/highlights/water-treatment.jpeg';
import windmill_img from '../images/highlights/windmill.jpeg';


import './solutions.css';

let strategies = [
  {
    image: water_treatment_img,
    type: "Adaptation",
    source: "NYC Department of Environmental Protection, 2008",
    abstract: "Adaptation is action taken to prepare for climate change, helping to reduce adverse impacts or take advantage of beneficial ones. Adaptation can be thought of as better planning, incorporating the most current information about climate into a variety of decisions.",
    collection: "NY/highlights/investigate_solutions/adaptation",
    searchLink: "not-yet-implemented/solutions/adaptation"
  },
  {
    image: windmill_img,
    type: "Mitigation",
    source: "Iberdrola Renewables, Inc., NREL 15232",
    abstract: "Mitigation is action taken to reduce the severity of climate change, by reducing greenhouse gas emissions. Early mitigation will make it easier to adapt to climate change later on.",
    collection: "NY/highlights/investigate_solutions/mitigation",
    searchLink: "not-yet-implemented/solutions/mitigation"
  }
]

let potentialSolutions = [
    {
        title: "Water Resources",
        collection: "NY/highlights/investigate_solutions/water_resources"
    },
    {
        title: "Agriculture",
        collection: "NY/highlights/investigate_solutions/agriculture"
    },
    {
        title: "Telecommunications",
        collection: "NY/highlights/investigate_solutions/telecommunications"
    },
    {
        title: "Ecosystems",
        collection: "NY/highlights/investigate_solutions/ecosystems"
    },
    {
        title: "Energy",
        collection: "NY/highlights/investigate_solutions/energy"
    },
    {
        title: "Buildings",
        collection: "NY/highlights/investigate_solutions/buildings"
    },
    {
        title: "Coastal Zones",
        collection: "NY/highlights/investigate_solutions/coastal_zones"
    },
    {
        title: "Public Health",
        collection: "NY/highlights/investigate_solutions/public_health"
    },
    {
        title: "Transportation",
        collection: "NY/highlights/investigate_solutions/transportation"
    }
]

const Solutions = (props) => (
<section>
    <div className="col-sm-9 col-xs-12 content-area">
        <HeadlineArrow title="Investigate Solutions" href="#"/>

        <p>After having identified problems, your next step in building resiliency is to investigate and evaluate potential solutions. Responding to climate change can involve adaptation, mitigation, or both.</p>
    <hr />

    <Strategies strategies={strategies} />

    <hr />

    <h3 className="identify">Identify Potential Solutions</h3>

    <p>Consider lessons learned from responses to past climate hazards; think about using new technologies and reusing existing technologies in new ways; consider different types of strategies and different timelines.</p>
    <p>Learn about successful strategies and barriers encountered by other communities, regions, and organizations. Involve stakeholders - local residents, business owners, and community leaders - in the process of generating solutions.</p>

    <PotentialSolutions potentialSolutions={potentialSolutions} />

    </div>
</section>
)

export default Solutions;
