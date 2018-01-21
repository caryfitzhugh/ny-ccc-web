import React from 'react';
import Collection from '../layouts/collection';


import './sidebar.css';

const Sidebar = (props) => (
  <div className="col-sm-3 sidebar hidden-xs">
    <div>
      <ul>
       { (props.anchors).map(anchor => {
          return (
            <li>
              <a href={anchor.href}>
                {anchor.title}
              </a>
              {(anchor.ul) ?
                <ul>
                  {(anchor.ul).map(subAnchor => {
                    return (
                      <li>
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
      <Collection collection_name={props.mapCollection} />
      <p>
        <strong>Use these interactive maps and charts to build your own data visualizations:</strong>
      </p>
      <Collection collection_name={props.resourcesCollection} />
    </div>
  </div>
)
 
export default Sidebar;
