import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import './app.scss';

import * as Routes from './routes';

import { RouteWithLayout } from './utilities';
import { ApiProvider, AuthProvider } from './services'; 
import { PageLayout } from './layouts';

import { 
  LoginPage,
  SupervisorKidsPage,
  SupervisorFichePage,
  SupervisorTimelinePage,
  SupervisorSettingsPage,
  SupervisorMountainFiche,
  SupervisorDialogFiche,
} from './pages';


function App() {
  return (
    <div className="App">
      <ApiProvider>
      <AuthProvider>
      <Router basename='/'>
        <Switch>
          // Authentication
          <RouteWithLayout exact path={Routes.AUTHENTICATION} component={LoginPage} layout={PageLayout} />

          // Supervisor
          <RouteWithLayout exact path={Routes.SUPERVISOR_KID} component={SupervisorKidsPage} layout={PageLayout} />
          <RouteWithLayout exact path={Routes.SUPERVISOR_FICHE} component={SupervisorFichePage} layout={PageLayout} />
          <RouteWithLayout exact path={Routes.SUPERVISOR_TIMELINE} component={SupervisorTimelinePage} layout={PageLayout} />
          <RouteWithLayout exact path={Routes.SUPERVISOR_SETTINGS} component={SupervisorSettingsPage} layout={PageLayout} />
          <RouteWithLayout exact path={Routes.SUPERVISOR_MOUNTAIN} component={SupervisorMountainFiche} layout={PageLayout} />
          <RouteWithLayout exact path={Routes.SUPERVISOR_DIALOG} component={SupervisorDialogFiche} layout={PageLayout} />
        </Switch>
      </Router>
      </AuthProvider>
      </ApiProvider>
    </div>
  );
}

export default App;
