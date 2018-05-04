import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search_bar';
import logo_img from './images/logo.png';
import './header.css';

const ActiveLink = (props) => {
  let is_active = (props.to === window.location.pathname);
  let li_class = is_active ? 'active' : '';
  return <div className={'nav-item ' + li_class}>
    <Link {...props} className={'nav-link ' + props.className} >{props.children}</Link>
  </div>
}

const Logo = (props) =>
  <Link to='/' className='logo'>
    <img className='hidden-xs' src={logo_img} alt="NY CCSC Logo" />
    <div className='logo-text slate-text'>
      <h1>
        <em className='slate-text'> NY </em>
        <span className='gray-text'>CCSC</span>
      </h1>
      <small>
        New York&nbsp;
        <small className='orange-text'>
         Climate Change
        </small>
        &nbsp;Science Clearinghouse
      </small>
    </div>
  </Link>;

const NavBlocks = (props) =>
  <div className='no-select nav-blocks hidden-md-down hidden-xs hidden-sm'>
    <Link to="/highlights/problems" className={'nav-block col-xs ' + (props.nav_block === 'explore_sectors' ? 'active': null)}>
      <div className='content'>
        Identify Problems
      </div>
    </Link>
    <Link to='/highlights/solutions' className={'nav-block col-xs ' + (props.nav_block === 'identify_changes' ? 'active': null)}>
      <div className='content'>
        Investigate Solutions
      </div>
    </Link>
    <Link to='/highlights/actions' className={'nav-block col-xs ' + (props.nav_block === 'take_action' ? 'active': null)}>
      <div className='content'>
        Take <br /> Action
      </div>
    </Link>
  </div>;

const NavigationSub = (props) =>
    <div className='navbar navbar-expand-lg justify-content-end'>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggleNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="toggleNav">
        <div className="nav-links row w-50">
          {props.add_logo ?
              <div className="logo">
                <div className={'nav-item'}>
                  <Link to='/' className={'nav-link home'} >
                    <img className='hidden-xs' src={logo_img} alt="NY CCSC Logo" />
                  </Link>
                </div>
              </div>
              : null}
          <div className="col-sm-3">
            <ActiveLink to='/highlights/maps'> Maps </ActiveLink>
          </div>
          <div className="col-sm-3">
            <ActiveLink to='/highlights/data_products'>Data</ActiveLink>
          </div>
          <div className="col-sm-3">
            <ActiveLink to='/highlights/documents'>Documents</ActiveLink>
          </div>
        </div>
        <hr />
        <SearchBar className='col-sm-4' size='sm'/>
      </div>
  </div>;


class ShortHeader extends Component {
  render() {
      return <div className='header-wrap short-header'>
        <div className='container-fluid navigation'>
          <div className='container'>
            <NavigationSub add_logo={true} {...this.props} />
          </div>
        </div>
      </div>;
  }
};

class FullHeader extends Component {
  render() {
      return <div className='header-wrap'>
        <div className='container header'>
          <Logo />
          <NavBlocks anchors={this.props.anchors} nav_block={this.props.nav_block || {}}/>
        </div>
        {this.props.hide_subnav ?  null : (
        <div className='container-fluid navigation'>
          <div className='container'>
            <NavigationSub {...this.props} />
          </div>
        </div>)}
      </div>
    }
};

class Header extends Component {
  render() {
    if (this.props.short_header) {
      return <ShortHeader {...this.props}/>;
    } else {
      return <FullHeader {...this.props}/>;
    }
  }
}

export default Header;
