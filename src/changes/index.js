import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MapLink from '../utils/map_link';
import DefaultLayout from './../layouts/default';
import DatagrapherLink from '../utils/datagrapher_link';
import Subsection from '../layouts/subsection';

import photo1 from '../images/changes/changes_combo.jpg'
import rising_temperatures_img from '../images/home_page/carousel/rising_temperatures.jpg';
import precipitation_changes_img from '../images/home_page/carousel/precipitation_changes.jpg';
import extreme_weather_img from '../images/home_page/carousel/extreme_weather.jpg';
import sea_level_rise_img from '../images/home_page/carousel/sea_level_rise.jpg';

const ViewMap = (props) =>
  <MapLink className='btn btn-block btn-primary' >
    View Map
  </MapLink>;

const ViewDatagrapher = (props) =>
  <DatagrapherLink className='btn btn-block btn-primary'>
    View Datagrapher
  </DatagrapherLink>;

const SubNav = (props) => <ul>
  {props.subsections.map((subsection, indx) => {
    return <li key={indx}>
      <Link to={"#"+subsection.id}>{subsection.name}</Link>
    </li>
  })}
</ul>


class ChangesPage extends Component {
  render() {
    let page_image = photo1;
    let subsections = [
      {id: "rising_temperatures",
        name:"Rising Temperatures",
        image: rising_temperatures_img,
        href:"/changes/rising-temperatures",
       },
      {id: "changes_in_precipitation",
        name:"Changes in Precipitation",
        image: precipitation_changes_img,
        href:"/changes/changes-in-precipitation",
       },
      {id: "extreme_weather",
        image: extreme_weather_img,
        name:"Extreme Weather",
        href:"/changes/extreme-weather"
       },
      {id: "sea_level_rise",
        name:"Sea Level Rise",
        image: sea_level_rise_img,
        href:"/changes/sea-level-rise"
       },
    ];

    return (
      <DefaultLayout
        className='sector-index'
        nav_actions= {[<ViewMap key={0}/> ,
                       <ViewDatagrapher key={1} />]}
        subnav={<SubNav subsections={subsections}/>}>
        <h1>Identify Changes</h1>
        <img alt='sectors example' src={page_image} className='col-12 col-md-5 float-right'/>

        <p>
            The awesome, seven-foot-tall Dark Lord of the Sith makes his way into the blinding light of the main passageway. This is Darth Vader, right hand of the Emperor.
        </p>


        {subsections.map((subsection, indx) => {
          return <Subsection key={indx} {...subsection}
                  content={ <div>
                        <Link to={subsection.href} className='btn btn-secondary btn-block'>View {subsection.name}</Link>
                      </div>}
                  />
        })}

      </DefaultLayout>
    );
  }
}

export default ChangesPage;
