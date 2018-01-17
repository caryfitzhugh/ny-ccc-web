import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import Header from './header';
import {NotFound} from './not_found';
import Footer from './footer';

import Solutions from './highlights/solutions';

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
