import React from 'react';
import Collection from '../layouts/collection';

import './article_blocks.css';

const ArticleBlocks = (props) => (
  <div className="articleBlock" id={props.id}>
      <div className="row">
        {(props.articles).map(article => {
          return (
            <div className="col-sm-6 article">
              <img src={article.image} className="img-responsive" alt={"Photo: " + article.type} />

              <p className="caption">
                <span className="source">{article.source}</span>
              </p>

              <h3 className="title">{article.type}</h3>

              <div className="abstract">{article.abstract}</div>
              
              <p className="resources">
                <strong>Highlighted Resources:</strong>
              </p>

              <Collection collection_name={article.collection} />
              {(props.showSearchBtn) ? 
              <a className="btn btn-default btn-wrap-text" href="/not-yet-implemented/solutions">More {article.type} Resources</a>
              : null}
        
            </div>
          )
       })}
      </div>
  </div>
)

export default ArticleBlocks;
