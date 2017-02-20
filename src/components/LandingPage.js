import React from "react";
import { MA_LONG, POOL } from "constants/staticFiles";
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import { hashHistory } from "react-router";

const goToLeaderboardPage = leaderboardRoute => {
  hashHistory.push(`/sport${leaderboardRoute}`);
};

const LandingPage = props => (
  <div className="row">
    <div className="col-xs-6 col-sm-6">
      <Card>
        <CardMedia
          overlay={<CardTitle title="Table Tennis" subtitle="Table Tennis" />}
        >
          <img src={MA_LONG} />
        </CardMedia>
        <CardTitle title="Table Tennis" subtitle="Table Tennis" />
        <CardText>
          Current Champ - {props.champions || "someone"}
        </CardText>
        <CardActions>
          <RaisedButton
            label="ENTER"
            backgroundColor="#ff9100"
            onClick={() => goToLeaderboardPage("/TABLE_TENNIS")}
          />
        </CardActions>
      </Card>
    </div>
    <div className="col-xs-6 col-sm-6">
      <Card>
        <CardMedia overlay={<CardTitle title="Pool" subtitle="Pool" />}>
          <img src={POOL} />
        </CardMedia>
        <CardTitle title="Pool" subtitle="Pool" />
        <CardText>
          Current Champ - {props.champions || "someone"}
        </CardText>
        <CardActions>
          <RaisedButton
            label="ENTER"
            backgroundColor="#ff9100"
            onClick={() => goToLeaderboardPage("/")}
          />
        </CardActions>
      </Card>
    </div>
  </div>
);

LandingPage.propTypes = {
  champions: React.PropTypes.array
};

export default LandingPage;
