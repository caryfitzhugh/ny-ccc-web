import React, { Component } from 'react';
import Header from './header';
import ImageCarousel from './home_page/image_carousel';
import SearchBar from './home_page/search_bar';
import ResourceBlocks from './home_page/resource_blocks';
import Sectors from './home_page/sectors';
import SectionHeader from './home_page/section_header';
import Footer from './footer';
import './home_page.css';

class Homepage extends Component {
  render() {
    let slides = [
      {src: "http://placekitten.com/1024/768",
          label: "Test Kitten",
          text: "Lorem ipsum loreum mupsum, lorem chewbacca applesauce maybe? When the life and times are here. We need to grow the state budget for more waffles.",
          link: "/test-kitten"},
      {src: "http://placekitten.com/1024/769",
          label: "Test Kitten #2",
          text: "Lorem ipsum loreum mupsum, lorem chewbacca applesauce maybe? When the life and times are here. We need to grow the state budget for more waffles.",
          link: "/test-kitten-2"},
      {src: "http://placekitten.com/1024/770",
          label: "Test Kitten #3",
          text: "Lorem ipsum loreum mupsum, lorem chewbacca applesauce maybe? When the life and times are here. We need to grow the state budget for more waffles.",
          link: "/test-kitten-3"},
    ];

     let blocks = [
       {title: 'Maps',
        text: 'Lorem ipsullium magnum upous dilbert',
        image:'http://lorempixel.com/500/500/city'
        },
       {title: 'Data',
        text: 'Lorem ipsullium magnum upous dilbert',
        image:'http://placekitten.com/g/500/500'
        },
        {title: 'Documents',
         text: 'Lorem abla nottingham forest vs chelsea is a cracker',
         image: 'http://lorempixel.com/500/500/animals',
        }
     ];
    let sectors = [
      {name: "Agriculture / Forestry",
       icon: (<span className='fa fa-leaf'></span>),
       href: "/sectors/agriculture-forestry"},
      {name: "Buildings",
       icon: (<span className='fa fa-building'></span>),
       href: "/sectors/buildings"},
      {name: "Economy",
       icon: (<span className='fa fa-money'></span>),
       href: "/sectors/economy"},
      {name: "Education",
       icon: (<span className='fa fa-graduation-cap'></span>),
       href: "/sectors/education"},
      {name: "Energy",
       icon: (<span className='fa fa-lightbulb-o'></span>),
       href: "/sectors/energy"},
      {name: "Coastal Zones",
       icon: (<span className='fa fa-question-circle'></span>),
       href: "/sectors/coastal-zones"},
      {name: "Local Government",
       icon: (<span className='fa fa-gavel'></span>),
       href: "/sectors/local-government"},
      {name: "Natural Resources / Habitats",
       icon: (<span className='fa fa-tree'></span>),
       href: "/sectors/natural-resources-habitats"},
      {name: "Public Health",
       icon: (<span className='fa fa-medkit'></span>),
       href: "/sectors/public-health"},
      {name: "Public Safety / Emergency Response",
       icon: (<span className='fa fa-life-ring'></span>),
       href: "/sectors/public-safety-emergency-response"},
      {name: "Recreation",
       icon: (<span className='fa fa-futbol-o'></span>),
       href: "/sectors/recreation"},
      {name: "Transportation",
       icon: (<span className='fa fa-truck'></span>),
       href: "/sectors/transportation"},
      {name: "Water Resources",
       icon: (<span className='fa fa-tint'></span>),
       href: "/sectors/water-resources"},
    ];

    let changes= [
      {src: "http://lorempixel.com/1024/768/nature/1",
          label: "Flooding",
          text: "This is a big problem",
          link: "/test-kitten"},
      {src: "http://lorempixel.com/1024/768/nature/2",
          label: "Extreme Weather",
          text: "This is a really big problem",
          link: "/test-kitten-2"},
      {src: "http://lorempixel.com/1024/768/nature/3",
          label: "Heat-Waves",
          text: "This is an extremely big problem",
          link: "/test-kitten-3"},
      {src: "http://lorempixel.com/1024/768/nature/5",
          label: "Drought",
          text: "This is an really, extremely big problem",
          link: "/test-kitten-3"},
      {src: "http://lorempixel.com/1024/768/nature/6",
          label: "Seasonal Changes",
          text: "This is not really an issue. I like Winter, Spring, Summer, and Fall. Hard pass on SoCal.",
          link: "/test-kitten-3"},
    ];

     let take_actions = [
       {title: 'GHG Reduction Planning',
        text: 'Lorem ipsullium magnum upous dilbert',
         image: 'http://lorempixel.com/500/500/abstract',
        },
       {title: 'Hazard Mitigation',
        text: 'Lorem ipsullium magnum upous dilbert',
         image: 'http://lorempixel.com/500/500/people',
        },
        {title: 'Budgeting for Climate Change',
         text: 'Lorem abla nottingham forest vs chelsea is a cracker',
         image: 'http://lorempixel.com/500/500/transport',
        },
        {title: 'Town Planning',
         text: 'Lorem abla espanol?',
         image: 'http://lorempixel.com/500/500/business'
        }
     ];
    return (
      <div className="home-page">
        <Header />
        <ImageCarousel className='welcome-carousel' slides={slides}/>
        <SearchBar />

        <ResourceBlocks blocks={blocks}/>

        <SectionHeader anchor_id='explore_sectors' text="Explore Sectors" />
        <Sectors sectors={sectors} />

        <SectionHeader anchor_id='identify_changes' text="Identify Changes" />
        <ImageCarousel slides={changes} />

        <SectionHeader anchor_id='take_action' text="Take Action" />
        <ResourceBlocks className='take-actions' blocks={take_actions} />

        <Footer />
      </div>
    );
  }
}

export default Homepage;
