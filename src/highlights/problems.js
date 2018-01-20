import React from 'react';
import HeadlineArrow from '../home_page/headline_arrow';
import Collection from '../layouts/collection';
import Sidebar from './sidebar';
import Assessments from './assessments';
import Hazards from './hazards';

import flooding_img from '../images/highlights/flooding.jpeg';
import coastal_flooding_img from '../images/highlights/coastal_flooding.jpeg';


import './problems.css';


let assessments = [
    {
        title: "Impacts & Risks",
        description: "The impacts and risks of climate change affect the human health, built environment, ecosystems, and economy in your region.",
        source: "Definitions from ClimAID Annex II, Climate Adaptation Guidebook for New York State:",
        definitions: [ 
            {
                title: "Impact",
                definition: " is the effect a change in climate could have on natural or human systems. For example, an increase in heavy downpours can lead to more road flooding, culvert washouts, and stream bank erosion."
            },
            {
                title: "Risk",
                definition: " is the product of the likelihood of a hazardous event occurring and the magnitude of consequences should that event occur. For example, two roads in a river valley may have the same vulnerability to flooding, but the risk is greater for a main traffic artery than for a road with little traffic."
            }
        ]
    },
    {
        title: "Vulnerability Assessment",
        description: "Vulnerability assessment focuses on identifying, inventorying, and prioritizing people, places, resources, and infrastructure that may be impacted by climate change.",
        source: "Definitions from ClimAID Annex II, Climate Adaptation Guidebook for New York State:",
        definitions: [ 
            {
                title: "Vulnerability",
                definition: " is the degree to which natural and human systems are susceptible to, and unable to cope with, adverse impacts of climate change. For example, aging culverts designed to older standards and with pre-existing erosion are more vulnerable to damage and failure than newer culverts at a similar location."
            }
        ]
    }
]

let hazards = [
    {
        title: "Coastal Flooding",
        img: coastal_flooding_img,
        caption: "Impact on lower Manhattan and Brooklyn from sea level rise of four feet above current Mean Higher High Water.",
        source: "NOAA Sea Level Rise and Coastal Flooding Impacts Viewer",
        abstract: <div>
            <p>
                Sea level is projected to rise in New York City and the lower Hudson by 15-75 inches by 2100. Sea level rise leads to coastal flooding, which can impact public and private infrastructure, water quality, energy systems, and public health.
            </p>
            <p>
                Coastal flooding is also caused by storm surges that occur from extreme events, which are occurring with increasing frequency and intensity. In 2012 storm surge from Hurricane Sandy reached over eight feet above ground level in some areas. Coastal flooding from storm surges can endanger lives and destroy property."
            </p>
        </div>,
        collection: "NY/highlights/problems/coastal_flooding"
    },
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

const Problems = (props) => (
<section>
    <div className="container problems">
         <div className="row">
            <div className="col-sm-9 col-12 content-area">
                <HeadlineArrow title="Identify Problems" href="#"/>
                <div className="row">
                    <div className="col-sm-6">
                        <p>Temperatures are increasing, precipitation patterns are changing, sea level is rising, and extreme weather events are becoming more frequent. Climate change is already affecting the people and resources of New York State, and these impacts are projected to grow. At the same time, communities have the ability to address many climate-related risks, reduce negative impacts, and take advantage of possible opportunities that may arise from the changing climate.</p>
                        <p> A first step in becoming a climate-resilient community is to identify the problems you face: specific climate hazards, their impacts and risks, and vulnerabilities.</p>

                    </div>
                    <div className="col-sm-6">
                        <img src={flooding_img} alt="NY 416 flooded by nearby Wallkill River, already high after Hurricane Irene, following Tropical Storm Lee, south of Montgomery, NY."/>
                        <p className="caption">
                            NY 416 flooded by nearby Wallkill River, already high after Hurricane Irene, following Tropical Storm Lee, south of Montgomery, NY.
                        </p>
                    </div>
                </div>

                <hr />

                <Assessments assessments={assessments} />

                <h3>Key Hazards</h3>
                <Hazards hazards={hazards}/>
            </div>         

            <Sidebar anchors={anchors} resourcesCollection="NY/highlights/stakeholder_resources" mapsCollection="NY/highlights/highlights_maps" />

        </div>
    </div>
</section>
)

export default Problems;
