import React from 'react';
import { Link } from 'react-router-dom';
import HeadlineArrow from './headline_arrow';

import './actions.css';

const Actions = (props) => (
<section aria-label="Actions">
  <div className="container actions">
    <HeadlineArrow title="Take Action" href="/highlights/actions" showMore={true}/>
    <div className="row">
      <div className="col-sm-7">
        <div className="primary-story">
          <img className="img-responsive" alt="Climate Smart Community certification" src={props.primaryStory} />
          <Link to={"/highlights/actions#greenhouse"}>
            <p className="story-caption" >
              Success Story: Reducing greenhouse gas emissions and preparing for climate change:  Climate Smart Communities
            </p>
          </Link>
        </div>
      </div>
      <div className="col-sm-5">
        <div className="row squares">
          {(props.squares).map((square, i) => {
            return (<div key={'action-' + i} className="col-6 ">
              <div className="square-background">
                <Link className="square-caption" to={square.squareLink}>
                 <p>
                  {square.squareText}
                 </p>
                </Link>
              </div>
            </div>)
          })}
        </div>
      </div>
    </div>
  </div>
</section>
)

export default Actions;
