import React from 'react';
import HeadlineArrow from '../home_page/headline_arrow';
import Collection from '../layouts/collection';
import Sidebar from './sidebar';
import Assessments from './assessments';
import ArticleList from './article_list';

import flooding_img from '../images/highlights/flooding.jpeg';
import coastal_flooding_img from '../images/highlights/coastal_flooding.jpeg';
import heat_wave_img from '../images/highlights/heat-wave.jpeg';
import downpours_img from '../images/highlights/downpours.jpeg';
import snowpack_decline_img from '../images/highlights/snowpack-decline.jpeg';
import seasonal_drought_img from '../images/highlights/seasonal_drought.jpeg';
import extreme_weather_img from '../images/highlights/extreme_weather.jpeg';

import './problems.css';


let assessments = [
    {
        title: "Impacts & Risks",
        id: "impacts",
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
        ],
        collection: "NY/highlights/problems/impacts_risks",
        query: "impacts+risks"
    },
    {
        title: "Vulnerability Assessment",
        id: "vulnerability",
        description: "Vulnerability assessment focuses on identifying, inventorying, and prioritizing people, places, resources, and infrastructure that may be impacted by climate change.",
        source: "Definitions from ClimAID Annex II, Climate Adaptation Guidebook for New York State:",
        definitions: [ 
            {
                title: "Vulnerability",
                definition: " is the degree to which natural and human systems are susceptible to, and unable to cope with, adverse impacts of climate change. For example, aging culverts designed to older standards and with pre-existing erosion are more vulnerable to damage and failure than newer culverts at a similar location."
            }
        ],
        collection: "NY/highlights/problems/vulnerability",
        query: "vulnerability assessment"
    }
]

let hazards = [
    {
        title: "Coastal Flooding",
        id: "flooding",
        img: coastal_flooding_img,
        caption: "Impact on lower Manhattan and Brooklyn from sea level rise of four feet above current Mean Higher High Water. ",
        source: " NOAA Sea Level Rise and Coastal Flooding Impacts Viewer",
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
    {
        title: "Heat Waves",
        id: "heatWaves",
        img: heat_wave_img,
        caption: "Projected number of heat waves in the 21st century for the Rochester, NY region, for two different emissions scenarios. ",
        source: " Data from Climate Change in New York State - Refined and Updated Projections (NYSERDA, 2014)",
        abstract: <div>
            <p>
                The number of days with temperatures at or above 90° F in New York City has doubled from around ten per year in the 1870s to around twenty per year in the 1990s. Heat waves are predicted to become more frequent and intense, increasing heat-related illness and death and posing new challenges to the energy system, air quality managers, and agriculture.
            </p>
        </div>,
        collection: "NY/highlights/problems/heat_waves"
    },
    {
        title: "Heavy Downpours",
        id: "downpours",
        img: downpours_img,
        caption: "Graph of 1-day storm amount at recurrence of 50 years for Binghamton, NY. ",
        source: " Extreme Precipitation in a Changing Climate",
        abstract: <div>
            <p>
                The Northeastern U.S. has experienced a 71% increase in the amount of precipitation falling in very heavy events from 1958 to 2012, the largest regional change nationwide. Heavy rainfall events such as Hurricane Irene and Tropical Storm Lee can lead to devastating inland flooding in addition to flooding along waterways and coasts.
            </p>
        </div>,
        collection: "NY/highlights/problems/downpours"
    },
    {
        title: "Snowpack Decline",
        id: "snowpack",
        img: snowpack_decline_img,
        caption: "Time series plot of winter snowfall from Wanakena Ranger School weather station (Adirondacks) ",
        source: " Climate Data Grapher",
        abstract: <div>
            <p>
                The accumulation of winter snow is expected to decline sharply by the end of this century. This decline has implications for New York’s water supply and for tourism. Skiing and snowmobiling contribute close to $2 billion to New York State’s economy each year, and the success of these recreational industries depends directly on a healthy snowpack.
            </p>
        </div>,
        collection: "NY/highlights/problems/snowpack_decline"
    },
    {
        title: "Seasonal Drought",
        id: "drought",
        img: seasonal_drought_img,
        caption: "U.S. Drought Monitor drought conditions in the Northeast, June 16, 2015. ",
        source: " Northeast Regional Climate Center",
        abstract: <div>
            <p>
                Late-summer, short-duration droughts are projected to become more frequent and intense during this century, affecting water supply for agriculture, ecosystems, and energy production.
            </p>
        </div>,
        collection: "NY/highlights/problems/seasonal_drought"
    },
    {
        title: "Extreme Weather",
        id: "weather",
        img: extreme_weather_img,
        caption: "Tropical Storm Irene makes landfall near New York City. ",
        source: " NOAA, 2011",
        abstract: <div>
            <p>
                Extreme weather can have a big impact in a short time. New York State experienced extreme weather with the high winds and large storm surges of Hurricane Sandy and the extreme rainfall during Hurricane Irene, Tropical Storm Lee, and over Long Island in August 2014 (over 13 inches of rain in 24 hours). Although a particular weather event cannot be attributed to climate change, climate models predict significant shifts in patterns of extreme weather events over the coming decades. New Yorkers can expect more and longer-lasting heat waves, and more heavy rainfalls.
            </p>
        </div>,
        collection: "NY/highlights/problems/extreme_weather"
    },
]
 
let anchors = [
    {
        title: "Impacts & Risks",
        href: "#impacts"
    },
    {
        title: "Vulnerability Assessment",
        href: "#vulnerability"
    },
    {
        title: "Key Hazards",
        href: "#hazards",
        ul: [
            {
                title: "Coastal Flooding",
                href: "flooding"
            },
            {
                title: "Heat Waves",
                href: "heatWaves"
            },
            {
                title: "Heavy Downpours",
                href: "downpours"
            },
            {
                title: "Snowpack Decline",
                href: "snowpack"
            },
            {
                title: "Seasonal Drought",
                href: "drought"
            },
            {
                title: "Extreme Weather",
                href: "weather"
            }
        ]
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

                <h3 id="hazards">Key Hazards</h3>
                <ArticleList list={hazards}/>
            </div>         

            <Sidebar anchors={anchors} resourcesCollection="NY/highlights/stakeholder_resources" mapsCollection="NY/highlights/highlights_maps" />

        </div>
    </div>
</section>
)

export default Problems;
