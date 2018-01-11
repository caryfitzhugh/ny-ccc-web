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
    <img className='hidden-xs' src={logo_img} alt="logo" />
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
    <Link to={props.anchors ? '/#explore_sectors' : '/sectors'} className={'nav-block col-xs ' + (props.nav_block === 'explore_sectors' ? 'active': null)}>
      <div className='content'>
        Identify Problems
      </div>
    </Link>
    <Link to={props.anchors ? '/#identify_changes': '/changes'} className={'nav-block col-xs ' + (props.nav_block === 'identify_changes' ? 'active': null)}>
      <div className='content'>
        Investigate Solutions
      </div>
    </Link>
    <Link to={props.anchors ? '/#take_action' : "/actions"} className={'nav-block col-xs ' + (props.nav_block === 'take_action' ? 'active': null)}>
      <div className='content'>
        Take <br /> Action 
      </div>
    </Link>
  </div>;  
class Header extends Component {
  render() {
    return <div className='header-wrap'>
      <div className='container header'>
        <Logo />
        <NavBlocks anchors={this.props.anchors} nav_block={this.props.nav_block || {}}/>
      </div>
      {this.props.hide_subnav ?  null : (
      <div className='container-fluid subnav'>
        <div className='container'>
          <div className='nav'>
            <ActiveLink to={this.props.anchors ? '/#maps' : '/data/maps'}> Maps </ActiveLink>
            <ActiveLink to={this.props.anchors ? '/#data' : '/data/data'}>Data</ActiveLink>
            <ActiveLink to={this.props.anchors ? '/#documents' : `/data/documents`}>Documents</ActiveLink>
          </div>
          <SearchBar className='' size='sm'/>
        </div>
      </div>)}
    </div>
  }
}

export default Header;
