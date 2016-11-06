import React from 'react';
import {Route, IndexRoute} from 'react-router';
import CoreLayout from 'layouts/CoreLayout';
import LandingPage from 'components/LandingPage';
import LeaderboardPage from 'containers/LeaderboardPage';

export default (
    <Route path="/" component={CoreLayout}>
        <IndexRoute component={LandingPage}/>
        <Route path="/:sport" component={LeaderboardPage}/>
    </Route>
);
