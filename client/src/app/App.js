import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import './app.scss';

import * as Routes from './routes';

import { RouteWithLayout } from './utilities';
import { ApiProvider, AuthProvider } from './services'; 
import { PageLayout } from './layouts';

import * as Pages from './pages';


function App() {
  return (
    <div className="App">
      <ApiProvider>
      <AuthProvider>
      <Router basename='/'>
        <Switch>
          // Authentication
          <RouteWithLayout exact path={Routes.AUTHENTICATION} component={Pages.LoginPage} layout={PageLayout} />
          // Oraganisation
          <RouteWithLayout exact path={Routes.ORGANISATION_DASHBOARD} component={Pages.OrganisationDashboardPage} layout={PageLayout} />
          <RouteWithLayout exact path={Routes.ORGANISATION_CRUD_KIDS} component={Pages.OrganisationCRUDkidsPage} layout={PageLayout} />
          <RouteWithLayout exact path={Routes.ORGANISATION_CRUD_SUPERVISOR} component={Pages.OrganisationCRUDsupervisorPage} layout={PageLayout} />
          // Supervisor
          <RouteWithLayout exact path={Routes.SUPERVISOR_KID} component={Pages.SupervisorKidsPage} layout={PageLayout} />
          <RouteWithLayout exact path={Routes.SUPERVISOR_FICHE} component={Pages.SupervisorFichePage} layout={PageLayout} />
          <RouteWithLayout exact path={Routes.SUPERVISOR_TIMELINE} component={Pages.SupervisorTimelinePage} layout={PageLayout} />
          <RouteWithLayout exact path={Routes.SUPERVISOR_SETTINGS} component={Pages.SupervisorSettingsPage} layout={PageLayout} />
          // fiches
          <RouteWithLayout exact path={Routes.SUPERVISOR_MOUNTAIN} component={Pages.SupervisorMountainFiche} layout={PageLayout} />
          <RouteWithLayout exact path={Routes.SUPERVISOR_DIALOG} component={Pages.SupervisorDialogFiche} layout={PageLayout} />
          <RouteWithLayout exact path={Routes.SUPERVISOR_SAVE_FICHE} component={Pages.SaveFiche} layout={PageLayout} />
        </Switch>
      </Router>
      </AuthProvider>
      </ApiProvider>
    </div>
  );
}

export default App;
