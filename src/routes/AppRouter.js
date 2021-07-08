import React from "react";
import {Redirect, Route, Switch} from 'react-router-dom';

import {pageRoutes} from '../constants/pageRoutes';

import {MainPage, Page404, JoinBlock} from '../pages';

function AppRouter() {
  return (
    <Switch>
      <Route exact path={pageRoutes.MAIN_PAGE}>
        <MainPage/>
      </Route>

      <Route exact path={pageRoutes.MAIN_PAGE}>
        <JoinBlock/>
      </Route>
      <Redirect exact from="/" to={pageRoutes.LOG_IN}/>

      <Route>
        <Page404/>
      </Route>
    </Switch>
  );
}

export default AppRouter;