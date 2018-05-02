import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MapLink from '../utils/map_link';
import DatagrapherLink from '../utils/datagrapher_link';
import DefaultLayout from '../layouts/default';
import Section from '../layouts/section';
import ShowcaseResources from '../layouts/showcase_resources';
import {Footnotes} from '../utils/footnotes';
import './layout.css';

const ViewMapWithSector = (props) =>
  <MapLink className='btn btn-block btn-primary'
    sector={props.sector_name || props.title} >
    View Map For This Sector
  </MapLink>;

const ViewDatagrapherWithSector = (props) =>
  <DatagrapherLink className='btn btn-block btn-primary'
    file={props.datagrapher_file} >
    View Datagrapher
  </DatagrapherLink>;

const SideNav = (props) => {
  return <div className='side-nav'>
      <ul>
        {(props.sections || []).map((section, indx) => {
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

      {props.showcased_resources ?
          <ShowcaseResources
            id='showcase_resources'
            {... props.showcased_resources} />
        : null}

    </div>
}

class Layout extends Component {
  render() {
    return (
      <DefaultLayout
        className='sector-detail'
        nav_actions={[
          <ViewMapWithSector key='sector-map-button' {...this.props}/>,
          <ViewDatagrapherWithSector key='sector-datagrapher-button' {... this.props} />
        ]}

        subnav={<SideNav {...this.props}/>}
        >
        <div className='header-and-img'>
          <h1>{this.props.title}</h1>
          <div className={'lead-image col-12' + (this.props.image ? ' col-md-5 ' : null) + 'float-right'}>
            {this.props.image ? <img alt={this.props.title + ' example'} src={this.props.image} /> : null}
            {this.props.image_caption ? <div className='image-caption'>{this.props.image_caption}</div> : null}
            {this.props.image_credit ? <div className='image-credit'>{this.props.image_credit}</div> : null}
          </div>
          {this.props.children}
        </div>

         {(this.props.sections || []).map((section, indx) => {
            return <Section key={indx} {...section}/>;
         })}


         <Footnotes notes={this.props.footnotes || []}/>
      </DefaultLayout>
    );
  }
};

export default Layout;
