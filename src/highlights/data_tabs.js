import React from 'react';
import Collection from '../layouts/collection';
import SearchLink from '../utils/search_link';

import './data_tabs.css';

const DataTabs = (props) => (

  <div className="col-12 data-tabs">
    <h1>
      {props.title}
      <SearchLink className="btn btn-sm btn-primary" params={{facets: {formats: [props.query]}}}>
        <i className="fa fa-search"></i>
        {props.btnTitle}
      </SearchLink>
    </h1>
    <ul className="nav nav-tabs">
      {(props.tabs).map((tab, index) => {
        return (
          <li key={index}>
            <a  className={(index === 0) ? "active" : null} data-toggle="tab" href={"#" + tab.id}>{tab.title}</a>
          </li>
        )
      })}
    </ul>

    <div className="tab-content">
      {(props.tabs).map(tab => {
        return (
          <div className="tab-pane" id={tab.id}>
            <div className="highlights-collection grid">
              <Collection collection_name={tab.collection} collections_class="row" show_images={true} />
            </div>
          </div>
        )
      })

      }
    </div>
  </div>
)

export default DataTabs;
