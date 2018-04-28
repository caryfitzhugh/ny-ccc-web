import React, { Component } from 'react';
import Header from './header';

import './datagrapher_page.css';

class DatagrapherPage extends Component {
  render() {
    return (
      <div className='datagrapher-page'>
        <Header short_header={true}/>
        <iframe title='MA CCC Datagrapher' src="https://datagrapher.nyclimatescience.org/" className="datagrapher"></iframe>
      </div>
    );
  }
}

export default DatagrapherPage;
