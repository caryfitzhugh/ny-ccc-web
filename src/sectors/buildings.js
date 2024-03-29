import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import SearchLink from '../utils/search_link';
import Collection from '../layouts/collection';
import buildings_image from "../images/sectors/buildings.jpg";
import { Link } from 'react-router-dom';



class BuildingsSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Key Resources",
      collection_name: "NY/buildings/highlighted_resources",
    };

    return (
      <SectorDetailLayout
        title="Buildings"
        showcased_resources={showcased_resources}
        image={buildings_image}
        image_caption={"Skyscraper One 57 in Manhattan, with a partially collapsed construction crane following Hurricane Sandy."}
        image_credit={"Siddam"}
        sections={ [
          {title: "Impacts",
            id: 'impacts',
            subsections: [
              { name:"Temperature Changes",
                id: "impacts_temps",
                content: <ul>
                  <li>Thermal stresses on building materials could increase, leading to more wear and tear and reducing useful lifespan</li>
                  <li>Building systems may be disrupted by power outages during heat waves</li>
                  <li>Building stock may increasingly require air conditioning to maintain comfortable temperatures in summer months, contributing to increasing energy use and emissions</li>
                  <SearchLink params={{facets: {climate_changes: ["ny::annual temperature", "ny::extreme cold events","ny::extreme heat events", "ny::heat index", "ny::seasonal temperature"], sectors: ["ny::buildings"]}, query: "buildings"}}>> Find more information</SearchLink>
                </ul>
              },
              { name:"Precipitation Changes",
                id: "impacts_precipitation_changes",
                content: <ul>
                  <li>Increased river flooding is likely to cause soil erosion, soil loss, and crop damage</li>
                  <li>Wetter springs may delay planting for crops and reduce yields</li>
                  <li>Drier summers and intermittent droughts may strain irrigation water supplies, stress crops, and delay harvests</li>
                  <SearchLink params={{facets: {climate_changes: ["ny::annual precipitation", "ny::coastal flooding","ny::heavy precipitation events", "ny::inland flooding", "ny::seasonal precipitation", "ny::snowfall"], sectors: ["ny::buildings"]}, query: "buildings"}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Extreme Weather",
                id: 'impacts_extreme_weather',
                content: <ul>
                  <li>Many residential and commercial buildings built along rivers and coastal areas may be vulnerable to severe damage during extreme storms  </li>
                  <li>Inland and coastal dams, levees, and sea walls in poor condition may breach, putting people and property in harm’s way and necessitating costly rebuilding</li>
                  <li>Building stock may increasingly require air conditioning to maintain comfortable temperatures in summer months, contributing to increasing energy use and emissions</li>
                  <SearchLink params={{facets: {sectors: ["ny::buildings"]}, query: "extreme weather buildings"}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Sea Level Rise",
                id: "impacts_sea_level_rise",
                content: <ul>
                  <li>Rising seas will make coastal storm surges more damaging to property  </li>
                  <li>Some buildings will be permanently inundated as sea level progresses if they are not elevated or relocated</li>
                  <SearchLink params={{facets: {climate_changes: ["ny::sea level rise"]}, query: "buildings"}}>> Find more information</SearchLink>
                </ul>
              }
            ]},
          {title: "Preparing for Climate Change",
            id: 'preparing',
            subsections: [
              { name:"Planning",
                id: "preparing_planning",
                content: <ul>
                  <li>Consider climate change projections when siting new buildings and facilities  </li>
                  <li>Assess when to flood-proof vulnerable buildings, and when to relocate those structures  </li>
                  <li>Plan micro-grids at critical facilities like schools and hospitals to provide energy for sheltering people during disasters  </li>
                  <li>Strengthen and raise sea walls, and evaluate opportunities to use soft shoreline and bank armoring as an alternative to hard infrastructure where possible  </li>
                  <SearchLink params={{facets: {sectors: ["ny::buildings"]}, query: "buildings planning design"}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Management Practices",
                id: 'preparing_management_practices',
                content: <ul>
                  <li>Formulate risk-based methods to evaluate the service life of flood control assets like sea walls and levees under changing climate conditions  </li>
                  <li>Consider increasing the frequency of inspections for flood control structures  </li>
                  <li>Install energy efficiency measures and use renewable energy  </li>
                  <li>Consider purchasing appropriately-sized generators and pumps to handle flooding  </li>
                  <li>Educate property owners and businesses about how to safely store chemicals and avoid spills during floods through safe storage  </li>
                  <SearchLink params={{facets: {sectors: ["ny::buildings"]}, query: 'buildings management'}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Technology",
                id: "actions_outreach",
                content: <ul>
                  <li>Locate critical building systems and any toxics storage on higher stories or rooftops  </li>
                  <li>Use Smart-Grid meters in buildings to manage demand spikes and prevent outages  </li>
                  <SearchLink params={{facets: {sectors: ["ny::buildings"]}, query: 'buildings technology'}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Policies / Laws",
                id: "actions_policies_laws",
                content: <ul>
                  <li>Examine policies and regulations such as the <a href="https://www.dec.ny.gov/energy/102559.html">Community Risk and Resilience Act</a> to encourage climate-considered siting and design for buildings and infrastructure. </li>
                  <li>Adjust local zoning regulations to incorporate flood protection for buildings  </li>
                  <SearchLink params={{facets: {sectors: ["ny::buildings"]}, query: 'buildings policy law'}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Research / Monitoring",
                id: "actions_research",
                content: <ul>
                  <li>Test and evaluate the effectiveness of green infrastructure like green roofs for cooling buildings and reducing runoff, and permeable pavement for infiltrating stormwater </li>
                  <SearchLink params={{facets: {sectors: ["ny::buildings"]}, query: 'buildings research monitoring'}}>> Find more information</SearchLink>
                </ul>
              }
            ]},
          {title: "Looking for Help?",
           id: "looking_for_help",
           content: <Collection collection_name="NY/buildings/looking-for-help" />,
           subsections: []
          }
        ]}>
        <p>
          The Buildings sector encompasses residential, commercial, and government buildings.
        </p>
        <p>
          Potential climate change vulnerabilities include structural damage from coastal flooding and intense storms, mold growth in buildings from receding floodwaters, and increased energy demand for cooling during extreme heat events.
        </p>
        <p>
          Building adaptation strategies include improving building codes to promote storm-resistant structures, siting new developments outside of future floodplains, and investments in structural adaptations to reduce building cooling demands, including tree planting, green roofs, and high-reflectivity building materials
        </p>
        </SectorDetailLayout>
    );
  }
}

export default BuildingsSectorPage;
