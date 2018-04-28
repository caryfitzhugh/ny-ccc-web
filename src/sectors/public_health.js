import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import SearchLink from '../utils/search_link';
import { Link } from 'react-router-dom';


class PublicHealthSectorPage extends Component {
 render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: "MA/public_health/highlighted_resources"
    };


    return (
      <SectorDetailLayout
        title="Public Health"
        showcased_resources={showcased_resources}
        children={<p>The Public Health sector includes New York State's and New York City's public health systems, services, and infrastructure; public health funding; emergency preparedness; current health status for climate-sensitive diseases; and economic impact.<br /><br />
Potential climate change vulnerabilities for water resources and related infrastructure include flooding, an increase in duration and/or frequency of dry periods affecting drinking water supplies, changes in demand for commercial and agricultural water, and declines in water quality due to higher water temperatures and decreased stream flows in summer.  Climate change may bring New York State opportunities as a potentially water-rich area under future climate conditions.<br /><br />
Public health adaptation strategies include implementing urban heat warning and response systems, planting low-pollen trees in cities to reduce urban heat without increasing allergenic pollen, ensuring access for low-income, vulnerable individuals to functional, high-efficiency air conditioners and cooling centers, and integrating climate forecasts into ongoing planning for air quality.</p>}
        sections={ [
          {title: "Impacts",
            id: 'impacts',
            subsections: [
              { name:"Temperature Changes",
                id: "impacts_temps",
                content: <ul>
                  <li>Increased days of extreme heat may cause more heat-related illnesses and hospital visits</li>
                  <li>Warming temperatures may contribute to higher ozone levels and poorer air quality</li>
                  <li>Increases in allergenic pollen production may exacerbate allergies, asthma and other respiratory illnesses</li>
                  <li>Warmer winters could contribute to an increase in incidence of vector-borne diseases, such as Lyme disease, Eastern Equine Encephalitis, and West Nile Virus </li>
                  <li>The risk of industrial accidents, chemical releases and explosions could increase when temperature thresholds for safe storage are surpassed</li>
                  <SearchLink params={{query: 'public health rising temperatures'}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Precipitation Changes",
                id: 'impacts_precipitation',
                content: <ul>
                  <li>Pathogens, nutrients, and pesticides carried to local waterways by stormwater from large storm events may elevate risks for swimming, fishing, or drinking water quality</li>
                  <li>Flooding of industrial facilities may increase the risk for explosions or chemical releases, threatening drinking water safety</li>
                  <li>Extensive flooding could increase the potential for water-borne disease outbreaks</li>
                  <SearchLink params={{query: 'public health changes in precipitation'}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Extreme Weather",
                id: "impacts_extreme_weather",
                content: <ul>
                  <li>Extreme storms may disrupt sanitary, energy, and health care services, and impair access to safe drinking water and nutritious food</li>
                  <li>Severe flooding may damage or obstruct roadways, making evacuation and emergency transport more difficult</li>
                  <li>Coping with extreme weather may increase mental and physical health stress</li>
                  <SearchLink params={{query: 'public health extreme weather'}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Sea Level Rise",
                id: "impacts_sea_level_rise",
                content: <ul>
                  <li>Coastal storm surges may become more dangerous, forcing emergency evacuations</li>
                  <li>Flood damage to coastal infrastructure like power plants, drinking water pipes and wastewater treatment plants could increase public health risks, especially for vulnerable populations</li>
                  <SearchLink params={{query: 'public health changes in precipitation'}}>> Find more information</SearchLink>
                </ul>
              }
            ]},
          {title: "Preparing for Climate Change ",
            id: 'preparing',
            subsections: [
              { name:"Planning",
                id: "preparing_planning",
                content: <ul>
                  <li>Plan climate and health education campaigns targeted to vulnerable populations</li>
                  <li>Develop plans to ensure that local health systems can respond to climate-related health risks</li>
                  <li>Adopt strategies to promote walking, biking, public transit and use of electric vehicles for their environmental and health benefits</li>
                  <li>Develop a heat emergency plan with measures to ensure vulnerable populations can access cooling centers, especially in urban areas</li>
                  <li>Ensure evacuation plans and routes consider climate change impacts</li>
                  <SearchLink params={{query: "public health planning"}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Management Practices",
                id: 'preparing_management_practices',
                content: <ul>
                  <li>Coordinate across local boards of health to prepare for climate impacts</li>
                  <li>Implement urban heat warning and response systems</li>
                  <li>Plant low-pollen shade trees and increase green roofs, urban trees, gardens and parks to mitigate heat and air pollution</li>
                  <li>Promote training for first responders on the prevention of, and response to, severe weather or heat-related chemical releases and industrial accidents</li>
                  <li>Identify ways to help property owners detect and remediate mold in buildings</li>
                  <li>Encourage wider use of cooling features like ceiling fans and reflective paints </li>
                  <SearchLink params={{query: 'public health management'}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Technology",
                id: "actions_technology",
                content: <ul>
                  <li>Use green stormwater infrastructure like rain gardens, swales, and porous pavement</li>
                  <li>Promote less pesticide-intensive strategies to manage mosquitoes and ticks </li>
                  <SearchLink params={{query: 'public health technology'}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Policies / Laws",
                id: "actions_policies_laws",
                content: <ul>
                  <li>Consider policies and incentives to increase urban tree canopy and vegetation for cooling</li>
                  <li>Communicate about the health benefits of clean energy policies</li>
                  <SearchLink params={{query: 'public health policy law'}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Research / Monitoring",
                id: "actions_research",
                content: <ul>
                  <li>Develop a systematic tick surveillance program to monitor vector densities and infection rates</li>
                  <li>Investigate relationships between climate change, air quality, and health outcomes</li>
                  <SearchLink params={{query: 'public health research monitoring'}}>> Find more information</SearchLink>
                </ul>
              }
            ]},
          {title: "Looking for help?",
            id: 'looking_for_help',
            subsections: [],
            content: <ul>
              <li><Link to="New York State Department of Health" target="_blank">New York State Department of Health</Link></li>
              <li><Link to="https://www.naccho.org/" target="_blank">National Association of County and City Health Officials (NACCHO)</Link></li>
           </ul>
          }
        ]}
        >
        </SectorDetailLayout>
    );
  }
}

export default PublicHealthSectorPage;
