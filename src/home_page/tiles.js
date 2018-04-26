import React from 'react';
import HeadlineArrow from './headline_arrow';
import {Link} from 'react-router-dom';

import './tiles.css';

const Tiles = (props) => (
<section>
  <div className="tiles-region container">
    <HeadlineArrow title="Identify Problems" href="/highlights/problems" showMore={true}/>
    <div className='row'>
      {(props.tiles).map (tile => { 
        return (<div  className='col-sm-3 tile col-12 '>
          <img className="img-responsive" src={tile.image} alt={tile.alt}/>
          {tile.image_credit ? <div className='image-credit'>{tile.image_credit}</div> : <div className="no-credit" />}
          <p className='hidden-sm-down'>
            <b>{tile.title}</b>
            {tile.text} 
          <Link id={tile.id} to={tile.href}>
            <p className=" more-link text-right">
              More on {tile.title}<i className="fa fa-angle-double-right"></i>
            </p>
          </Link>
          </p>
        </div>);
      })}
    </div>
  </div>
</section>
)

export default Tiles;
