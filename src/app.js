import React, { Component } from 'react';
import ScrollToTop from './utils/scroll_to_top';
import {NotFoundPage} from './not_found';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './home_page';
import SectorPages from './sector_pages';
import HighlightsPage from './highlights_page';
import ActionsPage from './actions_page';
import SearchPage  from "./search_page";
import AboutPage  from "./about_page";
import CommentsPage  from "./comments";
import SuggestionsPage  from "./suggestions";
import ResourcesPage  from "./resources_page";
import createBrowserHistory from 'history/createBrowserHistory'
import MapPage  from "./map_page";
import DatagrapherPage  from "./datagrapher_page";

import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-118150811-1');

const history = createBrowserHistory();
let track_location = (location) => {
  let path = location.pathname;
  if (location.query) {
    path += "#" + location.query;
  }
  ReactGA.pageview(path);
};

history.listen((location, action) => {
  if (action === "PUSH") {
    track_location(location);
  }
});


class App extends Component {
  componentWillMount() {
    track_location(window.location);
  }

  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="app">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/sectors/" component={SectorPages} />
              <Route path="/highlights/" component={HighlightsPage} />
              <Route path="/actions/" component={ActionsPage} />
              <Route path="/search/" component={SearchPage} />
              <Route path="/resources/" component={ResourcesPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/comments" component={CommentsPage} />
              <Route exact path="/suggestions" component={SuggestionsPage} />
              <Route exact path="/map" component={MapPage} />
              <Route exact path="/datagrapher" component={DatagrapherPage} />
              <Route path='*' component={NotFoundPage} />
            </Switch>
          </div>
        </ScrollToTop>
      </BrowserRouter>);
  }
}

export default App;
