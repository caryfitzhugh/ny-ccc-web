import React from 'react';
import Collection from '../layouts/collection';

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

          <a className="btn btn-default btn-wrap-text" href="/not-yet-implemented/solutions"> {(listItem.buttonLabel) ? listItem.buttonLabel : <span>More {listItem.title} Resources</span>}</a>
        </div> 
      </div>  
      )
    })
    }
    

  </article>
)
 
export default ArticleList;
