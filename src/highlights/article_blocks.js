import React from 'react';
import Collection from '../layouts/collection';
import SearchLink from '../utils/search_link'


import './article_blocks.css';

const ArticleBlocks = (props) => (
  <div className="articleBlock" id={props.id}>
      <div className="row">
        {(props.articles).map(article => {
          return (
            <div className="col-sm-6 col-6 article">
              <img src={article.image} className="img-responsive" alt={"Photo: " + article.type} />
              <p className="caption"><span className="source">{article.source}</span></p>
              <h3 className="title">{article.type}</h3>
              <div className="abstract">{article.abstract}</div>
              <p className="resources"><strong>Highlighted Resources:</strong></p>

              <Collection collection_name={article.collection} />
              {(props.showSearchBtn) ? 
              <SearchLink className="btn btn-default btn-wrap-text" params={{facets: {strategies: [article.query]}}}>More {article.type} Resources</SearchLink>
              : null}
        
            </div>
          )
       })}
      </div>
  </div>
)

export default ArticleBlocks;
