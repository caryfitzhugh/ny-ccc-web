import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './maplist_toggle.css';

class MapListToggle extends Component {
  change_sort(evt) {
    this.props.onNewSearch(Object.assign({}, this.props.params, {sort_by: evt.target.value}))
  }

  render() {
    let map_href = "/search/map"+ this.props.location.search;
    let list_href = "/search"+ this.props.location.search;
    let is_map = this.props.location.pathname === "/search/map";

    let sorting_options = [
      {value: "newest", display: "Newest First"},
      {value: "relevance", display: "Most Relevant"},
      {value: "oldest", display: "Oldest First"},
    ];
    return (
    <div className='maplist-toggle'>
      <div className='float-right'>
          <label> Sort results by </label>
          <select aria-label="Select sorting order for search results" onChange={this.change_sort.bind(this)} value={this.props.params.sort_by}>
            {sorting_options.map((opt) => {
              return <option key={opt.value + '-results-sort'} value={opt.value}>{opt.display}</option>
            })}
          </select>
      </div>
      <div className='button-group'>
        <Link to={map_href}
              aria-label="Show the results as a map view"
              className={'btn ' + (is_map ? 'btn-primary ' : 'btn-secondary')}>
          <span className='fa fa-map'></span>
        </Link>
        <Link to={list_href}
              aria-label="Show the results as a list view"
              className={'btn ' + (is_map ? 'btn-secondary' : 'btn-primary ')}>
          <span className='fa fa-list'></span>
        </Link>
      </div>
    </div>
    );
  }
}

export default MapListToggle;
