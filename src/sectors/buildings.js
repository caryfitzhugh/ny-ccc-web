import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import SearchLink from '../utils/search_link';
import { Link } from 'react-router-dom';



class BuildingsSectorPage extends Component {
  render() {

    return (
      <SectorDetailLayout
        title="Buildings"
        children={<p>The Buildings sector encompasses residential, commercial, and government buildings.<br /><br />
Potential climate change vulnerabilities include structural damage from coastal flooding and intense storms, mold growth in buildings from receding floodwaters, and increased energy demand for cooling during extreme heat events.<br /><br />
Building adaptation strategies include improving building codes to promote storm-resistant structures, siting new developments outside of future floodplains, and investments in structural adaptations to reduce building cooling demands, including tree planting, green roofs, and high-reflectivity building materials</p>}
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
                  <SearchLink params={{facets: {climate_changes: ["ny::temperature"]}, query: "buildings"}}>> Find more information</SearchLink>
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
                  <SearchLink params={{facets: {oceans: ["ny::sea level rise"]}, query: "buildings"}}>> Find more information</SearchLink>
                </ul>
              }
            ]},
          {title: "Preparing for Climate Change",
            id: 'preparing',
            subsections: [
              { name:"Planning",
                id: "actions_planning",
                content: <ul>
                </ul>
              },
              { name: "Management Practices",
                id: 'actions_management_practices',
                content: <ul>
                </ul>
              },
              { name: "Outreach / Education",
                id: "actions_outreach",
                content: <ul>
                </ul>
              },
              { name: "Technology",
                id: "actions_tech",
                content: <ul>
                <li>
                  <ul>
                  </ul>
                </li>
                </ul>
              },
              { name: "Policies / Laws",
                id: "actions_policies_laws",
                content: <ul>
                </ul>
              },
              { name: "Research / Monitoring",
                id: "actions_research",
                content: <ul>
                </ul>
              },
              { name: "Funding",
                id: "actions_funding",
                content: <ul>
                </ul>
              }
            ]},
          {title: "Looking for help?",
            id: 'looking_for_help',
            subsections: [],
            content: <ul>
              <li><Link to="https://www.dec.ny.gov/energy/50845.html" target="_blank">New York Climate Smart Communities</Link></li>
              <li><Link to="https://www1.nyc.gov/site/planning/index.page" target="_blank">New York City Department of City Planning</Link></li>
           </ul>
          }
        ]}
        >
        </SectorDetailLayout>
    ); 
  }
}

export default BuildingsSectorPage;
