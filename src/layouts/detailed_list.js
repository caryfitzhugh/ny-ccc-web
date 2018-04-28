import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_HOST } from '../utils/fetch';
import fetch from 'isomorphic-fetch';
import {isEmpty} from 'lodash';
import "./detailed_list.css";

class DetailedList extends Component {
  constructor(props) {
    super(props);
    this.state = {collection_result: {}}
  }

  componentWillMount() {
    let sthis = this;

    fetch(`${API_HOST}/collections/by-name/${this.props.collection_name}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to retrieve collection");
        }
      })
      .then((json) => {
        sthis.setState({collection_result: json, requesting: false, error: false});
      })
      .catch((e) => {
        console.warn(e);
      });
  }
  render() {
    let props ={
      collection_result: this.state.collection_result || {}
    }
    if (isEmpty(props.collection_result)) {
      return null;
    } else {
    return (
      <div className="detailed-list">
        {(props.collection_result.resources).map(resource => {
          return (
            <div className="resource">
              <div className="row">
                <div className="col-3">
                  <Link to={`/resources/${resource.docid}`}><img src={resource.image} className="img-responsive" alt={resource.title}/></Link>
                </div>
                <div className="col-9">
                  <div className="limit-list-display">
                    <Link to={`/resources/${resource.docid}`}><h4>{resource.title}</h4></Link>
                    {(resource.external_data_links || []).map((wl, indx) => {
                      let split = wl.split("::");
                      return <a target="_blank" href={split[1]} rel='noopener noreferrer' key={indx} className='btn btn-primary fa fa-link'> {split[0]} </a>;
                    })}
                    <br/>
                    <br/>
                    <p>{resource.content}</p>
                    <p>{resource.publishers}</p>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          )}
        )}
      </div>
      );
    }
  }
}
export default DetailedList;
