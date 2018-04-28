import React from 'react';
import Collection from '../layouts/collection';
import SearchLink from '../utils/search_link';
import DetailedList from '../layouts/detailed_list';



import './documents.css';

const Documents = (props) => (
  <div className="container documents">
    <div className="row">
      <div className="col-sm-9 col-12 main">
        <h1>Key Reports <small>New York State</small></h1>
        <br/>
        <DetailedList collection_name="NY/highlights/data_products/key_reports" />
      </div>
      <div className="col-sm-3 hidden-xs sidebar">
       
        <SearchLink className="btn btn-sm btn-primary btn-tile" params={{facets: {formats: ["ny::documents"]}}}>
          <i className="fa fa-search"></i>
          Search All Documents
        </SearchLink>

        <h4>More Featured Documents</h4>
        <Collection collection_name="NY/highlights/data_products/documents_sidebar" />
      </div>
    </div>
  </div>
)
 
export default Documents;
