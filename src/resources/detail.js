import React, { Component } from 'react';

import {isEmpty} from 'lodash';
import {ResourcePublishDate} from './../utils/publish_date';
import md from 'marked';
import {pretty_print, strip_state, should_display} from './utils';
import {filter , set} from 'lodash';
import GeofocusMap from './../geofocus_map';
import SearchLink from '../utils/search_link';
import './detail.css';

const ContentTypes = (props) => {
  return <div className='content-types'>
    {props.content_types.map((ctype) => {
      return <div key={ctype} className='content-type'>
        {ctype.split("::").map((part, i) => {
          return <span key={ctype + '-' + i} className='part'> {part} </span>
        })}
        </div>;
    })}
  </div>

};
const Authors = (props) => {
  if (props.authors.length === 0) {
    return null;
  } else {
    return <div className='authors'>
              <label>by</label>
                 {props.authors.map((author, indx) => {
                    let params = set({}, ["facets","authors"],[author]);
                    return <SearchLink key={indx} className='author' params={params}>{author}</SearchLink>;
                  })}
            </div>}
};
const Publishers = (props) => {
  if (props.publishers.length === 0) {
    return null;
  } else {
    return <div className='publishers'>
              <label>Published by </label>
                 {props.publishers.map((publisher, indx) => {
                    let params = set({}, ["facets","publishers"], [publisher]);
                    return <SearchLink key={indx} className='publisher' params={params}>{publisher}</SearchLink>;
                  })}
            </div>}
};

const CollapsedSubsection = (props) => {
  let items = props.items;
  items = filter(items, (v) => should_display(v));

  let grouped = {}
  items.forEach((item) => {
    let display = strip_state(item);
    let parts = display.split("::")
    let key = parts[parts.length - 1]
    grouped[key] = grouped[key] || [];
    grouped[key].push(item);
  });

  let sorted_items = Object.keys(grouped).map((key) => {
    return [key, grouped[key]];
  }).sort((a,b) => {
    if (a < b) { return -1; }
    if (b < a) { return 1; }
    return 0;
  }).map((arr) => { return arr[1]; });

  return items.length > 0 ? (
    <div key={`subsection-${props.name}`} className='subsection'>
      <label>{props.name}</label>
      <div className='items'>
        {sorted_items.map( (items, indx) => {
          let display = strip_state(items[0]);
          if (display) {
            let parts = display.split("::");
            display = parts[parts.length - 1];
          }

          let params = set({}, ["facets",props.facet],items);
          return <div className='item' key={indx}>
              <SearchLink params={params}>{pretty_print(display)}</SearchLink>
            </div>;
          })}
      </div>
    </div>) : null;
};

const Subsection = (props) => {
  let items = props.items;

  if (props.prefixed) {
    items = filter(items, (v) => should_display(v));
  }

  return items.length > 0 ? (
    <div key={`subsection-${props.name}`} className='subsection'>
      <label>{props.name}</label>
      <div className='items'>
        {props.items.map( (item, indx) => {
          let display = item;
          if (props.prefixed) {
            display = strip_state(item);
          }
          if (props.only_trailing && display) {
            let parts = display.split("::");
            display = parts[parts.length - 1];
          }
          let params = set({}, ["facets",props.facet],[item]);
          return <div className='item' key={indx}>
              <SearchLink params={params}>{pretty_print(display)}</SearchLink>
            </div>;
          })}
      </div>
    </div>) : null;
};

class ResourcesDetailPage extends Component {
  componentDidMount() {
    this.props.load_resource(this.props.match.params.docid);
  }

  componentWillReceiveProps(nextProps) {
    this.props.load_resource(this.props.match.params.docid);
  }
  back(evt) {
    evt.preventDefault();
    this.props.history.goBack();
  }
  render() {
    let resource = this.props.resources_result || {};

    if (isEmpty(resource)) {
      return null;
    } else {
      return (
        <div className='resource-detail container'>
          <span className='back-to-search-results' onClick={(evt) => this.back(evt) }>&#8592;&nbsp; Back to Search Results</span>
          <h1>{resource.title}</h1>
          {(resource.subtitle) ? <h5>{resource.subtitle}</h5> : null}
          {(resource.external_data_links || []).map((wl, indx) => {
            let split = wl.split("::");
            return <a target="_blank" href={split[1]} rel='noopener noreferrer' key={indx} className='btn btn-primary fa fa-link'> {split[0]} </a>;
          })}
          <span className='publication'>{ResourcePublishDate(resource)}</span>
          <ContentTypes content_types={resource.content_types} />
          <hr/>
          <Authors authors={resource.authors}/>

          <Publishers publishers={resource.publishers} />

          {resource.image ?
            <img alt={resource.title + ' example'} src={resource.image} className='col-12 col-md-5 float-right'/>
            : null}


          <div className='content' dangerouslySetInnerHTML={{__html: md(resource.content || "")}}></div>
          <hr/>

          {resource.geofocuses.length > 0 ? <div className='resource-map'>
                <GeofocusMap static_map={true} geofocuses={resource.geofocuses || []} />
              </div> : null }

            <Subsection name='Actions' facet="actions" items={resource.actions} prefixed={true} />
            <CollapsedSubsection name='Climate Changes' facet="climate_changes" items={resource.climate_changes} />
            <Subsection name='Effects' facet="effects" items={resource.effects} prefixed={true} />
            <Subsection name='Keywords' facet="keywords" items={resource.keywords} />
            <Subsection name='Sectors' facet="sectors" items={resource.sectors} prefixed={true} />
            <Subsection name='Strategies' facet="strategies" items={resource.strategies} />
        </div>);
    }
  }
}

export default ResourcesDetailPage;
