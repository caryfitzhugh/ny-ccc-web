import React, { } from 'react';
import {ResourcePublishDate} from './../utils/publish_date';
import md from 'marked';
import strip from 'strip';
import {slugify } from '../utils/string';
import "./search_result.css";

const SearchResult = (props) => {
    return <div key={props.docid} className='search-result'
              onClick={(evt) => props.history.push(`/resources/${props.docid}/${slugify(props.title)}`)}
            >
      <div className='body'>
        <label>{props.title}</label>
        <small>{props.subtitle}</small>
        <span className='pub-date'> {ResourcePublishDate(props)}</span>
        <div className='content' dangerouslySetInnerHTML={{__html: strip(md(props.content)).slice(0, 150) + "..."}}></div>
      </div>
      <div className='image'>
        {props.image ? <img alt='resource' src={props.image} /> : null }
      </div>

    </div>
};

export default SearchResult;
