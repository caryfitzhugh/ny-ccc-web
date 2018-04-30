import React from 'react';
import Collection from '../layouts/collection';
import SearchLink from '../utils/search_link';

import './assessments.css';

const Assessments = (props) => (
  <div className="assessment">
    {(props.assessments).map((assessment, i) => {
        return (
          <div key={'assessment-' + i} className="col-sm-12">
            <h3 className="title" id={assessment.id}>{assessment.title}</h3>
              <p>{assessment.description}</p>
              <p className="source">{assessment.source}</p>
              {(assessment.definitions).map((definition, i) => {
                  return(
                    <p key={'assessment-def-' + i}>
                      <strong>{definition.title}</strong>
                      {definition.definition}
                    </p>
                  )
                }
              )}
              <p>{assessment.definition}</p>

              <Collection collections_class={"row"} show_images={true} collection_name={assessment.collection} />

              <SearchLink className="btn btn-default btn-wrap-text" params={{query: assessment.query}}>More {assessment.title} Resources</SearchLink>

              <hr />

          </div>
        )
      })
    }
  </div>
)

export default Assessments;
