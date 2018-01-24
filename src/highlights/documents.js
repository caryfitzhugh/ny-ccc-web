import React from 'react';
import Collection from '../layouts/collection';

import './documents.css';

const Documents = (props) => (
  <div className="container documents">
    <div className="row">
      <div className="col-sm-9 col-12 main">
        <h1>Key Reports <small>New York State</small></h1>
        <br/>
        <Collection collection_name="NY/highlights/data_products/key_reports" />
      </div>
      <div className="col-sm-3 hidden-xs sidebar">
        <a href="/not-yet-implemented/documents" className="btn btn-sm btn-primary btn-tile">
        <i className="fa fa-search"></i>
        Search All Documents
        </a>
        <h4>More Featured Documents</h4>
        <Collection collection_name="NY/highlights/data_products/documents_sidebar" />
      </div>
    </div>
  </div>
)
 
export default Documents;
