import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import Header from './header';
import {NotFound} from './not_found';
import Footer from './footer';

import Solutions from './highlights/solutions';
import Actions from './highlights/actions';
import Data_Products from './highlights/data_products';
import Documents from './highlights/documents';
import Problems from './highlights/problems';
import Maps from './highlights/maps';

import './highlights_page.css';

//import Datagrapher_Map from './highlights/datagrapher_map';
//import HighlightsIndex from './highlights/index';
//<Route exact path='/' component={HighlightsIndex} />
//<Route exact path='/highlights/datagrapher_map' component={Datagrapher_Map} />
class HighlightsPage extends Component {
  render() {
    return (
      <div className='highlights-page'>
        <Header />
          <div className='container'>
            <div className="row">
              <Switch>
                <Route exact path='/highlights/solutions' component={Solutions} />
                <Route exact path='/highlights/problems' component={Problems} />
                <Route exact path='/highlights/actions' component={Actions} />
                <Route exact path='/highlights/data_products' component={Data_Products} />
                <Route exact path='/highlights/documents' component={Documents} />
                <Route exact path='/highlights/maps' component={Maps} />
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
