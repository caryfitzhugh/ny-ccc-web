import React, { } from 'react';
import {sortBy}  from 'lodash';


const sectors = {
  'agriculture': {name: "Agriculture", icon: (<span className='fa fa-leaf'></span>), href: "/sectors/agriculture"},
  'buildings': {name: "Buildings", icon: (<span className='fa fa-university'></span>), href: "/sectors/buildings"},
  'coastal_zones': {name: "Coastal Zones", icon: (<span className='fa fa-anchor'></span>), href: "/sectors/coastal-zones"},
  'ecosystems': {name: "Ecosystems", icon: (<span className='fa fa-tree'></span>), href: "/sectors/ecosystems"},
  'energy': {name: "Energy", icon: (<span className='fa fa-lightbulb-o'></span>), href: "/sectors/energy"},
  'public_health': {name: "Public Health", icon: (<span className='fa fa-medkit'></span>), href: "/sectors/public-health"},
  'telecommunications': {name: "Telecommunications", icon: (<span className='fa fa-mobile-phone'></span>), href: "/sectors/telecommunications"},
  'water_resources': {name: "Water Resources", icon: (<span className='fa fa-tint'></span>), href: "/sectors/water-resources"},
};

const sorted = sortBy(Object.values(sectors), (sec) => sec.title);
const array = sortBy(Object.keys(sectors).map((sec_id) => {
                return [sec_id, sectors[sec_id]]
              }), (sec) => sec[0]);

export default {sectors, sorted, array};
