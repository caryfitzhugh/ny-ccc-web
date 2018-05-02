import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import coastal_zones_image from '../images/sectors/coastal_zones.jpg';
import SearchLink from "../utils/search_link";

class CoastalZonesSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: 'NY/coastal_zones/highlighted_resources'
    };

    return (
      <SectorDetailLayout
        title="Coastal Zones"
        image={coastal_zones_image}
        image_credit=""
        showcased_resources={showcased_resources}
        sections={[
          {title: "Impacts",
           id: 'impacts',
           subsections: [
            { name: "Temperature Changes",
              id: "impacts_temperature",
              content: <ul>
                <li>Commercially important fish and shellfish species may migrate north out of the state as waters warm, while other species may migrate in </li>
                <li>Ocean acidification is likely to affect the health and abundance of shellfish and other marine species </li>
                <li>Algal blooms may increase in frequency, and could create health risks for swimmers and wildlife </li>
                <SearchLink params={{facets: {climate_changes: ["ny::annual temperature", "ny::extreme cold events","ny::extreme heat events", "ny::seasonal temperature"], sectors: ["ny::coastal zones"]}}}>> Find more information</SearchLink>
              </ul>
            },
            {  name: "Precipitation Changes",
                id: 'impacts_changes_in_precipitation',
                content: <ul>
                  <li>Large volumes of stormwater may wash pollutants and pathogens into nearby coastal waterways, degrading water quality</li>
                  <li>Changing hydrological cycles may stress sensitive coastal habitats and species</li>
                  <SearchLink params={{facets: {climate_changes: ["ny::annual precipitation", "ny::heavy precipitation events","ny::seasonal precipitation"], sectors: ["ny::coastal zones"]}}}>> Find more information</SearchLink>
                 </ul>
            },
            {  name: "Extreme Weather",
                id: 'impacts_extreme_weather',
                content: <ul>
                  <li>More severe storms may threaten public safety and damage property</li>
                  <li>Infrastructure concentrated at the shore – such as power plants, power lines, sea walls, roads and bridges, and waste water plants – may sustain extensive damage from flooding</li>
                  <SearchLink params={{facets: {sectors: ["ny::coastal zones"]}, query: "coastal extreme weather"}}>> Find more information</SearchLink>
                 </ul>
            },
            {  name: "Sea Level Rise",
                id: 'impacts_slr',
                content: <ul>
                  <li>Increasing tidal range and more destructive storm surges may cause loss, shrinkage or migration of sensitive habitats that are home to many species, such as salt marshes and coastal forests </li>
                  <li>More coastal flooding may elevate risks for infrastructure on or near the shore  </li>
                  <li>Properties may lose beach and other land from erosion </li>
                  <li>Saltwater intrusion could harm agricultural fields and fresh water aquifers and wells </li>
                  <li>The Hudson River salt front will move upstream as sea level rises</li>
                  <SearchLink params={{facets: {oceans: ["ny::sea level rise"]}, query: "coastal"}}>> Find more information</SearchLink>
                  </ul>
            }
          ]},
          { title: "Preparing for Climate Change",
            id: "preparing",
            content: null,
            subsections: [
              { name: "Planning",
                id: "actions_planning",
                content: <ul>
                  <li>Assess the vulnerability of coastal towns and assets to climate impacts under different climate scenarios  </li>
                  <li>Build adaptation strategies into comprehensive, master and open space plans, and Hazard Mitigation Plans  </li>
                  <li>Develop or enhance early warning systems and community evacuation plans </li>
                  <li>Identify conservation priorities for salt marshes, wetlands, and forests that mitigate flooding, store carbon, and manage stormwater </li>
                  <SearchLink params={{query: "coastal planning"}}>> Find more information</SearchLink>
                </ul>
              },
              {name: "Management Practices",
               id: "actions_management_practices",
               content: <ul>
                  <li>Conserve coastal habitats and habitat corridors to help species remain resilient  </li>
                  <li>Use early detection and monitoring to prevent introduction of invasive species   </li>
                  <li>Elevate and/or move buildings and infrastructure in current or future coastal flood zones </li>
                  <li>Restore tidally driven rivers, estuarine, and marine habitats. </li>
                  <SearchLink params={{query: "coastal management"}}>> Find more information</SearchLink>
              </ul>
              },
              { name: "Technology",
                id: 'actions_technology',
                content: <ul>
                  <li>Encourage nature-based techniques to protect shorelines and stabilize banks such as beach nourishment and soft armoring  </li>
                  <li>Use green infrastructure such as floodable parks and open spaces to manage stormwater and increase storm protection   </li>
                  <li>Replace or remove ineffective tide gates to improve habitat connectivity </li>
                  <SearchLink params={{query: "coastal technology"}}>> Find more information</SearchLink>
                </ul>
              },
              {name: "Policies/Laws",
                id: 'actions_policies_and_laws',
                content: <ul>
                  <li>Incorporate climate change information into local policies and regulations, and keep updating them  </li>
                  <li>Create or amend local wetland bylaws to allow for beach migration   </li>
                  <li>Examine the concept of local setbacks requiring that new coastal development be a minimum distance from the shore </li>
                  <li>Examine the concept of rolling easements for coastal habitats </li>
                  <SearchLink params={{query: "coastal policies laws"}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Research/Monitoring",
                id: 'actions_research_monitoring',
                content: <ul>
                  <li>Conduct research and monitoring to improve understanding of strategies for preventing coastal erosion and marsh die-off  </li>
                  <li>Conduct sediment transport studies to inform shoreline management </li>
                  <li>Monitor the response of different types of wetlands to rising sea levels and/or proactive management techniques </li>
                  <li>Use remote sensing to monitor annual changes in land cover and land usef </li>
                  <SearchLink params={{query: "coastal research monitoring"}}>> Find more information</SearchLink>
                </ul>
              }
            ]},
            {title: "Looking for help?",
              subsections: [],
              id: 'looking_for_help',
              content: <ul>
                <li><a href="https://www.dec.ny.gov/energy/94702.html">New York State Department of Environmental Conservation</a></li>
                <li><a href="https://www.epa.gov/cre">U.S. Environmental Protection Agency’s Climate Ready Estuaries Program</a></li>
                <li><a href="https://coast.noaa.gov/">National Oceanic and Atmospheric Administration (NOAA) Office for Coastal Management</a></li>
              </ul>
            }
         ]}
         >
          <p>The Coastal Zones sector focuses on regions close to the ocean and Great Lakes.</p>
          <p>Potential climate change vulnerabilities for coastal zones include more frequent coastal flooding over larger areas during storms, increased shoreline erosion leading to alteration of the coastline, changes in the location of the salt front in the Hudson River estuary, loss of coastal wetlands, and changes in fish and shellfish populations.</p>
          <p>Examples of coastal zone adaptation strategies include incorporating climate change and sea level rise information into land-use planning, preparation of a detailed inventory of shoreline assets located in at-risk areas, acquiring of open coastal land for storm protection, recreation, and ecosystems, creation of a dynamic framework for updating policy guidelines given the “moving target” of climate change, and establishment of a network of stakeholders and volunteers to assist in monitoring for sea level rise response.</p>

         </SectorDetailLayout>
     );
   }
 }

 export default CoastalZonesSectorPage;
