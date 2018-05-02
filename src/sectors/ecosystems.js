import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import { Link } from 'react-router-dom';
import sector_image from '../images/sectors/ecosystems.jpg';
import SearchLink from '../utils/search_link';

class EcosystemsSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Key Resources",
      collection_name: "NY/ecosystems/highlighted_resources",
    };

    return (
      <SectorDetailLayout
        title="Ecosystems"
        image={sector_image}
        image_caption={"Invasive purple loosestrife at the Montezuma National Wildlife Refuge, Seneca Falls, NY."}
        image_credit="Todd Harless"
        showcased_resources={showcased_resources}
        sections={[
          {title: "Impacts",
           id: "impacts",
           content: <p></p>,
           subsections: [
            {name: 'Temperature Changes',
             id:"impacts_rising_temps",
             content: <ul>
                <li>Habitat quality for native plants and animals may be reduced by warming temperatures and seasonal changes, and invasive species may move in </li>
                <li>The timing of migration, reproduction, and flowering may change, disrupting the symbiotic connection between animals and their food sources and between plants and pollinators</li>
                <li>Cold water fish and shellfish may decline dramatically, and warmer fish species may become more abundant</li>
                <li>Algal blooms may become larger and more frequent</li>
                <li>Hardwoods may recede to higher elevations </li>
                <li>The composition and role of forest species including plants and animals, fungi, and bacteria will change as forests change</li>
                <li>Forest pests such as the hemlock woolly adelgid and southern pine beetle could cause widespread tree mortality and ecosystem impacts  as their range extends northward </li>
                <SearchLink params={{facets: {climate_changes: ["ny::annual temperature", "ny::extreme cold events", "ny::extreme heat events", "ny::seasonal temperature", "ny::ecosystems"]}}}>> Find more information</SearchLink>
             </ul>
            },
            {name: 'Precipitation Changes',
             id:"impacts_precipitation_changes",
             content: <ul>
                <li>Shifts in rainfall and snowfall may stress habitats and wildlife populations </li>
                <li>More frequent flood flows in rivers may degrade aquatic and riparian habitats </li>
                <li>Flooding of riparian areas and wetlands could export soils and nutrients downstream to lakes and bays, triggering algal blooms</li>
                <li>Changes in the water cycle could alter habitats of native species and increase the negative impacts from invasive species</li>
                <li>More frequent droughts could exacerbate wildfire risks, especially when coupled with increases in overall biomass growth due to warmer temperatures </li>
                <SearchLink params={{facets: {climate_changes: ["ny::annual precipitation", "ny::heavy precipitation events", "ny::seasonal precipitation", "ny::ecosystems"]}}}>> Find more information</SearchLink>

             </ul>
            },
            {name: 'Extreme Weather',
             id:"impacts_extreme_weather",
             content: <ul>
                <li>Severe storms could cause ecosystem-scale disturbances (like tree blow downs) that allow invasive species to gain entry </li>
                <li>High volumes of storm water runoff may cause serious degradation of water and habitat quality</li>
                <li>Forest-disturbance events like ice storms, localized or regional wind events like microbursts or hurricanes, and severe thunderstorms may increase in frequency and severity </li>
                <li>Increased wind and ice damage could seriously harm forest health, especially where trees lack age or structural diversity </li>
                <li>Gaps in forest cover—caused by storm damage or fragmentation—may open up space for invasive species </li>
                <SearchLink params={{facets: {sectors: ["ny::ecosystems"]}, query: "ecosystems extreme weather"}}>> Find more information</SearchLink>
             </ul>
            },
            {name: 'Sea Level Rise ',
             id:"impacts_sea_level_rise",
             content: <ul>
                <li>Salt water inundation may alter the health and size of salt marshes and wetlands or cause them to die off, while some may migrate inland </li>
                <li>Erosion may increase in many habitats including dunes and estuarine inlets </li>
                <li>Barrier beaches may undergo physical changes in shape, as well as changes in species composition and diversity  </li>
                <SearchLink params={{facets: {climate_changes: ["ny::sea level rise"]}}}>> Find more information</SearchLink>
             </ul>
            }
            ]
          },
          {title: "Preparing for Climate Change",
           id: "preparing",
           content: <p>
           </p>,
           subsections: [
            {name: 'Planning',
             id:"impacts_planning",
             content: <ul>
                <li>Consider climate change in wildlife management, forest management, and open space plans </li>
                <li>Develop strategic priorities for protecting and conserving wetlands, floodplains, salt marshes and other natural areas that buffer flooding and support healthy wildlife populations </li>
                <li>Identify opportunities to conserve habitat corridors (both aquatic and terrestrial) that support connectivity and migration </li>
                <li>Incorporate information on forest climate impacts and resilient forest management strategies in town, open space, and hazard mitigation plans </li>
                <SearchLink params={{query: "ecosystems plan"}}>> Find more information</SearchLink>
             </ul>
            },
            {name: 'Management Practices',
             id: 'impacts_management',
             content: <ul>
                <li>Create wildlife passage structures during projects to build or replace road-stream crossings </li>
                <li>Restore natural areas to enhance ecosystem services and avoid expensive investments in flood control infrastructure </li>
                <li>Restore natural buffers by planting native vegetation </li>
                <li>Consider removal of obsolete dams or tide gates </li>
                <li>Implement strategies for early detection, rapid response, and prevention of invasive plants and animals </li>
                <li>Increase forest diversity (species, structure, age classes and habitats) and vigor via professional forest management </li>
                <li>Encourage active forest management for renewable wood products and wildlife benefits and promote local wood products to keep working forest landscapes economically viable  </li>
                <li>Expand invasive species management with programs to reach private and public landowners </li>
                <li>Plant a diversity of urban trees in downtown areas vulnerable to urban heat waves and the heat island effect </li>
                <li>Permanently conserve the most intact, productive and resilient forest ecosystems </li>
                <SearchLink params={{query: "ecosystems management"}}>> Find more information</SearchLink>
             </ul>
            },
            {name: 'Technology',
             id: 'impacts_technology',
             content: <ul>
                <li>Diversify urban forests via planting to increase carbon capture and resilience </li>
                <li>Identify and promote use of drought-and-heat-adapted trees </li>
                <li>Encourage use of bioengineering like coir rolls for bank stabilization and erosion control </li>
                <SearchLink params={{query: "ecosystems technology"}}>> Find more information</SearchLink>
             </ul>
            },
            {name: 'Policies/Laws',
             id: 'impacts_policies_laws',
             content: <ul>
                <li>Consider local land use policies and incentives that avoid development in floodplain areas, and encourage development of floodable parks </li>
                <li>Protect communities of plants and animals especially at risk from climate change </li>
                <li>Enhance buffer zone protection around important habitats </li>
                <li>Create or amend local wetland bylaws to allow for beach migration and shoreline transitional areas </li>
                <li>Consider policies that maintain healthy forests, including local zoning regulations </li>
                <li>Consider policies to ensure sustainable management of renewable wood products on appropriate sites </li>
                <li>Promote the buying of local forest products  </li>
                <SearchLink params={{query: "ecosystems policies laws"}}>> Find more information</SearchLink>
             </ul>
            },
            {name: 'Research/Monitoring',
             id: 'impacts_research_monitoring',
             content: <ul>
                <li>Establish long-term research and monitoring sites to assess how habitat types and species respond to climate change </li>
                <li>Survey wetlands and other aquatic resources across the state to identify vulnerable reaches </li>
                <li>Monitor how low flows and higher temperatures affect nutrient, sediment, and pathogen pollution </li>
                <li>Identify opportunities to reconnect cold water fish habitats by removing in-stream barriers and re-establishing instream flows  </li>
                <li>Expand adaptive research of forest management practices and their effectiveness in a changing climate </li>
                <li>Support long-term ecological monitoring programs such as the DCR‘s Continuous Forest Inventory </li>
                <SearchLink params={{query: "ecosystems research monitoring"}}>> Find more information</SearchLink>
             </ul>
            }
           ]
          },
          {title: "Looking for help?",
           id: 'looking_for_help',
           subsections: [],
           content: <ul>
             <li><a href="https://www.dec.ny.gov/">New York State Department of Environmental Conservation</a></li>
             <li><a href="http://www.acris.nynhp.org/">New York Natural Heritage Program</a></li>
             <li><Link target="_blank" to="https://www.nature.org/ourinitiatives/urgentissues/global-warming-climate-change/index.htm?intc=nature.tnav.ourwork">The Nature Conservancy</Link></li>
             <li><a href="https://www.fs.usda.gov/ccrc/">USDA Forest Service Climate Change Resource Center</a></li>
            </ul>
          }
        ]}
        >
        <p>The Ecosystems sector encompasses the plants, fish, wildlife, and resources of all natural and managed landscapes (e.g., forests, grasslands, aquatic systems) in New York State except those land areas designated as agricultural, coastal, or urban. This sector includes timber and maple syrup industries and tourism and recreation businesses conducted within natural and managed ecosystems. It also encompasses interior wetlands, waterways, and lakes as well as their associated freshwater fisheries and recreational fishing.</p>
        <p>Potential climate change vulnerabilities for ecosystems include the loss spruce and fir forests in the Adirondacks and major shifts in tree species composition across the state, the loss of hemlock stands as a result of the wooly adelgid insect pest expanding its range northward, the effects on cold-water fish with repercussions for sport fishing, and the impacts on ski and snowmobile businesses.  Climate change may benefit species that are currently constrained by cold temperatures, such as white-tailed deer and bass.</p>

        </SectorDetailLayout>
    );
  }
}

export default EcosystemsSectorPage;
