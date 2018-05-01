import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import SearchLink from '../utils/search_link';
import sector_image from '../images/sectors/water_resources.jpg';
import { Link } from 'react-router-dom';

class WaterResourcesSectorPage extends Component {
 render() {
    let showcased_resources = {
      title: "Highlighted Resources",
      collection_name: "NY/water_resources/highlighted_resources",
    };


    return (
      <SectorDetailLayout
        title="Water Resources"
        image={sector_image}
        image_credit={"Lourdes Hospital, D. Lupardo"}
        showcased_resources={showcased_resources}
        sections={ [
          {title: "Impacts",
            id: 'impacts',
            subsections: [
              { name:"Temperature Changes",
                id: "impacts_temps",
                content: <ul>
                  <li>Spikes in air conditioning demand may trigger power outages that disrupt water and wastewater treatment</li>
                  <li>Warmer temperatures and more winter rain may cause stream flows to peak and decline earlier with many impacts on wildlife </li>
                  <li>Lower summer flows may affect aquatic life, habitat health, and drinking water supplies</li>
                  <SearchLink params={{facets: {climate_changes: ["ny::temperature"]}, query: "water resources"}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Precipitation Changes",
                id: 'impacts_extreme_weather',
                content: <ul>
                  <li>Water supplies for drinking, agriculture, and water-dependent industries may be depleted by smaller winter snow packs and drier summers </li>
                  <li>Storm water from larger storms may overwhelm culverts sized to accommodate smaller events</li>
                  <li>More frequent summer droughts may strain municipal drinking water supplies</li>
                  <li>Water quality may decline as wetter storms wash nutrients and pollutants into surface waters</li>
                  <SearchLink params={{facets: {climate_changes: ["ny::precipitation"]}, query: "water resources"}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Extreme Weather",
                id: "impacts_extreme_weather",
                content: <ul>
                  <li>Flood risks may increase for the many gravity-fed water and wastewater systems located in low lying areas near rivers, reservoirs, and the shore</li>
                  <li>• Combined sewer overflows may increase, degrading water quality and creating public health risks</li>
                  <SearchLink params={{facets: {climate_changes: ["ny::oceans sea level rise"]}, query: "water resources"}}>> Find more information</SearchLink>
                </ul>
              }
            ]},
          {title: "Preparing for Climate Change ",
            id: 'preparing',
            subsections: [
              { name:"Planning",
                id: "preparing_planning",
                content: <ul>
                  <li>Collect and analyze basic geographic, geologic, and engineering information to characterize vulnerabilities for water resources and infrastructure</li>
                  <li>Forecast future scenarios for water demand and identify areas vulnerable to water shortages</li>
                  <li>Identify potential emergency water system connections</li>
                  <li>Plan for relocating and flood-proofing water infrastructure in flood hazard areas</li>
                  <SearchLink params={{query: "water resources planning"}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Management Practices",
                id: 'preparing_management_practices',
                content: <ul>
                  <li>Acquire emergency equipment such as a mobile pumps, water tanks and filters, and back-up generators</li>
                  <li>Build or retrofit storm water infrastructure to accommodate runoff from projected precipitation </li>
                  <li>Make water supplies more resilient by promoting water conservation and infiltration of storm water for groundwater recharge</li>
                  <SearchLink params={{query: 'water resources management'}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Technology",
                id: "actions_outreach",
                content: <ul>
                  <li>Test and evaluate new green storm water infrastructure technologies that can absorb and clean stormwater</li>
                  <li>Install energy efficient equipment in water and waste water treatment facilities</li>
                  <SearchLink params={{query: 'water resources technology'}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Policies / Laws",
                id: "actions_policies_laws",
                content: <ul>
                  <li>Examine policies and incentives to encourage more energy efficient water infrastructure powered with renewable energy</li>
                  <li>Consider local policies that can improve management of agricultural and urban runoff</li>
                  <li>Adopt local ordinances to protect floodplains that reduce flood risks for infrastructure</li>
                  <li>Evaluate long-term control plans for combined sewer overflows under future scenarios for extreme storms</li>
                  <li>Promote use of treated wastewater in commercial and industrial settings</li>
                  <SearchLink params={{query: 'water resources policy law'}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Research / Monitoring",
                id: "actions_research",
                content: <ul>
                  <li>Compile critical information on water and wastewater treatment facilities, including location and elevation of key structures as well as their proximity to floodplains and water bodies</li>
                  <li>Research how low flows and higher temperatures will affect nutrient, sediment, and pathogen pollution</li>
                  <li>Implement an automatic gauging and reporting network to better assess hydrological conditions and provide improved early-warning systems for supply shortages</li>
                  <li>Identify water and sewer facilities susceptible to saltwater intrusion and coastal inundation</li>
                  <SearchLink params={{query: 'water resources research monitoring'}}>> Find more information</SearchLink>
                </ul>
              }
            ]},
          {title: "Looking for help?",
            id: 'looking_for_help',
            subsections: [],
            content: <ul>
              <li><Link to="https://wri.cals.cornell.edu/hudson-river-estuary/climate-change-hudson-river-estuary" target="_blank">New York State Water Resources Institute</Link></li>
              <li><Link to="http://drought.unl.edu/" target="_blank">National Drought Mitigation Center</Link></li>
              <li><Link to="http://neiwpcc.org/" target="_blank">New England Interstate Water Pollution Control Commission (NEIWPCC)</Link></li>
           </ul>
          }
        ]}
        >
          <p>The Water Resources sector encompasses four major themes: flooding in non-coastal regions, drinking water supply, water availability for non-potable uses (primarily agriculture and hydropower), and water quality.
          </p>
          <p>
            Potential climate change vulnerabilities for water resources and related infrastructure include flooding, an increase in duration and/or frequency of dry periods affecting drinking water supplies, changes in demand for commercial and agricultural water, and declines in water quality due to higher water temperatures and decreased stream flows in summer.  Climate change may bring New York State opportunities as a potentially water-rich area under future climate conditions.
          </p>
          <p>
            Water resource adaptation strategies include phased withdrawal of infrastructure from high-risk, floodprone areas, implementation of an automatic gauging and reporting network to provide improved early-warning systems for supply shortages, mechanisms for better coordination of water use in shared water bodies, and establishment of minimum flow requirements for water withdrawals.
          </p>
        </SectorDetailLayout>
    );
  }
}

export default WaterResourcesSectorPage;
