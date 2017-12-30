import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import {Link} from 'react-router-dom';
import SearchLink from '../utils/search_link';
import EffectLink from '../layouts/effect_link';
import agriculture_image from '../images/sectors/agriculture.jpg';

const ActionLink = (props) => {
  return <li>
    <SearchLink params={{facets: {sectors: ["ma::agriculture"]}, query: props.q}}>
      {props.children}
    </SearchLink>
  </li>
}

class AgricultureSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Highlighted Resources",
      collection_name: "MA/agriculture/highlighted_resources",
    };

    return (
      <SectorDetailLayout
      image={agriculture_image}
        title="Agriculture"
        showcased_resources={showcased_resources}
        datagrapher_file='Temp/state/gdd50/ANN/MA/'
        sections={[
          {title: "Impacts",
           id: "impacts",
           content: <p>
            From high on a rock mesa, the tiny Landspeeder can be seen 
            gliding across the desert floor. Suddenly in the foreground 
            two weather-beaten Sandpeople shrouded in their grimy desert 
            cloaks peer over the edge of the rock mesa. One of the 
            marginally human creatures raises a long ominous laser rifle 
            and points it at the speeder but the second creature grabs 
            the gun before it can be fired.
           </p>,
            subsections: [
              { name: "Changes in Precipitation",
                id: 'impacts_changes_in_precip',
                content: <ul>
                  <li>
                    <EffectLink sector={"agriculture"}
                                effect={"Changes in Precipitation::Hey, whoa, just where do you think you're going?"}/>
                  </li>
                  <li>
                    <EffectLink sector={"agriculture"}
                                effect={"Changes in Precipitation::No, he's not going to try anything."}/>
                  </li>
                  <li>
                    <EffectLink sector={"agriculture"}
                                effect={"Changes in Precipitation::Hello there! Come here my little friend. Don't be afraid."}/>
                  </li>
                </ul>,
              },
              { name: "Extreme Weather",
                id: 'impacts_extreme_weather',
                content: <ul>
                  <li>
                    <EffectLink sector={"agriculture"}
                                effect={"Extreme Weather::Hey, whoa, just where do you think you're going?"}/>
                  </li>
                </ul>,
              },
              { name: "Rising Temperatures",
                id: 'impacts_rising_temperatures',
                content: <ul>
                  <li>
                    <EffectLink sector={"agriculture"}
                                effect={"Rising Temperatures::Hey, whoa, just where do you think you're going?"}/>
                  </li>
                  <li>
                    <EffectLink sector={"agriculture"}
                                effect={"Rising Temperatures::Oh my... sir, he says there are several creatures approaching from the southeast."}/>
                  </li>
                  <li>
                    <EffectLink sector={"agriculture"}
                                effect={"Rising Temperatures::You know him!"}/>
                  </li>
                  <li>
                    <EffectLink sector={"agriculture"}
                                effect={"Rising Temperatures::Then the droid does belong to you."}/>
                  </li>
                </ul>
              },
              { name: "Sea Level Rise",
                id: 'impacts_sea_level_rise',
                content: <ul>
                  <li>
                    <EffectLink sector={"agriculture"}
                                effect={"Sea Level Rise::Where am I? I must have taken a bad step..."}/>
                  </li>
                  <li>
                    <EffectLink sector={"agriculture"}
                                effect={"Sea Level Rise::No, you're not. What kind of talk is that?"}/>
                  </li>
                  <li>
                    <EffectLink sector={"agriculture"}
                                effect={"Sea Level Rise::Quickly, son... they're on the move."}/>
                  </li>
                </ul>
              }
            ]
          },
          {title: "Actions",
           id: "actions",
           content: null,
           subsections: [
              { name: "Planning",
                id: 'actions_planning',
                content: <ul>
                    <ActionLink q="vulnerability assessment">
                      Yes, I was once a Jedi Knight the same as your father.
                    </ActionLink>
                    <ActionLink q="emergency plan">
                      I wish I'd known him.
                    </ActionLink>
                    <ActionLink q="energy audit">
                      Ben hands Luke the saber.
                    </ActionLink>
                    <li> Luke pushes a button on the handle. A long beam shoots out about four feet and flickers there. The light plays across the ceiling.</li>
                    <li>An elegant weapon for a more civilized time. For over a thousand generations 
                      the Jedi Knights were the guardians of peace and justice in the Old 
                      Republic. Before the dark times, before the Empire.
                    </li>
                </ul>,
              },
              { name: "Management Practices",
                id: 'actions_management_practices',
                content: <ul>
                  <ActionLink q="soil land conservation">
                    Now, let's see if we can't figure out what you are, my little friend. And where you come from.
                  </ActionLink>
                  <ActionLink q='best management practices'>
                    Luke stops his work as the lovely girl's image flickers before his eyes.
                  </ActionLink>
                  <ActionLink q='crop diversification'>
                    You must learn the ways of the Force if you're to come with me to Alderaan.
                  </ActionLink>
                  <ActionLink q='pest management'>
                    I can't get involved! I've got work 
                    to do! It's not that I like the 
                    Empire. I hate it! But there's nothing 
                    I can do about it right now. It's 
                    such a long way from here.
                  </ActionLink>
                  <ActionLink q='pest management'>
                    Look, I can take you as far as 
                    Anchorhead. You can get a transport 
                    there to Mos Eisley or wherever you're 
                    going.
                  </ActionLink>
                  <ActionLink q='runoff control'>
                    An Imperial Stardestroyer heads toward the evil planet-like battle station: the Death Star!
                  </ActionLink>
                  <ActionLink q='water conservation'>
                    The bitter Admiral Motti twists nervously in his chair.
                  </ActionLink>
                  <ActionLink q='energy efficiency use'>
                    That's impossible! How will the Emperor maintain control without the bureaucracy?
                  </ActionLink>
                  <ActionLink q='GHG reductions manure management'>
                    The plans you refer to will soon be back in our hands.
                  </ActionLink>
                  <ActionLink q='temperature changes planting dates'>
                    Suddenly Motti chokes and starts to turn blue under Vader's spell.
                  </ActionLink>
                  <ActionLink q='carbon sequestration'>
                    Enough of this! Vader, release him!
                  </ActionLink>
                </ul>,
              },
              { name: "Technology",
                id: 'actions_technology',
                content: <ul>
                  <ActionLink q="irrigation water conservation">
                    Ben is crouching in the sand studying the tracks.
                  </ActionLink>
                  <ActionLink q="livestock cooling">
                    These are the same Jawas that sold us Artoo and Threepio.
                  </ActionLink>
                  <ActionLink q="renewable energy">
                    Why would Imperial troops want to slaughter Jawas?
                  </ActionLink>
               </ul>
              },
              { name: "Policies / Laws",
                id: 'actions_policies_and_laws',
                content: <ul>
                  <ActionLink q="agriculture laws policy pesticide">
                    Wait, Luke! It's too dangerous.
                  </ActionLink>
                  <ActionLink q="regulations">
                    Luke races across the wasteland in his battered Landspeeder.
                  </ActionLink>
               </ul>
              },
              { name: "Research / Monitoring",
                id: 'actions_research_monitoring',
                content:
                <ul>
                  <li>EXT. SPACE
                    <ul>
                      <ActionLink q="pesticide risk management">
                        And, now Your Highness, we will discuss the location of your hidden Rebel base.
                      </ActionLink>
                      <ActionLink q="crop adaptation">
                        Mos Eisley Spaceport. You will never find a more wretched hive of scum and villainy. We must be cautious.
                      </ActionLink>
                      <ActionLink q='conservation practices'>
                        About three or four seasons.
                      </ActionLink>
                    </ul>
                  </li>
                  <ActionLink q='pesticide tracking'>
                    Let me see your identification.
                  </ActionLink>
                  <ActionLink q='food borne illness'>
                     We don't need to see his identification.
                  </ActionLink>
                  <ActionLink q='education environmental justice sensitive population health and safety'>
                    As Luke gets out of the speeder he tries to shoo the Jawa away.
                  </ActionLink>
                </ul>
              },
              { name: "Funding",
                id: 'actions_funding',
                content:
                <ul>
                  <ActionLink q='funding crop transition irrigation'>
                   Go on, go on. I can't understand how we got by those troopers. I thought we were dead.
                  </ActionLink>
                  <ActionLink q='funding energy'>
                    Do you really think we're going to find a pilot here that'll take us to Alderaan?
                  </ActionLink>
                  <ActionLink q='funding food subsidies'>
                    Well, most of the best freighter pilots can be found here. Only watch your step. This place can be a little rough.
                  </ActionLink>
                  <ActionLink q='funding small-scale'>
                    Your droids. They'll have to wait outside. We don't want them here.
                  </ActionLink>
                  <li>
                    <Link to="">
                      We don't serve their kind here!
                    </Link>
                  </li>
                  <ActionLink q='funding disaster assistance insurance'>
                    Listen, why don't you wait out by the speeder. We don't want any trouble.
                  </ActionLink>
                  <ActionLink q='funding conservation management'>
                    Threepio and his stubby partner go outside and most of the creatures at the bar go back to their drinks.
                  </ActionLink>
                </ul>
              },
            ]
          },
          {title: "Looking for Help?",
           id: "help",
           content: <div>Ben is standing next to Chewbacca, an eight-foot-tall savage-
               looking creature resembling a huge grey bushbaby monkey with 
               fierce baboon-like fangs. His large blue eyes dominate a fur-
               covered face and soften his otherwise awesome appearance.  
               Over his matted, furry body he wears two chrome bandoliers, 
               and little else. He is a two-hundred-year-old Wookiee and a 
               sight to behold.
            <br/>
            <br/>

            <ul>
              <li>
                <Link to=''>  He doesn't like you. </Link>
              </li>
              <li>
                <Link to=''> I'll be careful than </Link>
              </li>
              <li>
                <Link to=''>
                  No blasters! No blaster!
                </Link>
              </li>
              <li>
                <Link to=''>
                  I don't like the look of this
                </Link>
              </li>
              <li>
                <Link to=''>
                  Han Solo. I'm captain of the Millennium Falcon. Chewie here tells me you're looking for passage to the Alderaan system.
                </Link>
              </li>
              <li>
                <Link to=''>
                  Fast ship? You've never heard of the Millennium Falcon?
                </Link>
              </li>
              <li>
                <Link to=''>
                  HAN
                </Link>
              </li>
            </ul>
           </div>,
           subsections: []
          },

        ]}>
        Ben and Luke leave the speeder lot and walk down the dusty 
        alleyway past a small robot herding a bunch of anteater-like 
        creatures. Luke turns and gives one last forlorn look at his 
        faithful speeder as he rounds a corner. A darkly clad creature 
        moves out of the shadows as they pass and watches them as 
        they disappear down another alley.

        <br/>
        <br/>
        Han, Han! If only you hadn't had to 
        dump that shipment of spice... you 
        understand I just can't make an 
        exception. Where would I be if every 
        pilot who smuggled for me dumped 
        their shipment at the first sign of 
        an Imperial starship? It's not good 
        business.
        </SectorDetailLayout>
    );
  }
}

export default AgricultureSectorPage;
