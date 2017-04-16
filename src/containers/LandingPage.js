import React, { PropTypes, Component } from 'react';
import OnFire from 'components/OnFire';
import { MA_LONG, POOL } from 'constants/staticFiles';
import { Card, CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import playerActionCreators from 'actions/playerActions';

const goToLeaderboardPage = (leaderboardRoute) => {
  hashHistory.push(`/sport${leaderboardRoute}`);
};

const SportCard = ({ title, img, route }) => (
  <Card>
    <CardMedia overlay={<CardTitle title={title} subtitle={title} />}>
      <img src={img} />
    </CardMedia>
    <CardTitle title={title} subtitle={title} />
    <CardActions>
      <RaisedButton
        label="ENTER"
        backgroundColor="#ff9100"
        onClick={() => goToLeaderboardPage(route)}
      />
    </CardActions>
  </Card>
);

SportCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};

class LandingPage extends Component {
  componentDidMount() {
    this.props.getPlayerHotStreaks();
  }

  render() {
    return (
      <div>
        <OnFire streaks={this.props.hotStreaks} />
        <div className="row">
          <div className="col-xs-6 col-sm-6">
            <SportCard
              title="Table Tennis"
              img={MA_LONG}
              route={'/TABLE_TENNIS'}
            />
          </div>
          <div className="col-xs-6 col-sm-6">
            <SportCard title="Pool" img={POOL} route={'/POOL'} />
          </div>
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {
  getPlayerHotStreaks: PropTypes.func.isRequired,
  hotStreaks: PropTypes.array
};

const mapStateToProps = (state) => ({
  hotStreaks: state.playerReducer.hotStreaks
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    ...playerActionCreators
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
