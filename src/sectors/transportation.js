import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import SearchLink from '../utils/search_link';
import transportation_image from '../images/sectors/transportation.jpg';
import { Link } from 'react-router-dom';

class TransportationSectorPage extends Component {
   render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: "NY/transportation/highlighted_resources"
    };

    return (
      <SectorDetailLayout
        showcased_resources={showcased_resources}
        title="Transportation"
        image={transportation_image}
        image_credit="Daniel Case"
        footnotes={[

        ]}
        sections={ [
          {title: "Transportation",
            id: 'transportation',
            subsections: [
              { name:"Temperature Changes",
                id: "impacts_temperature_changes",
                content: <ul>
                    <li>Extreme heat may cause heat stress in materials like asphalt and increase the frequency of repairs and replacements</li>
                    <li>Peaks in power demand during hotter summer days could cause outages that affect electrified public transit</li>
                    <li>High temperatures and dense air conditions could increase runway length requirements for aircraft due to diminished performance in such conditions</li>
                  <SearchLink params={{query: "transportation changes in percipitation"}}>> Find more information</SearchLink>
                  </ul>
              },
              { name: "Precipitation Changes",
                id: 'impacts_precipitation_changes',
                content: <ul>
                  <li>Flooding caused by heavier downpours may damage roads and stormwater infrastructure like undersized culverts</li>
                  <li>More nuisance ponding on roads may slow commutes and commerce</li>
                  <li>Rapid freeze thaw cycles may cause damage to road surfaces</li>
                  <SearchLink params={{query: "transportation changes in percipitation"}}>> Find more information</SearchLink>
                  </ul>
              },
              { name: "Extreme Weather",
                id: "impacts_extreme_weather",
                content: <ul>
                  <li>Costly damage to roads, bridges, and rail networks may occur as a result of extreme nor’easters, hurricanes, severe thunderstorms and blizzards</li>
                  <li>Extensive flood damage to roads and bridges could dramatically affect commerce and public health and safety especially where alternative routes aren’t available</li>
                  <li>High winds could down power lines and poles adjacent to roads</li>
                  <li>Communities and critical facilities could be cut off after storms</li>

                  <SearchLink params={{query: "transporation extreme weather"}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Sea Level Rise",
                id: "impacts_rising_sea_level",
                content: <ul>
                  <li>Coastal storm surges may become larger, extending flood hazard areas into areas where critical infrastructure is located</li>
                  <li>As sea level rise progresses, roadways, subway and highway tunnels, airports and other critical elements in our transportation network could be inundated</li>
                  <SearchLink params={{query: "transportation sea level rise"}}>> Find more information</SearchLink>
                </ul>
              }
            ]},
          {title: "Preparing for Climate Change",
            id: 'preparing_for_climate_change',

            subsections: [
              { name:"Planning",
                id: "actions_planning",
                content: <ul>

                  <li>Incorporate climate change vulnerability assessments and adaptation strategies into transportation plans </li>
                  <li>Update floodplain mapping using LiDAR and climate models and utilize maps to assess future flood hazard zones for infrastructure</li>
                  <li>Incorporate climate change projections into siting and design of all new transportation infrastructure and significant retrofits and repairs</li>
                  <li>Plan for expansion of complete streets that accommodate biking, walking and public transit</li>
                  <li>Inventory bridges and culverts that should be upsized to accommodate future expected stream flows</li>

                <SearchLink params={{query: 'transportation planning'}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Management Practices",
                id: 'actions_management_practices',
                content: <ul>
                  <li>Elevate, modify, or relocate the most vulnerable infrastructure</li>
                  <li>Formulate risk-based methods to evaluate the service life of infrastructure assets in a changing climate, and increase the frequency of routine inspections</li>
                  <li>Build pipes, culverts, and outfalls with consideration of the potential magnitudes of future storms</li>
                  <li>Enhance water-based transit options as a long-range transport alternative and interim back-up </li>
                  <li>Encourage use of innovative technologies that keep infrastructure functioning during extreme weather, for example, new airport navigation aids and airfield lighting systems</li>

                <SearchLink params={{query: 'transportation management '}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Technology",
                id: "actions_tech",
                content: <ul>
                  <li>Expand use of green infrastructure such as rain gardens, swales, and porous pavement for stormwater control</li>
                  <li>Stock up on replacement parts for vehicles and equipment needed for emergency weather</li>
                  <SearchLink params={{query: 'transportation technology'}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Policies / Laws",
                id: "actions_policies_laws",
                content: <ul>
                  <li>Coordinate across municipal, state, regional agencies to address the vulnerability of regional infrastructure like rail networks</li>
                  <li>Consider adopting design standards that account for climate change, and provide trainings</li>
                  <SearchLink params={{query: 'transportation and policy law '}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Research / Monitoring",
                id: "actions_research",
                content: <ul>
                  <li>Research and conduct pilots using resilient materials (e.g. materials that can withstand high heat) for building roads and other infrastructure</li>
                  <li>Update hydrologic and hydraulic analyses, including engineering methods used in the calculation of peak flood flow rates</li>
                  <SearchLink params={{query: 'transportation research monitoring '}}>> Find more information</SearchLink>
                </ul>
              },
            ]},
          {title: "Looking for help?",
            id: 'looking_for_help',
            subsections: [],
            content: <ul>
                <li><Link to='https://www.dot.ny.gov/programs/climate-change' target="_blank">
                  New York State Department of Transportation
                  </Link></li>
                <li>
                  <Link to='https://www.transportation.gov/climate-change-clearinghouse'>
                    United States Department of Transportation Transportation and Climate Change Clearinghouse
                  </Link>
                </li>
              </ul>
          }
        ]}
        >
        <p>The Transportation sector consists of the built assets, operations, services, and institutions that serve public and private needs for moving goods and people. The Transportation sector and the Energy and Telecommunications sectors are highly interdependent.
        </p>
        <p>Potential climate change <strong>vulnerabilities</strong> include increased strain on road surface materials due to higher temperatures, traffic delays due to increased street flooding, and reduced bridge lifespans due to amplified stream flow and increased scour potential for bridge foundations.</p>
        <p>Transportation <strong>adaptation strategies</strong> include relocating critical systems to higher ground out of future flood zones, developing engineering-based solutions to protect against coastal and heavy precipitation hazards, and creating strategies to protect against heat hazards, including increasing the seat length of expansion joints on bridges, lengthening airport runways, and increasing and upgrading air conditioning on trains, subways, and buses.</p>
        </SectorDetailLayout>
    );
  }
}
export default TransportationSectorPage;
