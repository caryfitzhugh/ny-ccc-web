import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './headline_arrow.css';

const HeadlineArrow = (props) => (
	<div className="headline-arrow container">
		<div className='row'>
			<div className="col-12">
			    <h2 className="home arrow">{props.title}&nbsp;  
			     {props.showMore ?
			      <small> 
			        <a href={props.href}>
			          More 
			          <i className="fa fa-angle-double-right"></i>
			        </a>
			      </small> :
			      null
			  	  }
			    </h2>
		    </div>
		 </div>
	</div>
)

export default HeadlineArrow;


