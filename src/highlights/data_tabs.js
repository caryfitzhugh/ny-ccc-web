import React from 'react';
import Collection from '../layouts/collection';

import './data_tabs.css';

const DataTabs = (props) => (

  <div className="col-12 data-tabs">
    <h1>
      {props.title}
      <a href="/not-yet-implemented/search-all-maps" className="btn btn-sm btn-primary">
        <i className="fa fa-search"></i>
        {props.btnTitle}
      </a>
    </h1>
    <ul className="nav nav-tabs">
      {(props.tabs).map((tab, index) => {
        return (
          <li>
            <a key={index} className={(index == 0) ? "active" : null} href="tab" data-toggle="tab" href={"#" + tab.id}>{tab.title}</a>
          </li>
        )
      })}
    </ul>

    <div className="tab-content">
      {(props.tabs).map(tab => {
        return (
          <div className="tab-pane" id={tab.id}>
            <div className="highlights-collection grid">
              <Collection collection_name={tab.collection} show_images={true} />
            </div>
          </div>
        )
      })

      }
    </div>
  </div>
)
 
export default DataTabs;
