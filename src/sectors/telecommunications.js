import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import SearchLink from '../utils/search_link';
import sector_image from "../images/sectors/telecommunications.jpg";
import { Link } from 'react-router-dom';

class TelecommunicationSectorPage extends Component {
  render() {

    let showcased_resources = {
      title: "Key Resources",
      collection_name: "NY/telecommunications/highlighted_resources",
    };
    return (
      <SectorDetailLayout
        title="Telecommunications"
        showcased_resources={showcased_resources}
        image={sector_image}
        image_caption={"Work on cables following a blizzard, Dutchess County, NY"}
        image_credit={"Julian Colton"}
        sections={ [
          {title: "Impacts",
            id: 'impacts',
            subsections: [
              { name:"Rising Temperatures",
                id: "impacts_temps",
                content: <ul>
                  <li>Power outages due to increased energy demand during heat waves, leading to reduced telecommunications service</li>
                  <SearchLink params={{facets: {climate_changes: ["ny::annual temperature", "ny::extreme cold events", "ny::extreme heat events", "ny::seasonal temperature"], sectors: ["ny::telecommunications"]}, query: "telecommunications"}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Changes in Precipitation",
                id: 'impacts_precipitation',
                content: <ul>
                  <li>Damage to telecommunication lines and other infrastructure from increased heavy precipitation events resulting in floods or icing during freezing rain</li>
                  <li>Strain on trees and utility lines from wet snow</li>
                  <SearchLink params={{facets: {climate_changes: ["ny::annual precipitation", "ny::coastal flooding", "ny::inland flooding", "ny::seasonal precipitation", "ny::snowfall", "ny::heavy precipitation events"], sectors: ["ny::telecommunications"]}, query: "telecommunications"}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Extreme Weather",
                id: "impacts_extreme_weather",
                content: <ul>
                  <li>Telecommunication service delivery disruption to due severe wind, icing, snow, hurricanes, lightning, floods, and other extreme weather events</li>
                  <li>Increased emergency communications causing strain on system capacity as extreme weather events become more frequent and intense</li>
                  <li>Populations in underserved areas—especially in remote rural areas—with only one type of service may have difficulty reporting outages during extreme events and potentially life-threatening emergencies</li>
                  <SearchLink params={{facets: {climate_changes: ["ny::coastal flooding", "ny::drought", "ny::extreme cold events", "ny::extreme heat events", "ny::hail storms", "ny::heavy precipitation events", "ny::hurricanes", "ny::inland flooding", "ny::intense winter storms", "ny::noreasters", "ny::peak winds", "ny::snow storms", "ny::storm surge"], sector: ["ny::telecommunications"]}, query: "telecommunications"}}>> Find more information</SearchLink>
                </ul>
              }
            ]},
          {title: "Actions",
            id: 'preparing',
            subsections: [
              { name:"Planning",
                id: "preparing_planning",
                content: <ul>
                  <li>Protect against outages by maintaining backup supplies of poles and wires to be able to replace expediently those that are damaged, and having emergency restoration crews at the ready ahead of the storm’s arrival</li>
                  <SearchLink params={{facets: {sectors: ["ny::telecommunications"]}, query: "telecommunications planning"}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Management Practices",
                id: 'preparing_management_practices',
                content: <ul>
                  <li>Relocate central offices that house communications infrastructure out of future floodplains, including in coastal areas increasingly threatened by sea level rise combined with coastal storm surges</li>
                  <li>Make the backbone network redundant for most if not all service areas, and resilient to all types of extreme weather events </li>
                  <li>Decouple communication infrastructure from electric grid infrastructure to the extent possible, and make both more robust, resilient, and redundant.</li>
                  <li>Protect against outages by trimming trees near power and communication lines</li>
                  <li>Place telecommunication cables underground where technically and economically feasible </li>
                  <SearchLink params={{facets: {sectors: ["ny::telecommunications"]}, query: 'telecommunications management'}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Technology",
                id: "actions_outreach",
                content: <ul>
                  <li>Minimize the effects of power outages on communications services by providing backup power at cell towers, such as with generators, solar-powered battery banks, and “cells on wheels” that can replace disabled towers</li>
                  <li>Provide reliable backup power with sufficient fuel supply for extended grid power outages</li>
                  <li>Replace segments of the wired network most susceptible to weather (e.g., customer drop wires) with low-power wireless solutions</li>
                  <li>Further develop backup cell phone charging options at the customer’s end, such as car chargers, and create a standardized charging interface that allows any phone to be recharged by any charger</li>
                  <li>Assess, develop, and expand alternative telecommunication technologies if they promise to increase redundancy and/or reliability, including free-space optics (which transmits data with light rather than physical connections), power line communications (which transmits data over electric power lines), satellite phones, and ham radio</li>
                  <li>Develop high-speed broadband and wireless services in low-density rural areas to increase redundancy and diversity in vulnerable remote regions</li>
                  <SearchLink params={{facets: {sectors: ["ny::telecommunications"]}, query: 'telecommunications technology'}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Policies / Laws",
                id: "actions_policies_laws",
                content: <ul>
                  <li>Reassess industry performance standards combined with appropriate, more uniform regulation across all types of telecommunication services, and uniformly enforce regulations, including mandatory instead of partially voluntary outage reporting to the regulatory agencies</li>
                  <SearchLink params={{facets: {sectors: ["ny::telecommunications"]}, query: 'telecommunications policy law'}}>> Find more information</SearchLink>
                </ul>
              },
              { name: "Research / Monitoring",
                id: "actions_research",
                content: <ul>
                  <li>Develop databases that readily show the location and elevations of installed telecommunication facilities and lifelines and their operational capacity, for use in extreme weather events to make rapid damage, loss, and consequence assessments in potential hazard and damage zones</li>
                  <li>Develop standardized easy access to information for the public on service outages and expected restoration times</li>
                  <SearchLink params={{facets: {sectors: ["ny::telecommunications"]}, query: 'telecommunications research monitoring'}}>> Find more information</SearchLink>
                </ul>
              }
            ]},
          {title: "Looking for help?",
            id: 'looking_for_help',
            subsections: [],
            content: <ul>
              <li><Link to="http://www1.nyc.gov/site/doitt/index.page" target="_blank">New York City Information Technology and Telecommunications</Link></li>
              <li><Link to="http://www3.dps.ny.gov/W/PSCWeb.nsf/All/7F830C1FF90AB31285257687006F388D?OpenDocument" target="_blank">New York Public Service Commission – Telecommunications </Link></li>
           </ul>
          }
        ]}
        >
        <p>
          The Telecommunications sector involves infrastructure systems and the technological sophistication, availability, accessibility, interconnectivity, broadband capacity, redundancy, security, and reliability of services for users in the private and public sectors.
        </p>
        <p>
          Potential climate change vulnerabilities include reduced service due to extreme-heat-related power outages, increased emergency communications and reduction in cable-provided services due to storm-damaged utility lines, and flooding of central offices during extreme storms, resulting in reduced or disrupted service.<br /><br />
Telecommunications adaptation strategies include placing communication cables underground where technically and economically feasible, relocating central offices that house communications infrastructure out of future floodplains, and minimizing the effects of power outages on communications services by providing backup power at cell towers, such as with generators, solar-powered battery banks, and “cells on wheels” that can replace disabled towers.
        </p>
        </SectorDetailLayout>
    );
  }
}

export default TelecommunicationSectorPage;
