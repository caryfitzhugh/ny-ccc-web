import React, { Component } from 'react';
import Header from './header';
import ImageCarousel from './home_page/image_carousel';
import { Link } from 'react-router-dom';
//import SearchBar from './search_bar';
import ResourceBlocks from './home_page/resource_blocks';
import Sectors from './home_page/sectors';
import SectionHeader from './home_page/section_header';
import Footer from './footer';
import SectorsAll from './sectors/all';
import './home_page.css';

import climate_change_data_img from './images/home_page/carousel/climate_change_data.png';
import carousel2 from './images/home_page/carousel/2.jpg';
import carousel3 from './images/home_page/carousel/3.jpg';
import carousel4 from './images/home_page/carousel/4.jpg';
import maps_block_img from './images/home_page/blocks/maps.png';
import data_block_img from './images/home_page/blocks/data.png';
import documents_block_img from './images/home_page/blocks/documents.png';

import rising_temperatures_img from './images/home_page/carousel/rising_temperatures.jpg';
import precipitation_changes_img from './images/home_page/carousel/precipitation_changes.jpg';
import extreme_weather_img from './images/home_page/carousel/extreme_weather.jpg';
import sea_level_rise_img from './images/home_page/carousel/sea_level_rise.jpg';

import planning_img from './images/home_page/blocks/planning.jpg';
import outreach_img from './images/home_page/blocks/outreach.png';
import take_action_implementation_img from './images/home_page/blocks/take_action_implementation.png';

class Homepage extends Component {
  render() {
    let slides = [
      {   src: climate_change_data_img,
          className: 'climate-change-data-slide',
          label: "Climate Change Data",
          text: " Everyone laughs. The dazzling spectacle of his dashing friend is almost too much for Luke, but suddenly he snaps out of it.",
          href: "/data/data"},
      {   src: carousel2,
          image_credit: "MA Division of Ecological Restoration",
          className: 'take-action-slide',
          label: "Take Action",
          text: " Biggs takes the binoculars from Luke as the others strain to see something with the naked eye. Through the binoculars Biggs sees two small silver specks.",
          href: "/actions"},
      {   src: carousel3,
          //image_credit: "National Wildlife Federation",
          label: "Climate Planning",
          text: " A new explosion, this time very close, sends dust and debris through the narrow subhallway. Flames lick at Threepio and, after a flurry of electronic swearing from Artoo, the lanky robot jumps into the lifepod.",
          href: "/actions/planning"},
      {   src: carousel4,
          className: 'mvp-slide',
          label: "Municipal Vulnerability Preparedness",
          text: " Artoo stops before the small hatch of an emergency lifepod. He snaps the seal on the main latch and a red warning light begins to flash. The stubby astro-robot works his way into the cramped four-man pod.",
          href: "http://www.mass.gov/eea/air-water-climate-change/climate-change/massachusetts-global-warming-solutions-act/municipal-vulnerability-preparedness-program.html"},
    ];

    let blocks = [
       {title: 'Maps',
        id: 'maps',
        text: ' Artoo counters with an angry rebuttal as the battle rages around the two hapless robots. ',
        image: maps_block_img,
        image_credit:"National Weather Service",
        href: "/data/maps",
        },
       {title: 'Data',
        text: ' The little R2 unit makes a series of electronic sounds that only another robot could understand. ',
        id: "data",
        image: data_block_img,
        href: "/data/data",
        },
       {title: 'Documents',
        text: ' In a few minutes the entire passageway is ablaze with laserfire.',
        id: 'documents',
        image: documents_block_img,
        href: `/data/documents`
       }
     ];

     let sectors = SectorsAll.sorted;

     let changes= [
      {src: rising_temperatures_img,
        image_credit: "",
          label: "Rising Temperatures",
          text: "A death-white wasteland stretches from horizon to horizon. The tremendous heat of two huge twin suns settle on a lone figure, Luke Skywalker, a farm boy with heroic aspirations who looks much younger than his eighteen years ",
          href: "/changes/rising-temperatures"},

      {src: precipitation_changes_img,
        image_credit: "",
          label: "Changes in Precipitation",
          text: " The robot scoots around in a tight circle, stops short, and smoke begins to pour out of every joint. Luke throws his arms up in disgust.",
          href: "/changes/changes-in-precipitation"},

      {src: extreme_weather_img,
        image_credit: "",
          label: "Extreme Weather",
          text: "Climate models predict changes in the frequency and intensity of some extreme weather events, such as nor’easters over the coming decades.",
          href: "/changes/extreme-weather"},

      {src: sea_level_rise_img,
        image_credit: "",
          label: "Sea Level Rise",
          className: "slr-image",
          text: " Threepio stands in a hallway, somewhat bewildered. Artoo is nowhere in sight. The pitiful screams of the doomed Rebel soldiers can be heard in the distance.",
          href: "/changes/sea-level-rise"},
    ];

     let take_actions = [
       { title: 'Planning',
         text: 'Leia is marched away down the hallway and into the smoldering hole blasted in the side of the ship. An Imperial Commander turns to Vader.',
         image: planning_img,
         image_credit: "National Wildlife Federation",
         href: '/actions/planning',
        },
       {title: 'Implementation',
        text: 'I don\'t know what you\'re talking about. I\'m a member of the Imperial Senate on a diplomatic mission to Alderaan... ',
         image: take_action_implementation_img,
         image_credit: "MA Division of Ecological Restoration",
         href: '/actions/implementation',
        },
        {title: 'Outreach / Education',
         text: 'Luke agrees, although it\'s obvious he isn\'t sure why. The group stumbles back into the power station, grumbling about Luke\'s ineptitude.',
         image:outreach_img,
         image_credit: "MA Division of Ecological Restoration",
         href: '/actions/outreach-education',
        }
     ];

    return (
      <div className="home-page">
        <Header hide_subnav={false} anchors={true}/>
        <div className='tag-line'>
         <span>A long time ago, in a galaxy far, far, away...
             <Link to='/about'> More <span className='fa fa-angle-double-right'></span> </Link>
             </span>
        </div>
        <ImageCarousel className='welcome-carousel' slides={slides}/>

        <ResourceBlocks blocks={blocks}/>

        <SectionHeader href="/sectors" anchor_id='explore_sectors' text="Explore Sectors" />
        <Sectors sectors={sectors} />

        <SectionHeader href="/changes" anchor_id='identify_changes' text="Identify Changes" />
        <ImageCarousel slides={changes} />

        <SectionHeader href="/actions" anchor_id='take_action' text="Take Action" />
        <ResourceBlocks className='take-actions' blocks={take_actions} />

        <Footer />
      </div>
    );
  }
}

export default Homepage;
