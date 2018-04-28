import React, { Component } from 'react';
import ChangesLayout from './layout';
import SearchLink from '../utils/search_link';
import precipitation_changes_img from '../images/home_page/carousel/precipitation_changes.jpg';
import MapLink from '../utils/map_link';
import DatagrapherLink from '../utils/datagrapher_link';
import {Footnote} from '../utils/footnotes';
import titleize from '../utils/titleize';

const EffectLink = (props) => {
  return <li>
    <SearchLink params={{effects: ["ma::changes in precipitation::"+props.effect]}}>
      {titleize(props.effect)}
    </SearchLink>
  </li>;
};

class ChangesInPrecipitationChangesPage extends Component {
  render() {
    let showcased_resources = null;
    // title: "Highlighted Resources",
    // collection_name: "MA/agriculture/highlighted_resources",

    return (<ChangesLayout
        title=" EXT. MASSASSI OUTPOST - JUNGLE"
        active_layers="ma_historical_precipitation,ma_historical_consecutive_dry_days"
        image={precipitation_changes_img}
        showcased_resources={showcased_resources}
        datagrapher_file='Temp/state/pcpn/ANN/MA/'
        footnotes={[
          <span>BEN'S VOICE</span>,
          <span>Luke, the Force will be with you.</span>
        ]}

        sections={[
          {title: "  EXT. MASSASSI OUTPOST - JUNGLE",
           id: "historic_and_projected_changes",
           content: <div>
           <p>  All that can be seen of the fortress is a lone guard standing on a small pedestal jutting out above the dense jungle. The muted gruesome crying sounds that naturally permeate this eerie purgatory are overwhelmed by the thundering din of ion rockets as four silver starships catapult from the fol in a tight formation and disappears into the morning cloud cover.</p>

           <h6> Stand-by alert. Death Star approaching. Estimated time to firing range, fifteen minutes.</h6>
           <table className='table chart t-c' style={{textAlign: "center"}}>
              <thead>
                <tr className='blue'>
                  <th colSpan='2'> <h5>EXT. SPACE</h5> </th>
                  <th> <h4>The Death Star slowly</h4>moves behind the massive yellow surface</th>
                  <th> <h4>of Yavin in the foreground</h4> as many X-wing fighters flying</th>
                  <th> <h4> in formation zoom toward</h4>us and out of the frame.</th>
                </tr>
              </thead>
              <tbody>
     
                <tr>
                  <td rowSpan="3" className='grey vert-align' > <strong>EXT. SPACE - ANOTHER ANGLE</strong></td>
                  <td>Light </td>
                  <td> from a distant sun</td>
                  <td> creates an eerie atmospheric glow<br/>around a huge planet,</td>
                  <td> avin. Rebel fighters flying in<br/>formation settle ominously</td>
                </tr>
                <tr>
                  <td>in the foreground</td>
                  <td>and very slowly pull away. </td>
                  <td> INT. RED LEADER STARSHIP - COCKPIT<br/> Red Leader lowers his visor</td>
                  <td> and adjusts his gun sights, <br/>looking to each side at his wing men.</td>
                </tr>
                <tr>
                  <td> RED LEADER</td>
                  <td> All wings report in. </td>
                  <td> INT. ANOTHER COCKPIT<br/> One of the Rebel fighters</td>
                  <td>checks in through his mike.<br/> RED TEN</td>
                </tr>

                <tr>
                  <td rowSpan='2' className='vert-align grey'><strong>Red Ten standing by.</strong></td>
                  <td> INT. BIGGS' COCKPIT</td>
                  <td> Biggs checks his fighter's controls</td>
                  <td> alert and ready for combat.<br/> RED SEVEN</td>
                  <td>over Biggs' headset) <br/> Red Seven standing by.</td>
                </tr>
                <tr>
                  <td>BIGGS</td>
                  <td>Red Three standing by.</td>
                  <td>INT. PORKINS' COCKPIT <br/> PORKINS</td>
                  <td> Red Six standing by. <br/>  RED NINE</td>
                </tr>

                <tr>
                  <td rowSpan='2' className='vert-align grey'><strong>  (over headset)</strong></td>
                  <td>Red Nine standing by.</td>
                  <td>  INT. WEDGE'S FIGHTER - COCKPIT</td>
                  <td>WEDGE</td>
                  <td>Red Two standing by.</td>
                </tr>
                <tr>
                  <td>INT. LUKE'S X-WING FIGHTER - COCKPIT</td>
                  <td>RED ELEVEN</td>
                  <td>(over headset)</td>
                  <td>Red Eleven standing by.</td>
                </tr>
              </tbody>
           </table>
          </div>,
          subsections: []
          },
          {title: <SearchLink params={{query:'annual precipitation'}}>LUKE</SearchLink>,
           id: "more_rainfall",
           content: <div>
            <p>Red Five standing by.</p>

            <p>EXT. LUKE'S X-WING FIGHTER</p>

            <p> Artoo-Detoo, in position outside of the fighter, turns his head from side to side and makes beeping sounds.</p>
            </div>,
            subsections: []
          },
          {title: <SearchLink params={{query:'heavy precipitation events microbursts'}}>INT. RED LEADER'S FIGHTER - COCKPIT</SearchLink>,
           id: "more_frequent_downpours",
           content: <div>
              <p>RED LEADER</p>
              <p>Lock S-foils in attack position.</p>
              <p> EXT. SPACE</p>
              <p>The group of X-wing fighters move in formation toward the Death Star, unfolding the wings and locking them in the "X" position.</p>
              <p>INT. BIGGS' COCKPIT</p>
            </div>,
            subsections: []
          },
          {title: <SearchLink params={{query:'snowfall snow cover'}}>READ LEADER</SearchLink>,
           id: "less_winter_snow",
           content: <div>
             <p>(over headset) We're passing through their magnetic field.</p>
            </div>,
            subsections: []
          },
          {title: "  INT. RED LEADER'S COCKPIT",
           id: "more_impacts",
           content: <div>
            </div>,
            subsections: [
              { name: <SearchLink params={{query:'drought'}}>  Hold tight!</SearchLink>,
                id:"INT. LUKE'S X-WING FIGHTER - COCKPIT",
                content: <div>
                  <p> Luke adjusts his controls as he concentrates on the approaching Death Star.</p>
                  <p>The ship begins to be buffeted slightly.</p>
                </div>
              },
              { name: <SearchLink params={{query:'natural resources annual precipitation'}}> Switch your deflectors on.</SearchLink>,
                id:"Double front!",
                content: <div>
                  <p>  The fighters, now X-shaped darts, move in formation. The Death Star now appears to be a small moon growing rapidly in size as the Rebel fighters approach.</p>
                </div>
              },
              { name: <SearchLink params={{query:'agriculture tourism precipitation'}}>INT. WEDGE'S COCKPIT</SearchLink>,
                id:"Wedge is amazed and slightly frightened at the awesome spectacle.",
                content: <div>
                  <p>Complex patterns on the metallic surface begin to become visible. A large dish antenna is built into the surface on one side.</p>
                </div>
              },
              ]
          }
        ]} >

        <p> As the fighters move closer to the Death Star, the awesome size of the gargantuan Imperial fortress is revealed. </p>

        <p>Half of the deadly space station is in shadow and this area sparkles with thousands of small lights running in thin lines and occasionally grouped in large clusters; somewhat like a city at night as seen from a weather satellite. </p>

        <p>Red Leader looks around at his wingmen; the Death Star looming in from behind.</p>

        <p>Two Y-wing fighters bob back and forth in the background. He moves his computer targeting device into position.</p>






        </ChangesLayout>
    );
  }
}

export default ChangesInPrecipitationChangesPage;
