import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import {NotFound} from './not_found';
import Header from './header';
import Footer from './footer';
import AgricultureSectorPage from './sectors/agriculture';
import PublicHealthSectorPage from './sectors/public_health';

import EcosystemsSectorPage from './sectors/ecosystems';
import CoastalZonesSectorPage from './sectors/coastal_zones';
import EnergySectorPage from './sectors/energy';
import BuildingsSectorPage from './sectors/buildings';
import WaterResourcesSectorPage from './sectors/water_resources';
import TransportationSectorPage from './sectors/transportation';
import TelecommunicationSectorPage from './sectors/telecommunications';

import SectorsPage from './sectors/index';

class SectorPages extends Component {
  render() {
    return (
      <div className='sector-page'>
        <Header />
          <div className='container'>
            <Switch>
              <Route exact path="/sectors/" component={SectorsPage} />
              <Route path='/sectors/agriculture' component={AgricultureSectorPage} />
              <Route path='/sectors/buildings' component={BuildingsSectorPage} />
              <Route path='/sectors/coastal-zones' component={CoastalZonesSectorPage} />
              <Route path='/sectors/ecosystems' component={EcosystemsSectorPage} />
              <Route path='/sectors/energy' component={EnergySectorPage} />
              <Route path='/sectors/public-health' component={PublicHealthSectorPage} />
              <Route path='/sectors/telecommunications' component={TelecommunicationSectorPage} />
              <Route path='/sectors/transportation' component={TransportationSectorPage} />
              <Route path='/sectors/water-resources' component={WaterResourcesSectorPage} />
              <Route path='/' component={NotFound} />
            </Switch>
          </div>
        <Footer />
      </div>
    );
  }
}

export default SectorPages;
