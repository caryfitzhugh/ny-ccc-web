import React, { Component } from 'react';
import HeadlineArrow from './headline_arrow';
import {Link} from 'react-router-dom';

import './actions.css';

const Actions = (props) => (
<section>
  <div className="container actions">
    <div className="row">
      <HeadlineArrow title="Take Action" href="#"/>
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
        <div className="row">
          {(props.squares).map(square => {
            <div className="col-xs-6">
              <a className="square-caption" href={square.squareLink}>
               <h4>
                {square.squareText}
               </h4>
              </a>
            </div>
          })}
        </div>
      </div>
    </div>
  </div>
</section>
)

export default Actions;
