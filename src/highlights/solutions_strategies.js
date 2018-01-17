import React from 'react';
import Collection from '../layouts/collection';

import './solutions.css';

const Strategies = (props) => (
  <div className="strategies">
      <div className="row">
        {(props.strategies).map(strategy => {
          return (
            <div className="col-sm-6">
              <img src={strategy.image} className="img-responsive" alt={"Photo: " + strategy.type} />

              <p className="caption">
                <span className="source">{strategy.source}</span>
              </p>

              <h3 className="title">{strategy.type}</h3>

              <div className="abstract">{strategy.abstract}</div>
              
              <p>
                <strong>Highlighted Resources:</strong>
              </p>

              <Collection collection_name={strategy.collection} />

              <a className="btn btn-default btn-wrap-text" href="/not-yet-implemented/solutions">More {strategy.type} Resources</a>
            </div>
          )
       })};
      </div>
  </div>
)

export default Strategies;
