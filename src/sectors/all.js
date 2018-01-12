import React, { } from 'react';
import coastal_zones_icon from '../images/coastal_zones_icon.svg';
import natural_resources_icon from '../images/natural_resources_icon.svg';
import infrastructure_icon from '../images/infrastructure_icon.svg';
import recreation_icon from '../images/recreation_icon.svg';
import public_safety_icon from '../images/public_safety_icon.svg';
import {sortBy}  from 'lodash';
import Isvg from 'react-inlinesvg';


const sectors = {
  'agriculture': {name: "Agriculture", icon: (<span className='fa fa-leaf'></span>), href: "/sectors/agriculture"},
  'buildings': {name: "Buildings", icon: (<span className='fa fa-university'></span>), href: "/sectors/buildings"},
  'coastal_zones': {name: "Coastal Zones", icon: (<span className='fa fa-anchor'></span>), href: "/sectors/coastal-zones"},
  'ecosystems': {name: "Ecosystems", icon: (<span className='fa fa-tree'></span>), href: "/sectors/ecosystems"},
  'energy': {name: "Energy", icon: (<span className='fa fa-lightbulb-o'></span>), href: "/sectors/energy"},
  'public_health': {name: "Public Health", icon: (<span className='fa fa-medkit'></span>), href: "/sectors/public-health"},
  'telecommunications': {name: "Telecommunications", icon: (<span className='fa fa-mobile-phone'></span>), href: "/sectors/telecommuncations"},
  'transportation': {name: "Transportation", icon: (<span className='fa fa-truck'></span>), href: "/sectors/transportation"},
  'water_resources': {name: "Water Resources", icon: (<span className='fa fa-tint'></span>), href: "/sectors/water-resources"},
};
const sorted = sortBy(Object.values(sectors), (sec) => sec.title);
const array = sortBy(Object.keys(sectors).map((sec_id) => {
                return [sec_id, sectors[sec_id]]
              }), (sec) => sec[0]);

export default {sectors, sorted, array};
