import React from 'react';
import Collection from '../layouts/collection';

import './assessments.css';

const Assessments = (props) => (
  <div className="assessment">
    {(props.assessments).map(assessment => {
        return (
          <div className="col-sm-12">
            <h3 className="title" id={assessment.id}>{assessment.title}</h3>
              <p>{assessment.description}</p>
              <p className="source">{assessment.source}</p>
              {(assessment.definitions).map(definition => {
                  return(
                    <p>
                      <strong>{definition.title}</strong>
                      {definition.definition}
                    </p>
                  )
                }
              )}
              <p>{assessment.definition}</p>

              <Collection collection_name={assessment.collection} />

              <a className="btn btn-default btn-wrap-text" href="/not-yet-implemented/solutions">More {assessment.title} Resources</a>

              <hr />

          </div>
        )
      })
    }
  </div>
)
 
export default Assessments;
