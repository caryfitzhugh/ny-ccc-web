import React from 'react';
import Collection from '../layouts/collection';
import SearchLink from '../utils/search_link';

import './article_list.css';

const ArticleList = (props) => (
  <article>
    {(props.list).map(listItem => {
      return (
      <div className="row articleListItem">
        <div className="col-sm-12">
          <h3 id={listItem.id} className="title">{listItem.title}</h3>
        </div>
        <div className="col-sm-6">
          <img src={listItem.img} alt={listItem.source} class="img-responsive"/>
          <p className="caption">
            <p className="caption">{listItem.caption}
              <span className="source">Source: {listItem.source}</span>
            </p>
          </p>
        </div>
        <div className="col-sm-3">
          <div className="abstract">
            {listItem.abstract}
          </div>
        </div>
        <div className="col-sm-3">
          <p>
            <strong>
              Highlighted Resources
            </strong>
          </p>

          <Collection collection_name={listItem.collection} />

          <SearchLink className="btn btn-default btn-wrap-text" params={{query:(listItem.buttonLabel ? listItem.buttonLabel : listItem.title).toLowerCase()}}>{(listItem.buttonLabel) ? <span>More on {listItem.buttonLabel}</span> : <span>More {listItem.title} Resources</span>}</SearchLink>
        </div> 
      </div>  
      )
    })
    }
    

  </article>
)
 
export default ArticleList;
