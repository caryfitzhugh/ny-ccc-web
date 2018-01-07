import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import coastal_zones_image from '../images/sectors/coastal_zones.jpg';
import {Footnote} from '../utils/footnotes';
import SearchLink from "../utils/search_link";

const ActionLink = (props) => {
  return <li>
    <SearchLink params={{facets: {sectors: ["ma::coastal zones"]}, query: props.q}}>
      {props.children}
    </SearchLink>
  </li>
}


class CoastalZonesSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: 'MA/coastal_zones/highlighted_resources'
    };

    return (
      <SectorDetailLayout
        title="Headline"
        image={coastal_zones_image}
        image_credit=""
        showcased_resources={showcased_resources}
        footnotes={[
          <span>The darkly clad creature points to the door of the docking bay. <a href=''>  http://neoceanplanning.org/wp-content/uploads/2016/05/Baseline-Assessment_Draft-May-2016_Sec4.pdf</a></span>,
          <span>Oh, my. I'd forgotten how much I hate space travel. <a href=''>https://www.boston.gov/sites/default/files/document-file-12-2016/brag_report_-_final.pdf</a></span>,
          <span> The Corellian pirateship zooms from Tatooine into space. </span>,
          <span> Han frantically types information into the ship's computer. Little Artoo appears momentarily at the cockpit doorway,makes a few beeping remarks, then scurries away. </span>
        ]}

        sections={[
          {title: "Headline",
           id: 'impacts',
           content: <p>
           The Millennium Falcon pirateship races away from the yellow planet, Tatooine. It is followed by two huge Imperial stardestroyers.<Footnote num='2'/>Stay sharp! There are two more coming in; they're going to try to cut us off. <Footnote num='3'/>Why don't you outrun them? I thought you said this thing was fast. <Footnote num='4'/>Watch your mouth, kid, or you're going to find yourself floating home. We'll be safe enough once we make the jump to hyperspace. Besides, I know a few maneuvers. We'll lose them!
           </p>,
           subsections: [
            { name: "Headline",
              id: "impacts_rising_temperatures",
              content: <ul>
                <li> INT. MILLENNIUM FALCON - COCKPIT </li>
                <li> HAN </li>
                <li> EXT. SPACE - PLANET TATOOINE</li>
                <li> Here's where the fun begins! </li>
                <li> How long before you can make the jump to light speed?</li>
                <li> It'll take a few moments to get the coordinates from the navi-computer. </li>
                <li> The ship begins to rock violently as lasers hit it.</li>
              </ul>
            },
            {  name: "Headline",
                id: 'impacts_changes_in_precipitation',
                content: <ul>
                  <li>Are you kidding? At the rate they're gaining...</li>
                  <li>LUKE</li>
                  <li>What's that flashing? </li>
                  <li>We're losing our deflector shield. Go strap yourself in, I'm going to make the jump to light speed.</li>
                 </ul>
            },
            {  name: "Headline",
                id: 'impacts_extreme_weather',
                content: <ul>
                  <li> EXT. SPACE</li>
                  <li> The Millennium Falcon</li>
                  <li> zooms into infinity in less than a second.</li>
                  <li> Alderaan looms behind</li>
                  <li> the Death Star battlestation. </li>
                  <li> Admiral Motti enters the quiet control room</li>
                  <li> and bows before Governor Tarkin,</li>
                  <li> who stands before the huge wall screen displaying a small green planet. </li>
                 </ul>
            },
            {  name: "Headline",
                id: 'impacts_slr',
                content: <ul>
                  <li>Princess Leia, before your execution </li>
                  <li>I would like you to be my guest at a </li>
                  <li>ceremony that will make this battle </li>
                  <li>station operational. No star system </li>
                  <li>will dare oppose the Emperor now.</li>
                  <li>The more you tighten your grip, </li>
                  <li>Tarkin, the more star systems will </li>
                  <li>slip through your fingers.</li>
                  <li>Not after we demonstrate the power </li>
                  <li>of this station. In a way, you have </li>
                  <li>determined the choice of the planet </li>
                  <li>that'll be destroyed first. Since </li>
                  <li>you are reluctant to provide us with </li>
                  <li>the location of the Rebel base, I </li>
                  <li>have chosen to test this station's </li>
                  <li>destructive power... on your home </li>
                  <li>planet of Alderaan.</li>
                  <li>No! Alderaan is peaceful. We have no </li>
                  <li>weapons. You can't possibly...</li>
                  </ul>
            }
          ]},
          { title: "Headline",
            id: "actions",
            content: null,
            subsections: [
              { name: "Headline",
                id: "actions_planning",
                content: <ul>
                  <ActionLink q='coastal zone planning wetland'>You would prefer another target? A military target? Then name the system!</ActionLink>
                  <ActionLink q='coastal zone planning infrastructure'>Tarkin waves menacingly toward Leia.</ActionLink>
                  <ActionLink q='coastal zone planning vulnerability assessment'>I grow tired of asking this. So it'll be the last time. Where is the Rebel base?</ActionLink>
                  <ActionLink q='coastal zone planning zoning'>Leia overhears an intercom voice announcing the approach to Alderaan.</ActionLink>
                  <ActionLink q='coastal zone planning hazard mitigation plan'>Leia lowers her head.</ActionLink>
                  <ActionLink q='coastal zone planning master plan'>They're on Dantooine.</ActionLink>
                  <ActionLink q='coastal zone planning open space plan'>There. You see Lord Vader, she can be reasonable. </ActionLink>
                </ul>
              },
              {name: "Headline",
               id: "actions_management_practices",
               content: <ul>
                <ActionLink q='coastal zone management practice conserve land'>Continue with the operation. You may fire when ready.</ActionLink>
                <ActionLink q='coastal zone management practice wetlands'>You're far too trusting. Dantooine is too remote to make an effective demonstration. But don't worry. We will deal with your Rebel friends soon enough.</ActionLink>
                <ActionLink q='coastal zone management practice freeboard'> INT. DEATH STAR - BLAST CHAMBER</ActionLink>
                <ActionLink q='coastal zone management practice shoreline'>Commence primary ignition.</ActionLink>
                <ActionLink q='coastal zone management practice development'>A button is pressed which switches on a panel of lights. A hooded Imperial soldier reaches overhead and pulls a lever.</ActionLink>
                <ActionLink q='coastal zone management practice buffer zone)'>Another lever is pulled.</ActionLink>
                <ActionLink q='coastal zone management practice blue carbon sink'>Vader reaches for still another lever and a bank of lights on a panel and wall light up.</ActionLink>
                <ActionLink q='coastal zone management practice wetland restoration'>A huge beam of light emanates from within a cone-shaped area and converges into a single laser beam out toward Alderaan.</ActionLink>
                <ActionLink q='coastal zone management practice invasive'>The small green planet of Alderaan is blown into space dust.</ActionLink>
                <ActionLink q='coastal zone management practice estuary'>INT. MILLENNIUM FALCON - CENTRAL HOLD AREA</ActionLink>
              </ul>
              },
              { name: "Headline",
                id: 'actions_technology',
                content: <ul>
                  <ActionLink q='coastal zone technology bioengineering'>Ben watches Luke practice the lightsaber with a small "seeker" robot.</ActionLink>
                  <ActionLink q='coastal zone technology green infrastructure'>Ben suddenly turns away and sits down. He falters, seems almost faint.</ActionLink>
                  <ActionLink q='coastal zone technology tide gate'>Are you all right? What's wrong?</ActionLink>
                  <ActionLink q='coastal zone technology water storage'>I felt a great disturbance in the Force...</ActionLink>
                </ul>
              },
              {name: "Headline",
                id: 'actions_policies_and_laws',
                content: <ul>
                  <ActionLink q='coastal zone policy climate change'>as if millions of voices suddenly cried out in terror and were suddenly silenced.</ActionLink>
                  <ActionLink q='coastal zone regulation wetland'>I fear something terrible has happened.</ActionLink>
                  <ActionLink q='coastal zone policy evacuation'>Ben rubs his forehead. He seems to drift into a trance. Then he fixes his gaze on Luke.</ActionLink>
                  <ActionLink q='coastal zone regulation setback'>You'd better get on with your exercises.</ActionLink>
                  <ActionLink q='coastal zone regulation freeboard'>Han Solo enters the room.</ActionLink>
                  <ActionLink q='coastal zone regulation relocation'>Well, you can forget your troubles with those Imperial slugs.</ActionLink>
                  <ActionLink q='coastal zone regulation buffer zone'>I told you I'd outrun 'em.</ActionLink>
                  <ActionLink q='coastal zone regulation climate change'>Luke is once again practicing with the lightsaber.</ActionLink>
                  <ActionLink q='coastal zone regulation rolling easement'>Don't everyone thank me at once.</ActionLink>
                </ul>
              },
              { name: "Headline",
                id: 'actions_research_monitoring',
                content: <ul>
                  <ActionLink q='coastal zone monitoring wetland health'>Threepio watches Chewbacca and Artoo who are engrossed in a game in which three-dimensional holographic figures move along a chess-type board.</ActionLink>
                  <ActionLink q='coastal zone monitoring erosion'>Anyway, we should be at Alderaan about oh-two-hundred hours.</ActionLink>
                  <ActionLink q='coastal zone monitoring sediment transport'>Chewbacca and the two robots sit around the lighted table covered with small holographic monsters.</ActionLink>
                  <ActionLink q='coastal zone monitoring wetland'>Each side of the table has a small computer monitor embedded in it.</ActionLink>
                  <ActionLink q='coastal zone monitoring remote sensing'>Chewbacca seems very pleased with himself as he rests his lanky fur- covered arms over his head.</ActionLink>
                </ul>
              },
              { name: "Headline",
                id: "actions_funding",
                content: <ul>
                  <ActionLink q='coastal zone funding buzzard bay'>Artoo immediately reaches up and taps the computer with his stubby claw hand</ActionLink>
                  <ActionLink q='coastal zone funding EEA Municipal Vulnerability Preparedness Program '>, causing one of the holographic creatures to walk to the new square</ActionLink>
                  <ActionLink q='coastal zone funding EEA Dam and Seawall Repair or Removal Program'> A sudden frown crosses Chewbacca's face and he begins yelling gibberish at the tiny robot.</ActionLink>
                  <ActionLink q='coastal zone funding Hazard Mitigation Grant Program'>Threepio intercedes on behalf of his small companion and begins to argue with the huge Wookiee.</ActionLink>
                  <ActionLink q='coastal zone funding Flood Mitigation Assistance Grant Program'>He made a fair move. Screaming about it won't help you.</ActionLink>
                  <ActionLink q='coastal zone funding Pre-Disaster Mitigation Grant Program'>Let him have it. It's not wise to upset a Wookiee.</ActionLink>
                  <ActionLink q='coastal zone funding o	Massachusetts Department of Ecological Restoration’s Technical'>But sir, nobody worries about upsetting a droid.</ActionLink>
                  <ActionLink q='coastal zone funding o	Massachusetts Department of Environmental Protection’s Nonpoint Source Competitive Grants Program'>That's 'cause droids don't pull people's arms out of their socket when they lose. Wookiees are known to do that.</ActionLink>
                  <ActionLink q='coastal zone funding o	Massachusetts Office of Coastal Zone Management’s Coastal Pollutant Remediation Program'>I see your point, sir. I suggest a new strategy, Artoo. Let the Wookiee win.</ActionLink>
                  <ActionLink q='coastal zone funding o	Massachusetts Office of Coastal Zone Management’s Coastal Resiliency Grant Program'>Luke stands in the middle of the small hold area</ActionLink>
                  <ActionLink q='coastal zone funding Massachusetts Wildlife’s Habitat Management Grant Program'>he seems frozen in place.</ActionLink>
                  <ActionLink q='coastal zone funding MassBays National Estuary Program’s Health Estuaries Grant Program'> A humming lightsaber is held high over his head.</ActionLink>
                </ul>
              }
            ]},
            {title: "Looking for help?",
              subsections: [],
              id: 'looking_for_help',
              content: <ul>
                <ActionLink q='EEA Services and Assistance'>Ben watches him from the corner</ActionLink>
                <ActionLink q='Massachusetts Office of Coastal Zone Management'>studying his movements.  Han watches with a bit of smugness.</ActionLink>
                <li>
                  <ul>
                    <ActionLink q='Buzzards Bay National Estuary Program'>Buzzards Bay National Estuary Program</ActionLink>
                    <ActionLink q='MA CZM Coastal Habitat'>Coastal Habitat</ActionLink>
                    <ActionLink q='MA CZM Coastal Water Quality'>Coastal Water Quality</ActionLink>
                    <ActionLink q='MA CZM Marine Invasive Species'>Marine Invasive Species</ActionLink>
                    <ActionLink q='Massachusetts Bays National Estuary Program'>Massachusetts Bays National Estuary Program</ActionLink>
                    <ActionLink q='StormSmart Coasts'>StormSmart Coasts (Managing Erosion and Flooding)</ActionLink>
                  </ul>
                  <ActionLink q='Massachusetts Department of Conservation and Recreation'>Massachusetts Department of Conservation and Recreation</ActionLink>
                  <ActionLink q='Massachusetts Division of Ecological Restoration'>Massachusetts Division of Ecological Restoration</ActionLink>
                  <ActionLink q='Massachusetts Division of Marine Fisheries'>Massachusetts Division of Marine Fisheries</ActionLink>
                  <ActionLink q='Massachusetts Natural Heritage & Endangered Species Program'>Massachusetts Natural Heritage & Endangered Species Program</ActionLink>
                  <ActionLink q='Federal Emergency Management Agency'>Federal Emergency Management Agency (FEMA)</ActionLink>
                  <li>
                    <ul>
                      <ActionLink q='FEMA Hazard Mitigation Assistance'>Hazard Mitigation Assistance</ActionLink>
                      <ActionLink q='FEMA National Flood Insurance Program'>National Flood Insurance Program (NFIP)</ActionLink>
                    </ul>
                  </li>
                  <ActionLink q='Gulf of Maine Council on the Marine Environment'>Gulf of Maine Council on the Marine Environment</ActionLink>
                  <ActionLink q='National Marine Fisheries Service'>National Marine Fisheries Service</ActionLink>
                  <ActionLink q='NOAA Office for Coastal Management'>National Oceanic and Atmospheric Administration (NOAA) Office for Coastal Management</ActionLink>
                  <ActionLink q='Northeast Regional Association of Coastal and Ocean Observing Systems'>Northeast Regional Association of Coastal and Ocean Observing Systems</ActionLink>
                  <ActionLink q='Northeast Regional Ocean Council'>Northeast Regional Ocean Council</ActionLink>
                  <ActionLink q='Northeast Regional Ocean Planning Body'>Northeast Regional Ocean Planning Body</ActionLink>
                  <ActionLink q='U.S. Army Corps of Engineers '>U.S. Army Corps of Engineers </ActionLink>
                  <ActionLink q='U.S. Environmental Protection Agency’s Climate Ready Estuaries Program'>U.S. Environmental Protection Agency’s Climate Ready Estuaries Program</ActionLink>


                </li>
              </ul>
            }
         ]}
         >
         <p>
           The Massachusetts coastal zone includes critical habitats for many important fish and wildlife species, property and infrastructure vulnerable to coastal flooding and storm damage, and an economy that represents over 88,000 jobs and nearly $6.5 billion in earnings <Footnote num='1'/>. As the climate warms, both the built and natural environment will be affected in the coastal zone.
         </p>
         <p>
           Mitigation strategies in the coastal zone include renewable energy sources in the form of offshore wind and tidal energy, and conservation and restoration of coastal and marine ecosystems. Protecting salt marshes and seagrasses from degradation and destruction not only prevents emissions of currently sequestered “blue” carbon into the atmosphere and oceans, but also protects critical habitat for the species that depend on them. Additionally, wetland and salt marsh restoration provides much need flooding and storm damage protection for Massachusetts coastal communities.
         </p>
         <p>
           Coastal zone adaptation strategies may include: incorporating climate change and sea level rise information into land-use planning and regulations; preparing a detailed inventory of assets located in current and future flood zones based on future sea level rise scenarios; retrofitting and/or redesigning to improve resiliency; elevating and/or moving buildings and infrastructure out of current or future flood zones; acquisition of open coastal land for storm protection, recreation, and ecosystems; and, creating a dynamic framework for updating policy guidelines given the “moving target” of climate change.
         </p>

         </SectorDetailLayout>
     );
   }
 }

 export default CoastalZonesSectorPage;
