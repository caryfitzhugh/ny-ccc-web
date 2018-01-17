import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

import './datagrapher_page.css';

class DatagrapherPage extends Component {
  render() {
    return (
      <div className='datagrapher-page'>
        <Header />
          <div className='container'>
              <iframe src="http://i0.kym-cdn.com/photos/images/original/000/969/743/037.jpg" className="datagrapher"></iframe>
          </div>
        <Footer />
      </div>
    );
  }
}

export default DatagrapherPage;
