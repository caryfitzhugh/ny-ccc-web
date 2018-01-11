import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './resource_blocks.css';

class ResourceBlocks extends Component {
  constructor (props) {
    super(props)
    this.state = {current_index: 0};
  }
  render() {
    return <div className={this.props.className + ' container resource-blocks no-select '}>
      <div className='row'>
        {(this.props.blocks || []).map ( (block, indx) => {
          return (<div
                  key={indx} className='col-sm-4 block '>
            <h2 className='no-select'>
              <Link id={block.id} to={block.href}>{block.title}
                <small className="pull-right">
                  More <i className="fa fa-angle-double-right"></i>
                </small>
              </Link>

            </h2>
            <Link to={block.href}>
              <img src={block.image} alt={block.text}/>
            </Link>
            {block.image_credit ? <div className='image-credit'>{block.image_credit}</div> : null}
            <p className='hidden-sm-down'>{block.text} </p>
          </div>);
        })}
      </div>
    </div>
  }
}

export default ResourceBlocks;
