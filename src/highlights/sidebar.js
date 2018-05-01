import React from 'react';
import Collection from '../layouts/collection';
import datagrapher_image from "../images/highlights/datagrapher.jpg";
import map_image from "../images/highlights/map.png";
import ccs_flood_exposure from "../images/highlights/ccs_flood_exposure.jpg";
import climate_data_snapshots from "../images/highlights/climate_data_snapshots.jpg";


import './sidebar.css';
const sidebar_links = [
  {  href: "/datagrapher",
     title: "Climate Data Grapher",
     image: datagrapher_image },
  {  href: "/map",
     title: "Interactive Map and GIS Viewer",
     image: map_image },
  {  href: "/resources/resources::1529",
     title: "Coastal County Snapshots - Flood Exposure",
     image: ccs_flood_exposure},
  {  href: "/resources/resources::1512",
     title: "Climate Data Snapshots",
     image: climate_data_snapshots}
];

const Sidebar = (props) => (
  <div className="col-sm-3 sidebar hidden-xs">
    <div>
      <ul>
       { (props.anchors).map((anchor, i) => {
          return (
            <li key={'sidebar-' + i}>
              <a href={anchor.href}>
                {anchor.title}
              </a>
              {(anchor.ul) ?
                <ul>
                  {(anchor.ul).map((subAnchor,i) => {
                    return (
                      <li key={'subanch-' + i}>
                        <a href={"#" + subAnchor.href}>
                          {subAnchor.title}
                        </a>
                      </li>
                    )
                  })}
                </ul> :
                null
              }
            </li>
          )})
       }
      </ul>
      <hr />
      <h4>Communicating with Stakeholders</h4>
      <p>Communicating with stakeholders needs to begin early in the process of identifying problems and investigating solutions, and continues through plan development, implementation, monitoring, and reassessment.</p>
      <p>
        <strong>Highlighted Resources</strong>
      </p>
      <Collection collection_name={props.resourcesCollection} />
      <p>
        <strong>Use these interactive maps and charts to build your own data visualizations:</strong>
      </p>
      <ul className='sidebar-links'>
          { (sidebar_links).map((link, i) => {
              return (
                <li className='sidebar-link' key={'sidebar-' + i}>
                  <img src={link.image} />
                  <a href={link.href}>
                    {link.title}
                  </a>
                </li>
              )})
          }
       </ul>
    </div>
  </div>
)

export default Sidebar;
