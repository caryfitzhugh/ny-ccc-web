import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './sectors.css';

class Sectors extends Component {
  constructor (props) {
    super(props)
    this.state = {current_index: 0};
  }
  render() {
    return <div className='sectors no-select '>
      <div className='container'>
        <div className='row'>
        <div className='col-sm-2 browse-by'>
          <div className="sector-tile">
            <h2>Browse by Sector</h2>
          </div>
        </div>
        {(this.props.sectors || []).map ( (sector, indx) => {
          return (<Link to={sector.href || "#"} key={indx} className='sector col-sm-2 '>
            <div className='icon'>{sector.icon}</div>
            <p> {sector.name}</p>
          </Link>);
        })}
      </div>
        </div>
    </div>
  }
}

export default Sectors;
