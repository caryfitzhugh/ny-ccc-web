import React, { Component } from 'react';
import SearchLink from '../utils/search_link';
import {without} from 'lodash';
import titleize from '../utils/titleize';
import {should_display} from '../resources/utils';
import {API_HOST} from '../utils/fetch';
import './advanced.css';

class FacetSection extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  render() {
    let props = this.props;
    let checked = []
    props.facets.forEach((facet) => {
      if (this.props.is_checked(props.field, facet)) {
        checked.push(facet);
      }
    });

    return <div className='form-group row'>
            <label className="col-sm-2 ">{props.title}
              <div>
                {this.state.open ?
                  <span className='btn btn-secondary btn-sm' onClick={(evt) => this.setState({open: false})}> Hide</span>
                :
                  <span className='btn btn-secondary btn-sm' onClick={(evt) => this.setState({open: true})}> Show </span>
                }
              </div>
            </label>
            <div className="col-sm-10 facets no-select">
              {this.state.open ?
                <div>
                  {props.facets.map((facet, indx) => {
                    if (facet.header) {
                      return <div key={indx} className='facet-header'>{facet.header}</div>;
                    } else {
                      let parts = facet.split("::");
                      return <div key={indx} onClick={(evt) => props.toggle(props.field, facet)} className={'badge ' + (props.is_checked(props.field, facet) ? 'active' : '')}>
                        {titleize(parts[parts.length - 1])}
                      </div>;
                    }
                  })}
                  </div> :
                  <div>
                    {checked.length === 0 ?
                        <span> None Selected </span> : null}
                    {checked.map((facet, indx) => {
                      let parts = facet.split("::");
                      return <div key={indx} onClick={(evt) => props.toggle(props.field, facet)} className={'badge ' + (props.is_checked(props.field,facet) ? 'active' : '')}>
                        {titleize(parts[parts.length - 1])}
                      </div>;
                    })}
                  </div>
              }
            </div>
         </div>
  }
};

class AdvancedSearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: {}, facets: {}};
  }
  componentDidMount() {
    this.retrieve_facets();
  }
  retrieve_facets (params) {
    let sthis = this;

    if (!this.state.requesting) {
      this.setState({error: false, requesting: true, facets: {}}, () => {
        fetch(API_HOST + "/resources")
          .then(
            (response) => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error("Error Performing Resoruces Search");
              }
          }).then((json) => {
            let search_facets = {};
            Object.keys(json.facets).forEach((name) => {
              let facets = json.facets[name];
              search_facets[name] = [];
              facets.forEach((f) => {
                if (should_display(f.value)) {
                  search_facets[name].push(f.value);
                }
              });
            });
            sthis.setState({facets: search_facets, requesting: false});
          })
          .catch((e) => {
              console.warn(e);
              sthis.setState({error: true});
          });
      });
    }
  }


  is_checked (field, facet) {
    return (this.state.selected[field] || []).includes(facet);
  }

  toggle (field, facet) {
    if (this.is_checked(field,facet)) {
      this.setState((prev) => {
        prev.selected[field] = prev.selected[field] || [];
        prev.selected[field] = without(prev.selected[field], facet);
        return prev;
      });
    } else {
      this.setState((prev) => {
        prev.selected[field] = prev.selected[field] || [];
        prev.selected[field].push(facet);
        return prev;
      });
    }
  }

  update_search(evt) {
    this.setState({search: evt.target.value});
  }

  render() {
    let facet_section_props = { is_checked: this.is_checked.bind(this),
                                toggle: this.toggle.bind(this)};
    return (
      <div className={'default-layout container data-layout'}>
        <div className='row'>
          <div className='main col-12 col-md-8 col-lg-9'>
            <h1> Advanced Search </h1>
            <p>
              The Clearinghouse will lead you to thousands of items, including maps, GIS layers, data products, websites and documents. You can search for resources in three ways:
            </p>
            <ol>
              <li>Filter by facets, such as sector, climate change, strategy, action or format.</li>
              <li>Enter keywords to search by keyword(s) or phrase.  You can also enter a keyword and select facets to further refine your search.</li>
              <li>Identify items by geographic focus. Focus the map by zooming and/or panning to browse by location or region.</li>
            </ol>
            <hr/>
            <form className='form' onSubmit={(evt) => {evt.preventDefault(); evt.stopPropagation();}}>
              <div className='form-group row'>
                <label className="col-sm-2 col-form-label">Search Terms</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" placeholder="Search keywords..."
                    onChange={(evt) => this.update_search(evt)}/>
                </div>
              </div>
              <FacetSection {... facet_section_props}
                title="Sectors" field='sectors' facets={this.state.facets.sectors || []}/>
              <FacetSection {... facet_section_props}
                  title="Strategies" field='strategies' facets={this.state.facets.strategies || []}/>
              <FacetSection {... facet_section_props}
                title="Climate Changes"
                field='climate_changes'
                facets={this.state.facets.climate_changes || [] }
              />
              <FacetSection {... facet_section_props}
                  title="Types" field='content_types' facets={this.state.facets.content_types || []}/>

              <div className='form-group row submit-row'>
                <SearchLink params={Object.assign({},
                                                  {facets: this.state.selected},
                                                  {query: this.state.search})}
                  className='btn btn-primary'>

                  Search

                </SearchLink>
              </div>
            </form>
          </div>
          <div className='subnav flex-last col-md-4 col-lg-3 col-12'>
            <div className='content'>
              <h4> Search Tips </h4>
              <table className='table'>
                <tbody>
                  <tr>
                    <td className='term'>'quote'</td>
                    <td className='instructions'>
                      place quotes around terms which should be matched as a phrase
                    </td>
                  </tr>
                  <tr>
                    <td className='term'>-</td>
                    <td className='instructions'>
                      place a - in front of terms to only find results which do NOT include those terms
                    </td>
                  </tr>
                  <tr>
                    <td className='term'>+</td>
                    <td className='instructions'>
                      place a + in front of terms to find results which MUST include those terms
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default AdvancedSearchPage;
