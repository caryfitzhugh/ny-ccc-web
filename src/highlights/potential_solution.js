import React from 'react';
import Collection from '../layouts/collection';


import './potential_solution.css';

const PotentialSolutions = (props) => (
  <div className="potentialSolution row justify-content-around">
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

          <a className="btn btn-default btn-wrap-text" href="/not-yet-implemented/solutions">More on {solution.title}</a>
        </div>
      </div>
      )
      })
    }
</div>
)

export default PotentialSolutions;
