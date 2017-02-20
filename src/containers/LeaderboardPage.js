import React, { Component, PropTypes } from "react";
import LeaderboardTable from "components/LeaderboardTable";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import playerActionCreators from "actions/playerActions";

const mapStateToProps = (state, ownProps) => ({
  playersByRanking: state.playerReducer[ownProps.params.sport],
  playersLoading: state.playerReducer.playersLoading
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...playerActionCreators
  },
  dispatch
);

class LeaderboardPage extends Component {
  componentDidMount() {
    const {
      params,
      getPlayersByRankingForSport
    } = this.props;

    getPlayersByRankingForSport(params.sport);
  }

  render() {
    const {
      params,
      playersByRanking,
      playersLoading
    } = this.props;

    return (
      <div className="row">
        <div className="col-xs-6 col-sm-6">
          <LeaderboardTable
            title={params.sport}
            players={playersByRanking}
            isLoading={playersLoading}
          />
        </div>
        <div className="col-xs-6 col-sm-6">
        </div>
      </div>
    );
  }
}

LeaderboardPage.propTypes = {
  params: PropTypes.object.isRequired,
  getPlayersByRankingForSport: PropTypes.func.isRequired,
  playersByRanking: PropTypes.array,
  playersLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaderboardPage);
