import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from 'layouts/CoreLayout';
import LandingPage from 'containers/LandingPage';
import LeaderBoardPage from 'containers/LeaderBoardPage';

export default (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={LandingPage} />
    <Route path="/sport/:sport" component={LeaderBoardPage} />
  </Route>
);
