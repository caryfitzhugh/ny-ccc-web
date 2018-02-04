import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import nescaum_logo from './images/nescaum_logo.png';
import esf_logo from './images/esf_logo.png';
import cornell_logo from './images/cornell_logo.png';
import nyserda_logo from './images/nyserda_logo.png';
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
          <div className='logos col-md-4 col-sm-4 col-xs-12'>
            <a href='' rel="noopener noreferrer" target="_blank">
              <img alt=''  src={nyserda_logo} />
            </a>
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
          <div className='content col-md-4 col-xs-12'>
            <Link to='/about#about_macc'> </Link>
            <h5>About NYCCSC</h5>
            <p className='hidden-md-down'>
              The New York Climate Change Science Clearinghouse (NYCCSC) is a regional gateway to data and information relevant to climate change adaptation and mitigation across New York State. It provides climate science data and literature and other resources for policy-makers, practitioners, and the public, to support scientifically sound and cost-effective decision making.
              <Link to='/about#about_macc'> More <i className="fa fa-angle-double-right"></i> </Link>
            </p>
            <h5>Content Suggestions</h5>
            <p className='hidden-md-down'>
              We want to hear from you!  If you have ideas for datasets, data products, GIS layers, websites, documents, or other resources that would add value to the New York Climate Change Science Clearinghouse, please submit them. Content proposals are moderated, and submission of an idea is not a guarantee of inclusion in the Clearinghouse.
            </p>
            <Link className='btn btn-primary btn-sm' to="/suggestions">
            Propose Content
            </Link>
          </div>
          <div className='content col-md-2 col-xs-12'>
            <h5>Contact</h5>
            <p>
            Email:
            <label><a href='mailto:info@nyclimatescience.org'>info@nyclimatescience.org</a></label>
            Phone: 607.273.6623 ext 22
            </p>
            <Link className='btn btn-sm btn-primary' to='/comments'>Provide Feedback</Link>
            <p>
             <a href="http://www.nyserda.ny.gov/" title="New York State Energy Research &amp; Development Agency">NYSERDA</a>  © 2018
            </p>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default Footer;
 
