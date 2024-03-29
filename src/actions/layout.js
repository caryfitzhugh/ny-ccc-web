import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MapLink from '../utils/map_link';
import DatagrapherLink from '../utils/datagrapher_link';
import DefaultLayout from '../layouts/default';
import Section from '../layouts/section';
import ShowcaseResources from '../layouts/showcase_resources';
import './layout.css';

const ViewMapWithSector = (props) =>
  <MapLink className='btn btn-block btn-primary'
    active_layers={props.active_layers}
    >
    View Map
  </MapLink>;

const ViewDatagrapherWithSector = (props) =>
  <DatagrapherLink className='btn btn-block btn-primary'
    file={props.datagrapher_file}
    >
    View Datagrapher
  </DatagrapherLink>;

const SideNav = (props) => {
  return <ul>
    {props.showcased_resources ?
      <li>
        <Link to="#showcase_resources"> Showcased Resources </Link>
      </li>
      : null}
    {props.sections.map((section, indx) => {
      return <li key={indx}>
        <Link to={"#"+section.id}>{section.title}</Link>
        <ul>
          {section.subsections.map((subs, subindx) => {
            return <li key={subindx}><Link to={"#"+subs.id}>{subs.name}</Link></li>;
          })}
        </ul>
      </li>
    })}
  </ul>
}

class Layout extends Component {
  render() {
    return (
      <DefaultLayout
        className='actions-detail'
        nav_actions={[
          <ViewMapWithSector key='actions-map-button' {...this.props}/>,
          <ViewDatagrapherWithSector key='actions-datagrapher-button' {... this.props} />
        ]}

        subnav={<SideNav {...this.props}/>}
        >

        <h1>{this.props.title}</h1>
        {this.props.image ?
          <div className='lead-image col-12 col-md-5 float-right'>
            <img alt={this.props.title + ' example'} src={this.props.image} />
            {this.props.image_credit ? <div className='image-credit'>{this.props.image_credit}</div> : null}
          </div> : null}

        {this.props.children}

        {this.props.showcased_resources ?
          <ShowcaseResources title={this.props.showcased_resources.title}
            id='showcase_resources'
            collection_name={this.props.showcased_resources.collection_name}
            content={this.props.showcased_resources.content} />
          : null}

         {this.props.sections.map((section, indx) => {
            return <Section key={indx} {...section}/>;
         })}
      </DefaultLayout>
    );
  }
};

export default Layout;
