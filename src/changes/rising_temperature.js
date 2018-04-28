import React, { Component } from 'react';
import ChangesLayout from './layout';
import rising_temperatures_img from '../images/home_page/carousel/rising_temperatures.jpg';
import SearchLink from '../utils/search_link';
import MapLink from '../utils/map_link';
import DatagrapherLink from '../utils/datagrapher_link';
import titleize from '../utils/titleize';

const EffectLink = (props) => {
  return <li>
    <SearchLink params={{effects: ["ma::rising temperature::"+props.effect]}}>
      {titleize(props.effect)}
    </SearchLink>
  </li>;
};

class RisingTemperatureChangesPage extends Component {
  render() {
    let showcased_resources = null;
    // title: "Highlighted Resources",
    // collection_name: "MA/agriculture/highlighted_resources",

    return (<ChangesLayout
        title="Rising Temperatures"
        active_layers="ma_historical_days_above_temp,ma_historical_days_below_temp,ma_historical_degree_days,ma_historical_temperature"
        image={rising_temperatures_img}
        showcased_resources={showcased_resources}
        datagrapher_file='Temp/state/maxt/ANN/MA/'
        sections={[
          {title: "Historic and Projected Changes in Massachusetts",
           id: "changes",
           content: <div>
            <p>A beautiful young girl (about sixteen years old) stands in front of Artoo.</p>
            
           </div>,
          subsections: []
          },
          {title: <SearchLink params={{query:"rising temperatures public health"}}>Heat and Public Health</SearchLink>,
           id: "heat_and_public_health",
           content: <div>
            <p>Surreal and out of place, dreamlike and half hidden in the smoke, she finishes adjusting something on Artoo's computer face, then watches as the little robot joins his companion. </p>

            <h6>At last! Where have you been?</h6>
            <table className='table chart t-c' style={{textAlign: "center"}}>
                <thead>
                  <tr className='blue'>
                    <th colSpan='2'> <h5>  THREEPIO</h5> </th>
                    <th> <h4>They're heading in this direction.</h4>What are we going to do?</th>
                  </tr>
                </thead>
              
            </table>

            <p> A familiar clanking sound attacks Threepio's attention and he spots little Artoo at the end of the hallway in a smoke-filled alcove.</p>

           </div>,
          subsections: []
          },
          {title: "More Impacts from Rising Temperatures",
           id: "more_impacts_from_rising_temperatures",
           content: <div>
           </div>,
            subsections: [
              {name: <SearchLink params={{query:"rising temperatures agricultural"}}>Wait a minute, where are you going? </SearchLink>,
              id: "ag_and_livestock",
              content: <div>
                <p> Artoo responds with electronic beeps.</p>
              </div>
              },
          ]
          },
        ]} >

        <p> Threepio stands in a hallway, somewhat bewildered. Artoo is nowhere in sight. The pitiful screams of the doomed Rebel soldiers can be heard in the distance.</p>

        </ChangesLayout>
    );
  }
}

export default RisingTemperatureChangesPage;
