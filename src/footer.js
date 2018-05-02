import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import nescaum_logo from './images/nescaum_logo.png';
import esf_logo from './images/esf_logo.png';
import pri_logo from './images/pri_logo.png';
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
          <div className='col-md-4 col-sm-4 col-xs-12'>
            <div className="col-sm-12 col-xs-8">
              <a href='http://www.nyserda.ny.gov/' rel="noopener noreferrer" target="_blank">
                <img className="img-responsive logo" alt='New York State Energy Research and Development Authority (NYSERDA)'  src={nyserda_logo} />
              </a>
            </div>
            <div className="col-sm-12 col-xs-8">
              <a href='https://nescaum.org' rel="noopener noreferrer" target="_blank">
                <img className="img-responsive logo nescaum-logo" alt='Northeast States for Coordinated Air Use Management (NESCAUM)'  src={nescaum_logo} />
              </a>
            </div>
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-6 col-12 logos">
                  <a href='https://cornell.edu' rel="noopener noreferrer" target="_blank">
                    <img className="img-responsive logo" alt='Cornell University'  src={cornell_logo} />
                  </a>
                </div>
                <div className="col-sm-6 col-12">
                  <a href='https://www.esf.edu' rel="noopener noreferrer" target="_blank">
                    <img className="img-responsive logo" alt='SUNY College of Environmental Science and Forestry (ESF)'  src={esf_logo} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="row centered">
                <div className="col-sm-6 col-12">
                  <a href='https://www.priweb.org' rel="noopener noreferrer"  target="_blank">
                    <img className="img-responsive logo pri-logo" alt='Paleontological Research Institution'  src={pri_logo} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='content col-md-4 col-xs-12'>
            <h3>About NYCCSC</h3>
            <p className='hidden-md-down'>
              The New York Climate Change Science Clearinghouse (NYCCSC) is a regional gateway to data and information relevant to climate change adaptation and mitigation across New York State. It provides climate science data and literature and other resources for policy-makers, practitioners, and the public, to support scientifically sound and cost-effective decision making.
              <Link to='/about' className="font-weight-bold"> For More Information <i className="fa fa-angle-double-right"></i> </Link>
            </p>
           <h3>Content Suggestions</h3>
            <p className='hidden-md-down'>
              We want to hear from you!  If you have ideas for datasets, data products, GIS layers, websites, documents, or other resources that would add value to the New York Climate Change Science Clearinghouse, please submit them. Content proposals are moderated, and submission of an idea is not a guarantee of inclusion in the Clearinghouse.
            </p>
            <Link className='btn btn-primary btn-sm pull-right' to="/suggestions">
            Propose Content
            </Link>
          </div>
          <div className='content col-md-2 col-xs-12'>
            <h3>Contact</h3>
            <p>
              Email: <a href='mailto:info@nyclimatescience.org' className="font-weight-bold">info@nyclimatescience.org</a>
            </p>
            <p>Phone: 607.273.6623 ext 22</p>
            <Link className='btn btn-sm btn-primary' to='/comments'>Provide Feedback</Link>
            <p>
             <a href="http://www.nyserda.ny.gov/" className="font-weight-bold" title="New York State Energy Research &amp; Development Agency">NYSERDA</a>  © 2018
            </p>
          </div>
        </div>
      </div>
    </div>;
  }
}

export default Footer;
