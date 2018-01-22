import React from 'react';
import HeadlineArrow from './headline_arrow';

import './actions.css';

const Actions = (props) => (
<section>
  <div className="container actions">
    <div className="row">
      <HeadlineArrow title="Take Action" href="/highlights/actions" showMore={true}/>
    </div>
    <div className="row">
      <div className="col-sm-7">
        <div className="primary-story">
          <img class="img-responsive" alt="Climate Smart Community certification" src={props.primaryStory} />
          <a href="#" >
            <p className="story-caption" >
              Success Story: Reducing greenhouse gas emissions and preparing for climate change:  Climate Smart Communities
            </p>
          </a>
        </div>
      </div>
      <div className="col-sm-5">
        <div className="row squares">
          {(props.squares).map(square => {
            return (<div className="col-sm-6">
              <div className="square-background">
                <a className="square-caption" href={square.squareLink}>
                 <p>
                  {square.squareText}
                 </p>
                </a>
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
