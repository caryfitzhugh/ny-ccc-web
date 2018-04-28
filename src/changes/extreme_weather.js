import React, { Component } from 'react';
import ChangesLayout from './layout';
import SearchLink from '../utils/search_link';
import {Link} from 'react-router-dom';
import extreme_weather_img from '../images/home_page/carousel/extreme_weather.jpg';
import {Footnote} from '../utils/footnotes';
import titleize from '../utils/titleize';

const EffectLink = (props) => {
  return <li>
    <SearchLink params={{effects: ["ma::extreme weather::"+props.effect]}}>
      {titleize(props.effect)}
    </SearchLink>
  </li>;
};

class ExtremeWeatherChangesPage extends Component {
  render() {
    let showcased_resources = null;

    return (<ChangesLayout
        title="RED LEADER"
        active_layers="We're in position. I'm going to cut across the axis and try and draw their fire."
        image={extreme_weather_img}
        showcased_resources={showcased_resources}
        datagrapher_file='Temp/state/pcpn_2/ANN/MA/'
        footnotes={[
          <span> EXT. SPACE<a>Two squads of Rebel </a></span>
        ]}
        sections={[
          {title: "The X-wings dive towards the Death Star surface.",
           id: "historic_and_projected_changes_in_ma",
           content: <div>
            <p>A thousand lights glow across the dark grey expanse of the huge station.</p>
          </div>,
          subsections: [
              { name: <SearchLink params={{query:'INT. DEATH STAR'}}>INT. DEATH STAR</SearchLink>,
                id:"changes_blizzards",
                content: <div>
                  <p>Alarm sirens scream as soldiers scramble to large turbo-powered laser gun emplacements.</p>
                  <p>Electronic drivers rotate the huge guns into position as crew adjust their targeting devices.</p>
                  <p>Laserbolts streak through the star-filled night. The Rebel X-wing fighters</p>
                  <p>move in toward the Imperial base, as the Death Star aims its massive laser guns at the Rebel forces and fires.</p>
                </div>
              },
              { name: <SearchLink params={{query:"INT. MASSASSI OUTPOST - WAR ROOM"}}>INT. MASSASSI OUTPOST - WAR ROOM</SearchLink>,
                id:"changes_hurricaines",
                content: <div>
                  <p>Princess Leia listens to the battle over the intercom. Threepio is at her side.</p>
                  <p>An X-wing zooms across the surface of the Death Star.</p>
                  <p>Wedge maneuvers his fighter toward the menacing Death Star.</p>
                  <p>X-wings continue in their attack course on the Death Star.</p>
                  <h6> INT. LUKE'S X-WING FIGHTER - COCKPIT</h6>
                  <table className='table chart left-centered'>
                    <thead>
                      <tr className='blue'>
                        <th>  LUKE </th>
                        <th>This is Red Five; I'm going in!</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>EXT. SPACE</td>
                        <td>
                          Luke's X-wing races toward the Death Star. Laserbolts streak from Luke's weapons, creating a huge fireball explosion on the dim surface.<br/>
                          <ul>
                            <li>INT. LUKE'S X-WING FIGHTER - COCKPIT</li>
                            <li>  Terror crosses Luke's face as he realizes he won't be able to pull out in time to avoid the fireball.</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>  BIGGS</td>
                        <td>
                          Luke, pull up!
                          <br/>
                          <ul>
                            <li> EXT. SURFACE OF DEATH STAR</li>
                            <li>Luke's ship emerges from the fireball,</li>
                            <li>with the leading edges of his wings slightly scorched.</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                           INT. BIGGS' COCKPIT
                          <br/>
                          <em> BIGGS</em>
                        </td>
                        <td>
                          Are you all right?
                          <br/>
                          <ul>
                            <li>INT. LUKE'S X-WING FIGHTER - COCKPIT</li>
                            <li> Luke adjusts his controls and breathes</li>
                            <li>a sigh of relief.</li>
                            <li>Flak bursts outside the cockpit window.</li>
                            <li>I got a little cooked, but I'm okay.</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td> EXT. SURFACE OF THE DEATH STAR</td>
                        <td>
                          Rebel fighters continue to strafe the Death Star's surface with laserbolts.
                          <br/>
                          <ul>
                            <li> Walls buckle and cave in. Troops and equipment are blown in all directions.</li>
                            <li>Stormtroopers stagger out of the rubble. Standing in the middle of the chaos,</li>
                            <li>a vision of calm and foreboding,</li>
                            <li>is Darth Vader. One of his Astro-Officers rushes up to him.</li>
                          </ul>
                        </td>
                     </tr>
                     <tr>
                       <td>
                         ASTRO-OFFICER
                         <br/>
                         We count thirty Rebel ships
                         <br/>
                         <em>Lord Vader. But they're so small they're evading our turbo-lasers!</em>
                       </td>
                       <td>
                         We'll have to destroy them ship to ship.
                         <br/>
                         <ul>
                           <li>Get the crews to their fighters.</li>
                           <li> Smoke belches from the giant laser guns as they wind up their turbine generators to create sufficient power.</li>
                           <li>The crew rushes about preparing for another blast.</li>
                         </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Even the troopers
                        <br/>
                        <em>head gear is not adequate to protect</em>
                      </td>
                      <td>
                       them from the overwhelming noise of the monstrous weapon.
                        <br/>
                        <ul>
                          <li>One troopers bangs his helmet with his hand in an attempt to stop the ringing.</li>
                          <li>INT. READ LEADER'S X-WING FIGHTER - COCKPIT - TRAVELING</li>
                          <li>Red Leader flies through a heavy hail of flak.</li>
                          <li> Luke, let me know when you're going in.</li>
                          <li>INT. LUKE'S X-WING - COCKPIT - TRAVELING</li>
                        </ul>
                      </td>
                    </tr>
                   </tbody>
                  </table>
                </div>
              },
            { name: <SearchLink params={{query:"heavy precipitation events"}}> INT. LUKE'S X-WING - COCKPIT - TRAVELING</SearchLink>,
              id:" INT. LUKE'S X-WING - COCKPIT - TRAVELING",
              content: <div>
                <p>The Red Leader's X-wing flies past Luke as he puts his nose down and starts his attack dive.</p>
                <p>Walls buckle and cave in. Troops and equipment are blown in all directions.</p>
                <p> Smoke belches from the giant laser guns as they wind up their turbine generators to create sufficient power.</p>
              </div>
            },
            { name: <SearchLink params={{query: "temperature extremes"}}>RED LEADER</SearchLink>,
              id: "RED LEADER",
              content: <div>
                <p> Luke flings his X-wing into a twisting dive across the horizon and down onto the dim grey surface.</p>
                <p>A shot hurls from Luke's guns. Laserbolts streak toward the onrushing Death Star surface.</p>
                <p>Several small radar emplacements erupt in flame.</p>
              </div>
            }
          ]
          },
          {title: " INT. LUKE'S X-WING - COCKPIT - TRAVELING",
           id: " INT. LUKE'S X-WING - COCKPIT - TRAVELING",
           content: <div>
          </div>,
          subsections: [
            { name: <SearchLink params={{query: "INT. LUKE'S X-WING - COCKPIT - TRAVELING"}}>INT. LUKE'S X-WING - COCKPIT - TRAVELING</SearchLink>,
              id: "INT. LUKE'S X-WING - COCKPIT - TRAVELING",
              content: <div>
                <p>Laserfire erupts from a protruding tower on the surface.</p>
              </div>
            },
            { name: <SearchLink params={{query: "EXT. SURFACE OF THE DEATH STAR"}}>EXT. SURFACE OF THE DEATH STAR</SearchLink>,
              id: "EXT. SURFACE OF THE DEATH STAR",
              content: <div>
                <p> The Death Star superstructure races past Luke as he maneuvers his craft through a wall of laserfire and peels away from the surface towards the heavens.</p>
              </div>
            },
            { name: <SearchLink params={{query: " INT. DEATH STAR"}}> INT. DEATH STAR</SearchLink>,
              id: " INT. DEATH STAR",
              content: <div>
                <p>The thunder and smoke of the big guns reverberate throughout the massive structure.</p>
              </div>
            },
            { name: <SearchLink params={{query: "INT. BIGGS' COCKPIT - TRAVELING"}}>INT. BIGGS' COCKPIT - TRAVELING</SearchLink>,
              id: "INT. BIGGS' COCKPIT - TRAVELING",
              content: <div>
                <p>Biggs dives through a forest of radar domes, antennae, and gun towers as he shoots low across the Death Star surface.</p>
                <p>A dense barrage of laserfire streaks by on all sides.</p>
              </div>
            }
          ]
          }
        ]} >

        <p>Imperial star pilots dash in unison to a line of small auxiliary hatches that lead to Imperial TIE fighters.</p>

        <p>Princess Leia, surrounded by her generals and aides, paces nervously before a lighted computer table.</p>

        <p>On all sides technicians work in front of many lighted glass walls.</p>

        <p>Dodonna watches quietly from one corner. One of the officers working over a screen speaks into his headset.</p>

        </ChangesLayout>
    );
  }
}

export default ExtremeWeatherChangesPage;
