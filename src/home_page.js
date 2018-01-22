import React, { Component } from 'react';
import Header from './header';
import ImageCarousel from './home_page/image_carousel';
import { Link } from 'react-router-dom';
//import SearchBar from './search_bar';
import ResourceBlocks from './home_page/resource_blocks';
import Sectors from './home_page/sectors';
import Tiles from './home_page/tiles';
import Solutions from './home_page/solutions';
import Actions from './home_page/actions';
import SectionHeader from './home_page/section_header';
import Footer from './footer';
import SearchBar from './search_bar';
import SectorsAll from './sectors/all';
import './home_page.css';

import climate_change_data_img from './images/home_page/carousel/climate_change_data.png';
import carousel2 from './images/home_page/carousel/2.jpg';
import carousel3 from './images/home_page/carousel/3.jpg';
import carousel4 from './images/home_page/carousel/4.jpg';
import maps_block_img from './images/home_page/blocks/maps.png';
import coastal_zones_img from './images/home_page/coastal_zones.jpg';
import data_block_img from './images/home_page/blocks/data.png';
import documents_block_img from './images/home_page/blocks/documents.png';
import heat_wave_img from './images/home_page/heatwave.jpg';
import downpour_img from './images/home_page/downpours.jpg';
import extreme_weather_img from './images/home_page/extreme_weather.jpg';
import primary_story_img from './images/home_page/primary_story.jpg';


import planning_img from './images/home_page/blocks/planning.jpg';
import outreach_img from './images/home_page/blocks/outreach.png';
import take_action_implementation_img from './images/home_page/blocks/take_action_implementation.png';

class Homepage extends Component {
  render() {

    let blocks = [
       {title: 'Maps',
        id: 'maps',
        text: ' Use maps to identify climate change impacts and assess vulnerabilities in New York State. ',
        image: maps_block_img,
        href: "/data/maps",
        },
       {title: 'Data',
        text: ' Explore New York State climate information through interactive charts and find a broad range of datasets and data products. ',
        id: "data",
        image: data_block_img,
        href: "/data/data",
        },
       {title: 'Documents',
        text: ' Discover reports, articles, plans, and other climate-related resources. ',
        id: 'documents',
        image: documents_block_img,
        href: `/data/documents`
       }
     ];

     let tiles = [
       {title: 'Coastal Flooding',
        id: 'coastal',
        text: ' due to sea level risk and storm surge will increasingly put lives and property at risk. Health, water quality, energy, infrastructure, and coastal ecosystems are all affected.  ',
        image: coastal_zones_img,
        href: "/highlights/problems#flooding",
        image_credit: "Photo: Metropolitan Transportation Authority / Patrick Cashin"
        },
       {title: 'Heat Waves',
        text: '  will become more frequent and intense, increasing heat-related illness and death and posing new challenges to the energy system, air quality, and agriculture.  ',
        id: "heatwaves",
        image: heat_wave_img,
        href: "/highlights/problems#heatWaves",
        image_credit: "Photo: Tom Kaminski / WCBS 880"
        },
       {title: 'Heavy Downpours',
        text: ' are increasing and are projected to increase further. These can lead to flooding and related impacts on water quality, infrastructure, and agriculture. ',
        id: 'downpours',
        image: downpour_img,
        href: "/highlights/problems#downpours",
        image_credit: ""
       }
       ,
       {title: 'Extreme Weather',
        text: ' can have a big impact in a short time. Climate models predict significant changes in the frequency and intensity of some extreme weather events over the coming decades.  ',
        id: 'weather',
        image: extreme_weather_img,
        href: "/highlights/problems#weather",
        image_credit: "Photo: Melinda Stoldt"
       }
     ];

     let sectors = SectorsAll.sorted;

     let take_actions = [
       { title: 'Planning',
         text: 'Leia is marched away down the hallway and into the smoldering hole blasted in the side of the ship. An Imperial Commander turns to Vader.',
         image: planning_img,
         image_credit: "",
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
         image_credit: "",
         href: '/actions/outreach-education',
        }
     ];

     let squares = [
        { squareLink: "/highlights/actions#rain",
          squareText: "Preparing for heavy downpours: Save the Rain"
         },
         { squareLink: "/highlights/actions#renewable",
          squareText: "Promoting renewable energy: Solar Tompkins"
         },
         { squareLink: "/highlights/actions#stormwater",
          squareText: "Managing stormwater along the coast: the Staten Island Bluebelt"
         },
         { squareLink: "/highlights/actions#resilience",
          squareText: "Building for resilience along New York City's coast"
         }
      ];

    return (
      <div className="home-page">
        <Header hide_subnav={true} anchors={true}/>
        <div className='header-search'>
        <div className='tag-line'>
         <div className='container'>
          <h4>Providing climate change data and information relevant to New York State to support scientifically sound decision making.
             <Link to='/about'> More <span className='fa fa-angle-double-right'></span> </Link>
          </h4>
         </div>
        </div>
        <span className="credit">
          <a href="https://www.flickr.com/photos/brbirke/8136033826/in/photostream/" class="tip" title="" target="_blank" data-original-title="Cropped from original">Photo: Brian Birke</a>, 
          <a target="_blank" href="https://creativecommons.org/licenses/by/2.0/">CC</a> 
        </span>
        <div className="search-container container">
        
          <div className="search-form">
            <p className="text-right">
              <a href="/catalog">Browse Resources</a>
            </p>
            <SearchBar className='hide-subnav' size='sm'/>
          </div>

        </div>
        </div>
        <div className="container-fluid">
          <ResourceBlocks blocks={blocks}/>

          <Sectors sectors={sectors} />

          <Tiles tiles={tiles} />

          <Solutions />

          <Actions squares={squares} primaryStory={primary_story_img} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
