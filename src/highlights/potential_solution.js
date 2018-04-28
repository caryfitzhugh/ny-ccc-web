import React from 'react';
import Collection from '../layouts/collection';
import SearchLink from '../utils/search_link';

import './potential_solution.css';

const PotentialSolutions = (props) => (
  <div className="potentialSolution row justify-content-around" id="potentialSolution">
    {(props.potentialSolutions).map(solution => {
      return (
      <div className="col-sm-4">
        <div className="item">
          <h3>
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className={"fa fa-" + solution.icon + " fa-stack-1x fa-inverse"}></i>
             </span>
            {solution.title}
          </h3>

          <Collection collection_name={solution.collection} />

          <SearchLink className="btn btn-default btn-wrap-text" params={{facets: {sectors: [solution.query]}}}>More on {solution.title}</SearchLink>

        </div>
      </div>
      )
      })
    }
</div>
)

export default PotentialSolutions;
