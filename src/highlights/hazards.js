import React from 'react';
import Collection from '../layouts/collection';

import './hazards.css';

const Hazards = (props) => (
  <article>
    {(props.hazards).map(hazard => {
      return (
      <div className="row hazard">
        <div className="col-sm-12">
          <h3 id={hazard.id} className="title">{hazard.title}</h3>
        </div>
        <div className="col-sm-6">
          <img src={hazard.img} alt={hazard.source} class="img-responsive"/>
          <p className="caption">
            <p className="caption">{hazard.caption}
              <span className="source">Source: {hazard.source}</span>
            </p>
          </p>
        </div>
        <div className="col-sm-3">
          <div className="abstract">
            {hazard.abstract}
          </div>
        </div>
        <div className="col-sm-3">
          <p>
            <strong>
              Highlighted Resources
            </strong>
          </p>

          <Collection collection_name={hazard.collection} />

          <a className="btn btn-default btn-wrap-text" href="/not-yet-implemented/solutions">More {hazard.title} Resources</a>
        </div> 
      </div>  
      )
    })
    }
    

  </article>
)
 
export default Hazards;
