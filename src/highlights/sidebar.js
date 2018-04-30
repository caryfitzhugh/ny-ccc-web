import React from 'react';
import Collection from '../layouts/collection';


import './sidebar.css';

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
      <Collection collection_name={props.mapCollection} show_images={true} />
    </div>
  </div>
)

export default Sidebar;
