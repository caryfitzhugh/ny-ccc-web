import React from 'react';
import Collection from '../layouts/collection';


import './sidebar.css';

const Sidebar = (props) => (
  <div className="col-sm-3 sidebar">
    <div>
       { (props.anchors).map(anchor => {
          return (
            <li>
              <a href={anchor.href}>
                {anchor.title}
              </a>
            </li>
          )})
       }

      <hr />

      <h4>Communicating with Stakeholders</h4>

      <p>Communicating with stakeholders needs to begin early in the process of identifying problems and investigating solutions, and continues through plan development, implementation, monitoring, and reassessment.</p>
  
      <p>
        <strong>Highlighted Resources</strong>
      </p>
      <Collection collection_name={props.mapCollection} />

      <p>
        <strong>Use these interactive maps and charts to build your own data visualizations:</strong>
      </p>
      <Collection collection_name={props.resourcesCollection} />
    </div>
  </div>
)
 
export default Sidebar;
