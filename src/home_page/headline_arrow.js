import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './headline_arrow.css';

const HeadlineArrow = (props) => (
	<div className="headline-arrow">
	    <h2 className="home arrow">{props.title}&nbsp;  
	     {props.showMore ?
	      <small> 
	        <a className="font-weight-bold" href={props.href} aria-label={"Click for more information on " + props.title}>
	          More 
	          <i className="fa fa-angle-double-right"></i>
	        </a>
	      </small> :
	      null
	  	  }
	    </h2>
	</div>
)

export default HeadlineArrow;


