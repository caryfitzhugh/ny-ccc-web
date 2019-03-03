import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import Collection from '../layouts/collection';
import SearchLink from '../utils/search_link';
import agriculture_image from '../images/sectors/agriculture.jpg';

class AgricultureSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Key Resources",
      collection_name: "NY/agriculture/highlighted_resources",
    };

    return (
      <SectorDetailLayout
        image={agriculture_image}
        image_caption={'Flooded fields following Hurricane Irene, Montgomery, NY'}
        image_credit={'Daniel Case'}
        title="Agriculture"
        showcased_resources={showcased_resources}
        sections={[
          {title: "Impacts",
           id: "impacts",
            subsections: [
              { name: "Temperature Changes",
                id: 'impacts_temp_changes',
                content: <ul>
                  <li>Apple trees may not receive the number of winter chilling hours required to produce fruit</li>
                  <li>Maple sap flow may shift to earlier in the year, even back to December</li>
                  <li>Increasing heat stress days (above 90°F) may stress livestock and some crops</li>
                  <li>More pest pressure from insects, diseases, and weeds may harm crops and cause farms to increase pesticide use</li>
                  <li>New crops could become more viable but crop transitions may be costly</li>
                  <SearchLink params={{facets: {climate_changes: ["ny::annual temperature", "ny::drought", "ny::evaporation", "ny::extreme cold events","ny::extreme heat events", "ny::seasonal temperature", "ny::soil moisture"], sectors: ["ny::agriculture"]}, query: ["agriculture farming"]}}>> Find more information</SearchLink>
                </ul>,
              },
              { name: "Precipitation Changes",
                id: 'impacts_precipitation_changes',
                content: <ul>
                  <li>Increased river flooding is likely to cause soil erosion, soil loss, and crop damage</li>
                  <li>Wetter springs may delay planting for crops and reduce yields</li>
                  <li>Drier summers and intermittent droughts may strain irrigation water supplies, stress crops, and delay harvests</li>
                  <SearchLink params={{facets: {climate_changes: ["ny::annual precipitation", "ny::drought", "ny::heavy precipitation events", "ny::inland flooding", "ny::snowfall", "ny::soil moisture", "ny::snowpack"], sectors: ["ny::agriculture"]}, query: ["agriculture farming"]}}>> Find more information</SearchLink>
                </ul>,
              },
              { name: "Extreme Weather",
                id: 'impacts_extreme_weather',
                content: <ul>
                  <li>Extreme storms may cause catastrophic damage to crops and fields, farm buildings, equipment and drainage systems</li>
                  <li>Floodwaters may spread invasive plants</li>
                  <li>Heavy rainfall is likely to wash away fertile soils and damage water resources</li>
                  <SearchLink params={{facets: {climate_changes: ["ny::drought", "ny::heavy precipitation events", "ny::extreme cold events", "ny::extreme heat events", "ny::hail storms", "ny::inland flooding", "ny::hurricanes", "ny::ice storms", "ny::intense winter storms", "ny::snow storms"], sectors: ["ny::agriculture"]}, query: ["agriculture farming"]}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Sea Level Rise",
                id: 'impacts_sea_level_rise',
                content: <ul>
                  <li>Increasing tidal range and tidal inundation is likely to cause more saltwater intrusion into aquifers in agricultural areas</li>
                  <li>Rising sea levels and extreme storms may accelerate erosion of coastal agricultural land</li>
                  <SearchLink params={{facets: {climate_changes: ["ny::sea level rise"], sectors: ["ny::agriculture"]}, query: ["agriculture farming"]}}>> Find more information</SearchLink>
                </ul>
              }
            ]
          },
          {title: "What can the Agriculture sector do to prepare for climate change?",
           id: "actions",
           content: null,
           subsections: [
              { name: "Planning",
                id: 'actions_planning',
                content: <ul>
                  <li>Develop a plan for on-farm emergencies</li>
                  <li>Complete a farm energy audit</li>
                  <SearchLink params={{facets: {sectors: ["ny::agriculture"]}, query: ["agriculture"]}}>> Find more information</SearchLink>
                </ul>,
              },
              { name: "Management Practices",
                id: 'actions_management_practices',
                content: <ul>
                  <li>Consider crop variety diversification to increase resilience</li>
                  <li>Shift planting or harvesting dates based on forecasted changes in seasons</li>
                  <li>Use Agricultural Best Management Practices (BMPs) to manage manure, control runoff of pesticides, nutrients and fertilizers, and prevent soil loss</li>
                  <li>Improve integrated pest management to prepare for changes in pest population dynamics</li>
                  <li>Implement a water conservation and reuse program</li>
                  <li>Increase soil carbon by planting cover crops, using no-till techniques and composting</li>
                  <SearchLink params={{facets: {sectors: ["ny::agriculture"]}, query: ["agriculture management"]}}>> Find more information</SearchLink>
                </ul>,
              },
              { name: "Technology",
                id: 'actions_technology',
                content: <ul>
                  <li>Expand irrigation capacity</li>
                  <li>Use fans, sprinklers, and other cooling systems for livestock</li>
                  <li>Install farming-compatible renewable energy technologies such as windmills and solar panels</li>
                  <SearchLink params={{facets: {sectors: ["ny::agriculture"]}, query: ["agriculture technology"]}}>> Find more information</SearchLink>
               </ul>
              },
              { name: "Policies / Laws",
                id: 'actions_policies_and_laws',
                content: <ul>
                  <li>Examine policies and incentives to help farms reduce their flood risks and protect water quality</li>
                  <li>Consider policies that encourage conservation of floodplain agricultural lands to slow floodwaters and protect downstream development</li>
                  <SearchLink params={{facets: {sectors: ["ny::agriculture"]}, query: ["agriculture policies laws"]}}>> Find more information</SearchLink>
               </ul>
              },
              { name: "Research / Monitoring",
                id: 'actions_research_monitoring',
                content:
                <ul>
                  <li>Track use and occurrence of pesticides as weather patterns change</li>
                  <li>Track food-borne illnesses to determine if new patterns or agents are emerging</li>
                  <li>Educate vulnerable agricultural workers and their employers about health and safety precautions for any increased pesticide use</li>
                  <SearchLink params={{facets: {sectors: ["ny::agriculture"]}, query: "agriculture research monitoring"}}>> Find more information</SearchLink>
                </ul>
              }
            ]
          },
          {title: "Looking for Help?",
           id: "help",
           content: <Collection collection_name="NY/agriculture/looking-for-help" />,
           subsections: []
          },

        ]}>
        <p>The Agriculture sector includes livestock, dairy, and crop production, as well as the economically important flower cultivation, nursery, and turf industries.</p>
        <p>Potential climate change vulnerabilities for agriculture include heightened weed, insect, and disease pressure on crops, heat stress on livestock and its effects on productivity, and poor spring bloom and yields of apples because of inadequate winter chill hours.  Climate change may bring opportunities for new crop varieties and new markets such as biomass fuel crops.</p>
        <p>On-farm adaptation strategies include livestock diet and feeding management, use of fans, sprinklers and other cooling systems for dairy barns, shifting planting dates, diversification of crop varieties and crops, and freeze and frost protection for perennial fruit crops. Adaptation strategies beyond the farm include locally available design and planning assistance, disaster-risk management and insurance, financial assistance, and policy and regulatory decisions.</p>
        </SectorDetailLayout>
    );
  }
}

export default AgricultureSectorPage;
