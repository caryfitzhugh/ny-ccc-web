import React from 'react';
import HeadlineArrow from '../home_page/headline_arrow';
import Collection from '../layouts/collection';
import Strategies from './solutions_strategies';
import PotentialSolutions from './potential_solution';
import Sidebar from './sidebar';

import water_treatment_img from '../images/highlights/water-treatment.jpeg';
import windmill_img from '../images/highlights/windmill.jpeg';
import solutions_img from '../images/highlights/solutions.jpg';


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
        collection: "NY/highlights/investigate_solutions/water_resources",
        icon: "tint"
    },
    {
        title: "Agriculture",
        collection: "NY/highlights/investigate_solutions/agriculture",
        icon: "leaf"
    },
    {
        title: "Telecommunications",
        collection: "NY/highlights/investigate_solutions/telecommunications",
        icon: "mobile-phone"
    },
    {
        title: "Ecosystems",
        collection: "NY/highlights/investigate_solutions/ecosystems",
        icon: "tree"
    },
    {
        title: "Energy",
        collection: "NY/highlights/investigate_solutions/energy",
        icon: "lightbulb-o"
    },
    {
        title: "Buildings",
        collection: "NY/highlights/investigate_solutions/buildings",
        icon: "university"
    },
    {
        title: "Coastal Zones",
        collection: "NY/highlights/investigate_solutions/coastal_zones",
        icon: "anchor"
    },
    {
        title: "Public Health",
        collection: "NY/highlights/investigate_solutions/public_health",
        icon: "medkit"
    },
    {
        title: "Transportation",
        collection: "NY/highlights/investigate_solutions/transportation",
        icon: "truck"
    }
]
 
let anchors = [
    {
        title: "Adaptation & Mitigation",
        href: "#strategies"
    },
    {
        title: "Identify Potential Solutions",
        href: "#potentialSolution"
    },
    {
        title: "Evaluate & Prioritize Solutions",
        href: "#evaluate"
    }
]

const Solutions = (props) => (
<section>
    <div className="container">
        <div className="row">
            <div className="col-sm-9 col-12 content-area">
                <HeadlineArrow title="Investigate Solutions" href="#"/>

                <p>After having identified problems, your next step in building resiliency is to investigate and evaluate potential solutions. Responding to climate change can involve adaptation, mitigation, or both.</p>
            <hr />

            <Strategies strategies={strategies} />

            <hr />

            <h3 className="identify">Identify Potential Solutions</h3>

            <p>Consider lessons learned from responses to past climate hazards; think about using new technologies and reusing existing technologies in new ways; consider different types of strategies and different timelines.</p>
            <p>Learn about successful strategies and barriers encountered by other communities, regions, and organizations. Involve stakeholders - local residents, business owners, and community leaders - in the process of generating solutions.</p>

            <PotentialSolutions potentialSolutions={potentialSolutions} />

            <hr />

            <div className="evaluate row" id="evaluate">
                <div className="col-sm-6">
                    <img src={solutions_img} alt="Photo: Evaluate Solutions"/>
                    <h3 className="identify">Evaluate & Prioritize Solutions</h3>

                    <p>Consider lessons learned from responses to past climate hazards; think about using new technologies and reusing existing technologies in new ways; consider different types of strategies and different timelines.</p>
                    <p>Learn about successful strategies and barriers encountered by other communities, regions, and organizations. Involve stakeholders - local residents, business owners, and community leaders - in the process of generating solutions.</p>

                </div>
                <div className="col-sm-6">
                    <p>
                      <strong>Highlighted Resources:</strong>
                    </p>

                    <Collection collection_name="NY/highlights/investigate_solutions/evaluate" />
                </div>
            </div>
            
            </div>

            <Sidebar anchors={anchors} resourcesCollection="NY/highlights/stakeholder_resources" mapsCollection="NY/highlights/highlights_maps" />
        </div>
    </div>
</section>
)

export default Solutions;