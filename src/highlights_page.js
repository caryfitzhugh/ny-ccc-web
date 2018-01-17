import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import Header from './header';
import {NotFound} from './not_found';
import Footer from './footer';

import Solutions from './highlights/solutions';
import Data_Products from './highlights/data_products';
import Datagrapher_Map from './highlights/datagrapher_map';

import HighlightsIndex from './highlights/index';

class HighlightsPage extends Component {
  render() {
    return (
      <div className='highlights-page'>
        <Header />
          <div className='container'>
            <div className="row">
              <Switch>
                <Route exact path='/' component={HighlightsIndex} />
                <Route exact path='/highlights/solutions' component={Solutions} />
                <Route exact path='/highlights/data_products' component={Data_Products} />
                <Route exact path='/highlights/datagrapher_map' component={Datagrapher_Map} />
                <Route path='/' component={NotFound} />
              </Switch>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default HighlightsPage;
