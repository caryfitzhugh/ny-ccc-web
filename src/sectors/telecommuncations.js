import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import energy_image from '../images/sectors/energy.jpg';
import SearchLink from '../utils/search_link';
import {Footnote} from '../utils/footnotes';

const ActionLink = (props) => {
  return <li>
    <SearchLink params={{facets:{sectors: ["ma::energy"]}, query: props.q}}>
      {props.children}
    </SearchLink>
  </li>
}

class TelecommunicationSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: "NY/energy/highlighted_resources"
    };

    return (
      <SectorDetailLayout
        title="Telecommunications "
        image={energy_image}
        image_credit="FEMA/Jocelyn Augustino"
        showcased_resources={showcased_resources}
        footnotes={[

        ]}
        sections={ [
          {title: "Telecommunications ",
            id: 'telecommunications ',
            content: <p>The Telecommunications sector involves infrastructure systems and the technological sophistication, availability, accessibility, interconnectivity, broadband capacity, redundancy, security, and reliability of services for users in the private and public sectors.
Potential climate change vulnerabilities include reduced service due to extreme-heat-related power outages, increased emergency communications and reduction in cable-provided services due to storm-damaged utility lines, and flooding of central offices during extreme storms, resulting in reduced or disrupted service.
Telecommunications adaptation strategies include placing communication cables underground where technically and economically feasible, relocating central offices that house communications infrastructure out of future floodplains, and minimizing the effects of power outages on communications services by providing backup power at cell towers, such as with generators, solar-powered battery banks, and “cells on wheels” that can replace disabled towers.
</p>
            subsections: [
              { name:"Temperatures Changes",
                id: "impacts_temperature_changes",
                content: <ul>
                            <li>The Energy sector encompasses energy supply, demand, transmission, distribution, fuel sources, and technologies (transport-related energy considerations are in the Transportation sector).
          Potential climate change vulnerabilities include reduced thermal efficiency of power generation in thermoelectric power plants, flooding damage to coastal power plants, and increased heat-related sagging of power lines, leading to more frequent power outages.
          Energy adaptation strategies include using transformers and wiring that function efficiently at higher temperatures, prioritizing demand-side management, which encourages consumers to use energy more efficiently, and installing saltwater-resistant transformers to protect against sea level rise and saltwater intrusion.
          </li>
          <li>
          Extreme heat may trigger power outages that disrupt the economy and put the elderly and the ill at greater risk
          <p> Find more information </p> </li>
                </ul>
             
              },
              { name: "Precipitation Changes",
                id: 'impacts_precipitation_changes',
                content: <ul>
                <li>Wet snow may increase storm damage to power lines due to downed trees, and flooding from heavy precipitation may impact facilities and equipment</li>
                <li>Drought may limit availability of water for hydropower production and power plant cooling<p>Find more information</p></li>

                </ul>
              },
              { name: "Extreme Weather",
                id: "impacts_extreme_weather",
                content: <ul>
                <li>More frequent extreme weather is likely to increase risks of storm damage to power plants, gas terminals, storage facilities, and above-ground wires and pipes</li>
                <li>Damage to infrastructure may produce more frequent service interruptions, increase equipment maintenance and replacement costs, and power outages in critical facilities</li>
                <li>Severe storms in other parts of the country may disrupt energy supplies and transport <p>> Find more information</p> </li>
                </ul>
              },
              { name: "Sea Level Rise",
                id: "impacts_rising_sea_level",
                content: <ul>
                  <li>Rising seas may increase the frequency of flood damage at key energy facilities and service interruptions affecting telecommunications, waste treatment and other key systems</li>
                  <li>Saltwater intrusion may cause corrosion of equipment and instruments at power stations</li>
                  <li>As sea level rise progresses, energy facilities and power lines may require costly relocations<p>> Find more information</p></li>
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
                <li>Prepare for disruptions to energy supplies from other U.S. regions such as the Gulf Coast <p>> Find more information</p></li>
                </ul>
              },
              { name: "Management Practices",
                id: 'actions_management_practices',
                content: <ul>
                <li>Promote energy conservation and efficiency in municipal facilities, businesses, and homes to reduce peak demand and support grid reliability <p>>Find more information</p></li>
                </ul>
              },
              { name: "Outreach / Education",
                id: "actions_outreach",
                content: <ul>
                <li>Educate energy asset owners and consumers about vulnerabilities, incentives for investing in clean and distributed resources, and renewable energy options <p>>Find more information</p></li>
                </ul>
              },
              { name: "Technology",
                id: "actions_tech",
                content: <ul>
                <li>Diversify energy technologies and sources</li>
                <li>Implement grid modernization</li>
                <li>Pilot energy storage projects</li>
                <li>Utilize and accelerate deployment of new energy efficiency technologies <p>>Find more information</p></li>
                </ul>
              },
              { name: "Policies / Laws",
                id: "actions_policies_laws",
                content: <ul>
                <li>Consider policies and incentives for encouraging energy conservation and efficiency and growth in distributed energy resources <p>>Find more information</p></li>
                </ul>
              },
              { name: "Research / Monitoring",
                id: "actions_research",
                content: <ul>
                <li>Monitor correlations of energy demand with emerging weather trends</li>
                <li>• Encourage research and development of renewable energy and energy storage systems <p>> Find more information</p></li>
                </ul>
              },
            ]},
          {title: "Looking for help?",
            id: 'looking_for_help',
            subsections: [],
            content: <ul>
              <li>NYSERDA - <a href='//www.nyserda.ny.gov'>www.nyserda.ny.gov</a></li>
              <li>New York State Department of Environmental Conservation - <a href='https://www.dec.ny.gov/60.html'>https://www.dec.ny.gov/60.html</a></li>
            </ul>
          }
        ]}
        >

        </SectorDetailLayout>
    );
  }
}

export default TelecommunicationSectorPage;
