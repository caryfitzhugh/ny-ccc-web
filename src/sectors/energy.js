import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import energy_image from '../images/sectors/energy.jpg';
import SearchLink from '../utils/search_link';
import {Footnote} from '../utils/footnotes';

import { Link } from 'react-router-dom';

const ActionLink = (props) => {
  return <li>
    <SearchLink params={{facets:{sectors: ["ny::energy"]}, query: props.q}}>
      {props.children}
    </SearchLink>
  </li>
}

class EnergySectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: "NY/energy/highlighted_resources"
    };

    return (
      <SectorDetailLayout
        title="Energy"
        image={energy_image}
        image_credit="FEMA/Jocelyn Augustino"
        footnotes={[

        ]}
        sections={ [
          {title: "Energy",
            id: 'energy',
            content: <p>The Energy sector encompasses energy supply, demand, transmission, distribution, fuel sources, and technologies (transport-related energy considerations are in the Transportation sector). Potential climate change vulnerabilities include reduced thermal efficiency of power generation in thermoelectric power plants, flooding damage to coastal power plants, and increased heat-related sagging of power lines, leading to more frequent power outages. Energy adaptation strategies include using transformers and wiring that function efficiently at higher temperatures, prioritizing demand-side management, which encourages consumers to use energy more efficiently, and installing saltwater-resistant transformers to protect against sea level rise and saltwater intrusion.</p>,
            subsections: [
              { name:"Temperatures Changes",
                id: "impacts_temperature_changes",
                content: <ul>
                  <li>The Energy sector encompasses energy supply, demand, transmission, distribution, fuel sources, and technologies (transport-related energy considerations are in the Transportation sector).
                  Potential climate change vulnerabilities include reduced thermal efficiency of power generation in thermoelectric power plants, flooding damage to coastal power plants, and increased heat-related sagging of power lines, leading to more frequent power outages.
                  Energy adaptation strategies include using transformers and wiring that function efficiently at higher temperatures, prioritizing demand-side management, which encourages consumers to use energy more efficiently, and installing saltwater-resistant transformers to protect against sea level rise and saltwater intrusion.</li>
                  <li>Extreme heat may trigger power outages that disrupt the economy and put the elderly and the ill at greater risk</li>
                  <SearchLink params={{facets: {climate_changes: ["ny::temperature"]}, query: "energy"}}>> Find more information</SearchLink>
                  </ul>  
              },
              { name: "Precipitation Changes",
                id: 'impacts_precipitation_changes',
                content: <ul>
                  <li>Wet snow may increase storm damage to power lines due to downed trees, and flooding from heavy precipitation may impact facilities and equipment</li>
                  <li>Drought may limit availability of water for hydropower production and power plant cooling</li>
                  <SearchLink params={{facets: {climate_changes: ["ny::precipitation"]}, query: "energy"}}>> Find more information</SearchLink>
                  </ul>
              },
              { name: "Extreme Weather",
                id: "impacts_extreme_weather",
                content: <ul>
                <li>More frequent extreme weather is likely to increase risks of storm damage to power plants, gas terminals, storage facilities, and above-ground wires and pipes</li>
                <li>Damage to infrastructure may produce more frequent service interruptions, increase equipment maintenance and replacement costs, and power outages in critical facilities</li>
                <li>Severe storms in other parts of the country may disrupt energy supplies and transport</li>
                <SearchLink params={{facets: {sector: ["ny::energy"]}, query: "energy extreme weather"}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Sea Level Rise",
                id: "impacts_rising_sea_level",
                content: <ul>
                  <li>Rising seas may increase the frequency of flood damage at key energy facilities and service interruptions affecting telecommunications, waste treatment and other key systems</li>
                  <li>Saltwater intrusion may cause corrosion of equipment and instruments at power stations</li>
                  <li>As sea level rise progresses, energy facilities and power lines may require costly relocations</li>
                  <SearchLink params={{facets: {climate_changes: ["ny::oceans sea level rise"]}, query: "energy"}}>> Find more information</SearchLink>
                </ul>
              }
            ]},
          {title: "Preparing for Climate Change",
            id: 'preparing_for_climate_change',
     
            subsections: [
              { name:"Planning",
                id: "actions_planning",
                content: <ul>
                <li>Plan for peak demand growth associated with changing temperature levels</li>
                <li>Collaborate across utilities, state, and local government to prepare for a coordinated response to large-scale power outages</li>
                <li>Plan for continued integration of clean, distributed energy resources</li>
                <li>Support grid modernization to increase ability to control and sectionalize service and bounce back quickly from power outages</li>
                <li>Explore micro-grids at critical facilities like schools and hospitals to provide resilient energy for sheltering people during disasters</li>
                <li>Prepare for disruptions to energy supplies from other U.S. regions such as the Gulf Coast</li>
                <SearchLink params={{query: 'energy planning'}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Management Practices",
                id: 'actions_management_practices',
                content: <ul>
                <li>Promote energy conservation and efficiency in municipal facilities, businesses, and homes to reduce peak demand and support grid reliability</li>
                <SearchLink params={{query: 'energy management '}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Outreach / Education",
                id: "actions_outreach",
                content: <ul>
                <li>Educate energy asset owners and consumers about vulnerabilities, incentives for investing in clean and distributed resources, and renewable energy options</li>
                <SearchLink params={{query: 'energy outreach OR education '}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Technology",
                id: "actions_tech",
                content: <ul>
                <li>Diversify energy technologies and sources</li>
                <li>Implement grid modernization</li>
                <li>Pilot energy storage projects</li>
                <li>Utilize and accelerate deployment of new energy efficiency technologies</li>
                <SearchLink params={{query: 'energy technology'}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Policies / Laws",
                id: "actions_policies_laws",
                content: <ul>
                <li>Consider policies and incentives for encouraging energy conservation and efficiency and growth in distributed energy resources</li>
                <SearchLink params={{query: 'energy and policy OR law '}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Research / Monitoring",
                id: "actions_research",
                content: <ul>
                <li>Monitor correlations of energy demand with emerging weather trends</li>
                <li>Encourage research and development of renewable energy and energy storage systems</li>
                <SearchLink params={{query: 'energy research OR monitoring '}}>> Find more information</SearchLink>        
                </ul>
              },
            ]},
          {title: "Looking for help?",
            id: 'looking_for_help',
            subsections: [],
            content: <ul>
              <li><Link to="//www.nyserda.ny.gov" target="_blank">NYSERDA</Link></li>
              <li><Link to="https://www.dec.ny.gov/60.html" target="_blank">New York State Department of Environmental Conservation</Link></li>
              </ul>
          }
        ]}
        >

        </SectorDetailLayout>
    );
  }
}

export default EnergySectorPage;
