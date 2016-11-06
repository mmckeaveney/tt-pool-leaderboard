/* @flow */
import React from 'react';
import {MA_LONG, POOL} from 'constants/staticFiles';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {hashHistory} from 'react-router';

type LandingPageProps = {
    champions: Object
};

const goToLeaderboardPage = (leaderboardRoute) => {
  hashHistory.push(leaderboardRoute);
};

const LandingPage = (props: LandingPageProps) => (

    <div className="row">
        <div className="col-xs-6 col-sm-6">
            <Card>
                <CardMedia overlay={< CardTitle title="Table Tennis" subtitle="Table Tennis" />}>
                    <img src={MA_LONG}/>
                </CardMedia>
                <CardTitle title="Table Tennis" subtitle="Table Tennis"/>
                <CardText>
                    Current Champ - {props.champions || "someone"}
                </CardText>
                <CardActions>
                    <RaisedButton
                    label="ENTER"
                    backgroundColor="#ff9100"
                    onClick={() => goToLeaderboardPage("/table-tennis")} />
                </CardActions>
            </Card>
        </div>
        <div className="col-xs-6 col-sm-6">
            <Card>
                <CardMedia overlay={< CardTitle title="Pool" subtitle="Pool" />}>
                    <img src={POOL}/>
                </CardMedia>
                <CardTitle title="Pool" subtitle="Pool"/>
                <CardText>
                    Current Champ - {props.champions || "someone"}
                </CardText>
                <CardActions>
                    <RaisedButton
                    label="ENTER"
                    backgroundColor="#ff9100"
                    onClick={() => goToLeaderboardPage("/pool")}/>
                </CardActions>
            </Card>
        </div>
    </div>
);

export default LandingPage;
