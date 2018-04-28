import React from 'react';
import HeadlineArrow from './headline_arrow';
import {Link} from 'react-router-dom';

import './tiles.css';

const Tiles = (props) => (
<section aria-label="Identify Problems">
  <div className="tiles-region container">
    <HeadlineArrow title="Identify Problems" href="/highlights/problems" showMore={true}/>
    <div className='row'>
      {(props.tiles).map ((tile, i)=> {
        return (<div  key={'key-' + i} className='col-sm-3 tile col-12 '>
          <img className="img-responsive" src={tile.image} alt={tile.alt}/>
          {tile.image_credit ? <div className='image-credit'>{tile.image_credit}</div> : <div className="no-credit" />}
            <p className='hidden-sm-down'>
              <span className="font-weight-bold">{tile.title}</span>
              {tile.text}
            </p>
            <Link className="font-weight-bold" id={tile.id} to={tile.href}>
              <span className="more-link text-right">
                More on {tile.title}<i className="fa fa-angle-double-right"></i>
              </span>
            </Link>
        </div>);
      })}
    </div>
  </div>
</section>
)

export default Tiles;
