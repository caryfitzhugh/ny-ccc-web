import React, { Component } from 'react';
import Header from './header';
import { Link } from 'react-router-dom';
//import SearchBar from './search_bar';
import ResourceBlocks from './home_page/resource_blocks';
import Sectors from './home_page/sectors';
import Tiles from './home_page/tiles';
import Solutions from './home_page/solutions';
import Actions from './home_page/actions';
import Footer from './footer';
import SearchBar from './search_bar';
import SectorsAll from './sectors/all';
import MailchimpSignupForm from './mailchimp_signup_form';
import './home_page.css';

import maps_block_img from './images/home_page/blocks/maps.png';
import coastal_zones_img from './images/home_page/coastal_zones.jpg';
import data_block_img from './images/home_page/blocks/data.png';
import documents_block_img from './images/home_page/blocks/documents.png';
import heat_wave_img from './images/home_page/heatwave.jpg';
import downpour_img from './images/home_page/downpours.jpg';
import extreme_weather_img from './images/home_page/extreme_weather.jpg';
import primary_story_img from './images/home_page/primary_story.jpg';

class Homepage extends Component {
  render() {

    let blocks = [
       {title: 'Maps',
        id: 'maps',
        text: ' Use maps to identify climate change impacts and assess vulnerabilities in New York State. ',
        imageText: ' Climate Change Maps ',
        image: maps_block_img,
        href: "/highlights/maps",
        },
       {title: 'Data',
        text: ' Explore New York State climate information through interactive charts and find a broad range of datasets and data products. ',
        imageText: ' Climate Information Charts ',
        id: "data",
        image: data_block_img,
        href: "/highlights/data_products",
        },
       {title: 'Documents',
        text: ' Discover reports, articles, plans, and other climate-related resources. ',
        imageText: ' Climate Change Documents ',
        id: 'documents',
        image: documents_block_img,
        href: `/highlights/documents`
       }
     ];

     let tiles = [
       {title: 'Coastal Flooding',
        id: 'coastal',
        text: ' due to sea level risk and storm surge will increasingly put lives and property at risk. Health, water quality, energy, infrastructure, and coastal ecosystems are all affected.  ',
        alt: ' Urban Flooding ',
        image: coastal_zones_img,
        href: "/highlights/problems#flooding",
        image_credit: "Metropolitan Transportation Authority / Patrick Cashin"
        },
       {title: 'Heat Waves',
        text: '  will become more frequent and intense, increasing heat-related illness and death and posing new challenges to the energy system, air quality, and agriculture.  ',
        alt: ' Heat Wave Over City ',
        id: "heatwaves",
        image: heat_wave_img,
        href: "/highlights/problems#heatWaves",
        image_credit: "Tom Kaminski / WCBS 880"
        },
       {title: 'Heavy Downpours',
        text: ' are increasing and are projected to increase further. These can lead to flooding and related impacts on water quality, infrastructure, and agriculture. ',
        alt: ' Heavy Rain ',
        id: 'downpours',
        image: downpour_img,
        href: "/highlights/problems#downpours",
        image_credit: ""
       }
       ,
       {title: 'Extreme Weather',
        text: ' can have a big impact in a short time. Climate models predict significant changes in the frequency and intensity of some extreme weather events over the coming decades.  ',
        alt: ' Snow Bank ',
        id: 'weather',
        image: extreme_weather_img,
        href: "/highlights/problems#weather",
        image_credit: "Melinda Stoldt"
       }
     ];

     let sectors = SectorsAll.sorted;

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
        <div style={{textAlign: 'center', background: '#880000'}}  className='tag-line'>
         <div className='container'>
          <p >This website will be shut down August 18, 2023</p>
         </div>
        </div>
        <span className="credit">
          <a href="https://www.flickr.com/photos/brbirke/8136033826/in/photostream/" className="font-weight-bold" title="" rel="noopener noreferrer"
             target="_blank" data-original-title="Cropped from original">Photo: Brian Birke</a>,
          <a target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by/2.0/">CC</a>
        </span>
        <MailchimpSignupForm backgrounded={true}/>
        <div className="search-container container">
          <div className="search-form">
            <p className="text-right">
              <a href="/search">Browse Resources</a>
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
