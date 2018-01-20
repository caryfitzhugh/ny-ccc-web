import React, { Component } from 'react';
import HeadlineArrow from './headline_arrow';
import {Link} from 'react-router-dom';

import './solutions.css';

const Solutions = (props) => (
<section>
  <div className="container solutions">
    <div className="row">
      <div className="col-sm-6">
        <HeadlineArrow title="Investigate Solutions" href="/highlights/solutions" showMore={true}/>
        <p>
          We can best address climate change, in the form of mitigation or adaptation, through careful, long-term planning and by considering lessons learned from the past. Solutions might be very broad or specific to a particular sector. Learn more about sector- specific solutions.
        </p>
      </div>
      <div className="col-sm-6">
        <div className="solution">
          <p className="description"><b>Mitigation</b> is action taken to reduce the severity of climate change. Early mitigation will make it easier to adapt to climate change later on.</p>
          <p className="more">
            <Link to="/highlights/solutions#strategies">
              More <i className="fa fa-angle-double-right"></i>
            </Link>
          </p>
        </div>
        <div className="solution">
          <p className="description"><b>Adaptation</b> refers to actions taken to prepare for climate change, helping to reduce adverse impacts or take advantage of beneficial impacts.</p>
          <p className="more">
            <Link to="/highlights/solutions#strategies">
              More <i className="fa fa-angle-double-right"></i>
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
)

export default Solutions;
