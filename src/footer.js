import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import nescaum_logo from './images/nescaum_logo.png';
import eea_logo from './images/eea_logo.png';
import esf_logo from './images/esf_logo.png';
import cornell_logo from './images/cornell_logo.png';
import ma_logo from './images/ma_seal.png';
import './footer.css';

class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {current_index: 0};
  }
  render() {
    return <div className='container-fluid footer'>
      <div className='footer-content container'>
        <div className='row'>
          <div className='logos col-md-6'>
            <a href='' rel="noopener noreferrer" target="_blank">
              <img className='primary-logo' alt=''  src={eea_logo} />
            </a>
            <a href='' rel="noopener noreferrer" target="_blank">
              <img className='primary-logo' alt=''  src={ma_logo} />
            </a>

            <hr/>

            <a href='' rel="noopener noreferrer" target="_blank">
              <img alt=''  src={esf_logo} />
            </a>
            <a href='' rel="noopener noreferrer" target="_blank">
              <img alt=''  src={cornell_logo} />
            </a>
            <a href='' rel="noopener noreferrer" target="_blank">
              <img alt=''  src={nescaum_logo} />
            </a>
          </div>
          <div className='content col-md-6'>
            <Link to='/about#about_macc'> </Link>
            <p className='hidden-md-down'>
             Luke rushes out of the small doomed entry to the homestead and searches the darkening horizon for the small triped astro-robot. Threepio struggles out of the homestead and on the salt flat as Luke scans the landscape with his electrobinoculars.
              <Link to='/about#about_macc'> More ... </Link>
            </p>
            <label> Email <Link to='mailto:'>  </Link> </label>
            <Link className='btn btn-sm btn-primary' to='/suggestions'>Content Suggestions</Link>
            <Link className='btn btn-sm btn-primary' to='/comments'>Provide Feedback</Link>
          </div>
        </div>
      </div>
      <div className='row copyright'>
        &copy; 2017 <Link to=''></Link>
      </div>
    </div>;
  }
}

export default Footer;
