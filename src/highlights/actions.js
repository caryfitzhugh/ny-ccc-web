import React from 'react';
import HeadlineArrow from '../home_page/headline_arrow';
import ArticleBlocks from './article_blocks';
import ArticleList from './article_list';
import Sidebar from './sidebar';

import meeting_img from '../images/highlights/meeting.jpeg';
import change_img from '../images/highlights/change.jpeg';
import greenhouse_img from '../images/home_page/primary_story.jpg';
import rainbarrel_img from '../images/highlights/rainbarrel.jpeg';
import shoreline_img from '../images/highlights/shoreline.jpeg';
import stormwater_img from '../images/highlights/stormwater.jpeg';
import coastal_resilience_img from '../images/highlights/coastal_resilience.jpeg';
import renewable_energy_img from '../images/highlights/renewable_energy.jpeg';

import './actions.css';

let articles = [
  {
    image: meeting_img,
    type: "Create a Plan",
    abstract: "Decide on an approach, formulate an implementation plan, and set up a process to monitor and reassess.",
    collection: "NY/highlights/actions/plan"
  },
  {
    image: change_img,
    type: "Find Funding",
    abstract: "Successful implementation may depend on finding funding opportunities to support your project.",
    collection: "NY/highlights/actions/find_funding"
  },
]

let articleList = [
    {
        title: "Reducing greenhouse gas emissions and preparing for climate change: Climate Smart Communities",
        buttonLabel: "greenhouse gas emissions",
        id: "greenhouse",
        img: greenhouse_img,
        caption: "Climate Smart Community certification ",
        source: " Mid-Hudson Climate Smart Communities",
        abstract: <div>
            <p>
                Learn how communities in the mid-Hudson region of New York State have achieved Climate Smart Community certification.
            </p>
        </div>,
        collection: "NY/highlights/actions/greenhouse_gas"
    },
    {
        title: "Preparing for heavy downpours: Save the Rain",
        buttonLabel: "preparing for heavy downpours",
        id: "rain",
        img: rainbarrel_img,
        caption: "Rain barrel ",
        source: " Onondaga County Save the Rain",
        abstract: <div>
            <p>
                Learn how the city of Syracuse and Onondaga County are implementing a comprehensive stormwater management plan — including both "green" and "gray" projects — to reduce pollution to Onondaga Lake and its tributaries.
            </p>
        </div>,
        collection: "NY/highlights/actions/save_the_rain"
    },
    {
        title: "Preparing for extreme weather along lakes, rivers, and the coast: stabilizing shorelines",
        buttonLabel: "stabilizing shorelines",
        id: "shoreline",
        img: shoreline_img,
        caption: "Shoreline Stabilization Handbook for Lake Champlain and Other Inland Lakes ",
        source: " Northwest Regional Planning Commission, Vermont",
        abstract: <div>
            <p>
                Find practical information on nature- and engineering-based techniques being used across New York State to prevent shoreline erosion.
            </p>
        </div>,
        collection: "NY/highlights/actions/extreme_weather"
    },
    {
        title: "Managing stormwater along the coast: the Staten Island Bluebelt",
        buttonLabel: "managing stormwater",
        id: "stormwater",
        img: stormwater_img,
        caption: "Staten Island Bluebelt ",
        source: " NYC Department of Environmental Protection",
        abstract: <div>
            <p>
                Learn about the role of a wetland system known as the Staten Island Bluebelt in stormwater management, and how residents can play a vital role in supporting the Bluebelt and protecting it from pollution.
            </p>
        </div>,
        collection: "NY/highlights/actions/managing_stormwater"
    },
    {
        title: "Building for resilience along New York City's coast",
        buttonLabel: "coastal resilience",
        id: "resilience",
        img: coastal_resilience_img,
        caption: "Cross section of buildings showing flood ",
        source: " NYCPlanning, City of New York",
        abstract: <div>
            <p>
                Learn about efforts to build resiliency in the New York City area, from detailed information on design principles and standards to guidance on flood-resistant new construction and retrofitting in urban areas, to designs for large-scale community rebuilding projects following Hurricane Sandy.
            </p>
        </div>,
        collection: "NY/highlights/actions/coastal_resilience"
    },
    {
        title: "Promoting renewable energy: Solar Tompkins",
        buttonLabel: "renewable energy",
        id: "renewable",
        img: renewable_energy_img,
        caption: "Solar Tompkins ",
        source: " Ithaca Week",
        abstract: <div>
            <p>
                In 2014, Solar Tompkins hosted a very successful county-wide community solar program that far exceeded its goal of doubling the total amount of residential solar photovoltaics installed to date in Tompkins County, and left the market with a permanently increased annual rate of solar power adoption.
            </p>
        </div>,
        collection: "NY/highlights/actions/renewable_energy"
    },
]


let anchors = [
    {
        title: "Create Plan",
        href: "#action"
    },
    {
        title: "Find Funding",
        href: "#action"
    },
    {
        title: "Success Stories",
        href: "#successStories",
        ul: [
            {title: "Climate Smart Communities", href: "greenhouse"},
            {title: "Save the Rain", href: "rain"},
            {title: "Stabilizing Shorelines", href: "shoreline"},
            {title: "Staten Island Bluebelt", href: "stormwater"},
            {title: "Building for resilience along New York's coast", href: "resilience"},
            {title: "Promoting renewable energy",href: "renewable"}
        ]
    }
]

const Actions = (props) => (
<section aria-label="Actions" className="container">>
    <div className="row">
        <div className="col-sm-9 col-12 content-area">
            <HeadlineArrow title="Take Action" href="#"/>
            <p>The final step in building resilience is to take action. Put your plan into place, establish benchmarks, and track progress. Revise at regular intervals as necessary. Understanding how to communicate your plan with stakeholders can help build and maintain support.</p>
            <hr />
            <ArticleBlocks articles={articles} id="action" />
            <hr />
            <h3 id="successStories">Success Stories</h3>
            <ArticleList list={articleList} />
        </div>
        <Sidebar anchors={anchors} resourcesCollection="NY/highlights/stakeholder_resources" mapsCollection="NY/highlights/highlights_maps" />
    </div>
</section>
)

export default Actions;
