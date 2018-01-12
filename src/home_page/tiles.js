import React, { Component } from 'react';
import HeadlineArrow from './headline_arrow';
import {Link} from 'react-router-dom';

import './tiles.css';

const Tiles = (props) => (
<section>
  <div className="tiles-region container">
    <HeadlineArrow title="Identify Problems" href="/sectors"/>
    <div className='row'>
      {(props.tiles).map (tile => { 
        return (<div  className='col-sm-3 tile '>
          <Link to={tile.href}>
            <img src={tile.image} alt={tile.text}/>
          </Link>
          {tile.image_credit ? <div className='image-credit'>{tile.image_credit}</div> : <div className="no-credit" />}
          <p className='hidden-sm-down'>
            <b>{tile.title}</b>
            {tile.text} 
          </p>
          <Link id={tile.id} to={tile.href}>
            <small className="pull-right">
              More <i className="fa fa-angle-double-right"></i>
            </small>
          </Link>
        </div>);
      })}
    </div>
  </div>
</section>
)

export default Tiles;
