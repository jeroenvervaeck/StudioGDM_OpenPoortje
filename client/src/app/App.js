import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import './app.scss';

import * as Routes from './routes';

import { RouteWithLayout } from './utilities';
import { PageLayout } from './layouts';

import { 
  LoginPage,
  AdminKidsPage,
  AdminFichePage,
} from './pages';


function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Switch>
          // Authentication
          <RouteWithLayout exact path={Routes.AUTHENTICATION} component={LoginPage} layout={PageLayout} />

          // Admin
          <RouteWithLayout exact path={Routes.ADMIN_KID} component={AdminKidsPage} layout={PageLayout} />
          <RouteWithLayout exact path={Routes.ADMIN_FICHE} component={AdminFichePage} layout={PageLayout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
