import React, { Component } from 'react';
import QString from 'query-string';
import { withRouter } from 'react-router-dom'
import './search_bar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {query: null}
  }

  update_search_text(txt) {
    this.setState({query: txt || ""});
  }

  handle_key_press(target) {
    if(target.key === "Enter") {
      this.do_search();
    }
  }

  submit_search(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.do_search();
  }

  clear_query() {
    this.setState({query: ""}, () => {
      this.do_search();
    });
  }

  do_search() {
    let qstring = QString.stringify({query: this.query_string()});
    let path = '/search';
    if (window.location.pathname === '/search/map') {
      path = "/search/map";
    }
    path = `${path}?${qstring}`;
    this.props.history.push(path);
  }
  query_string() {
    let query_string = null;
    if (this.props.location.pathname.match("/search")) {
      let params = QString.parse(this.props.location.search);
      if (params.query) {
        query_string = params.query;
      }
    }
    if (this.state.query === null) {
      return query_string || "";
    } else {
      return this.state.query;
    }
  }

  render() {
    return (
      <div className={'search-bar ' + this.props.className}>
        <div className="row no-gutters">
          <div className="search-related-links hidden-xs">
            <a href="/search/advanced">Advanced Search</a>
          </div>
        </div>
        <div className="row no-gutters">
          <div className={'input-group input-group-' + (this.props.size || 'lg')}>
            <input value={this.query_string()}
                  onChange={(evt) => { this.update_search_text(evt.target.value)}}
                  onKeyDown={(evt) => this.handle_key_press(evt)}
                  type='text' title='search' aria-labelledby='search' className='form-control truncate' placeholder="Search maps, reports, & more"/>
              <span className='input-group-btn'>
                {this.query_string() ? <span className='clear-button'><span onClick={(evt) => this.clear_query()} className='fa fa-times-circle-o' ></span> </span>: null }
                <button aria-label="Submit the search query"
                      id='search' className='btn btn-primary search' type='button'
                      onClick={(evt) => { this.submit_search(evt)}}>
                  Search&nbsp;
                  <span className='fa fa-search'></span>
                </button>
              </span>
          </div>
        </div>
      </div>);
  }
}

export default withRouter(SearchBar);
